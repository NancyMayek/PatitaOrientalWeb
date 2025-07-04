import axios from "axios";

const Product_base_rest_api_url = 'http://localhost:8080/api/v1/products';

class ProductService {
  async getAllProducts() {
    try {
      const response = await axios.get(Product_base_rest_api_url);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const response = await axios.get(`${Product_base_rest_api_url}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with id ${id}:`, error);
      throw error;
    }
  }

  async createProduct(product) {
    try {
      const response = await axios.post(Product_base_rest_api_url, product);
      return response.data;
    } catch (error) {
      console.error("Error creating product:", error);
      throw error;
    }
  }

  async updateProduct(id, product) {
    try {
      const response = await axios.put(`${Product_base_rest_api_url}/${id}`, product);
      return response.data;
    } catch (error) {
      console.error(`Error updating product with id ${id}:`, error);
      throw error;
    }
  }

  async deleteProduct(id) {
    try {
      await axios.delete(`${Product_base_rest_api_url}/${id}`);
    } catch (error) {
      console.error(`Error deleting product with id ${id}:`, error);
      throw error;
    }
  }

  async getActiveProducts() {
    try {
      const response = await axios.get(`${Product_base_rest_api_url}/active`);

      return response.data;
    } catch (error) {
      console.error(`Error fetching active products:`, error);
      throw error;
    }
  }
}

export default ProductService;