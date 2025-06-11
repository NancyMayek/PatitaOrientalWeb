import { createContext, useState, useContext, useEffect, Children } from "react";

const ImagenContext = createContext();

export const ImageUploadProvider = ({children}) => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const cloudName = "dkufsisvv"; // Replace with your Cloudinary cloud name
  const uploadPreset = "unsigned_upload"; // Replace with your unsigned preset

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      handleUpload(file); // Call upload directly
    }
  };

  const handleUpload = async (file) => {
    if (!file) {
      alert("Please select an image first");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    setUploading(true);
    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.secure_url) {
        setUploadedUrl(data.secure_url);
      } else {
        console.error("Upload failed:", data);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
  <ImagenContext.Provider value={{ handleImageChange, handleUpload, uploading, uploadedUrl,setUploadedUrl}}>
    {children}
  </ImagenContext.Provider>
  );

};

export const useImageUpload = () => useContext(ImagenContext);