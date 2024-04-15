import { Injectable } from '@angular/core';
import { Products } from '../models/products.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urlAPI : string = "https://dummyjson.com/products";

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<Products>(this.urlAPI);
  }


}
