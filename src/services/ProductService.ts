import axios from "axios";
import { GetAllProductsModel } from "../models/responses/Products/GetAllProductsModel";
import { ProductModel } from "../models/responses/Products/ProductModel";

class ProductService {

  getAll(){
    return axios.get<GetAllProductsModel>('https://dummyjson.com/products');
  }

  getById(id:number){
    return axios.get<ProductModel>('https://dummyjson.com/products/'+id)
  }
}

export default ProductService;