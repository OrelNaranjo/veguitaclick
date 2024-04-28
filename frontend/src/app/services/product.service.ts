import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/config';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `${API_BASE_URL}/products`;
  private categoryUrl = `${API_BASE_URL}/categories`;
  private packageTypeUrl = `${API_BASE_URL}/packageTypes`;
  private imageUrl = `${API_BASE_URL}/images`;

  constructor(private http: HttpClient) { }

  // Product
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  getProductById(id: number) {
    return this.http.get(`${this.productUrl}/${id}`);
  }

  createProduct(product: any) {
    return this.http.post(this.productUrl, product);
  }

  updateProduct(id: number, product: any) {
    return this.http.put(`${this.productUrl}/${id}`, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.productUrl}/${id}`);
  }

  // Category
  getAllCategories() {
    return this.http.get(this.categoryUrl);
  }

  getCategoryById(id: number) {
    return this.http.get(`${this.categoryUrl}/${id}`);
  }

  createCategory(category: any) {
    return this.http.post(this.categoryUrl, category);
  }

  updateCategory(id: number, category: any) {
    return this.http.put(`${this.categoryUrl}/${id}`, category);
  }

  deleteCategory(id: number) {
    return this.http.delete(`${this.categoryUrl}/${id}`);
  }

  // PackageType
  getAllPackageTypes() {
    return this.http.get(this.packageTypeUrl);
  }

  getPackageTypeById(id: number) {
    return this.http.get(`${this.packageTypeUrl}/${id}`);
  }

  createPackageType(packageType: any) {
    return this.http.post(this.packageTypeUrl, packageType);
  }

  updatePackageType(id: number, packageType: any) {
    return this.http.put(`${this.packageTypeUrl}/${id}`, packageType);
  }

  deletePackageType(id: number) {
    return this.http.delete(`${this.packageTypeUrl}/${id}`);
  }

  // Image
  getAllImages() {
    return this.http.get(this.imageUrl);
  }

  getImageById(id: number) {
    return this.http.get(`${this.imageUrl}/${id}`);
  }

  createImage(image: any) {
    return this.http.post(this.imageUrl, image);
  }

  updateImage(id: number, image: any) {
    return this.http.put(`${this.imageUrl}/${id}`, image);
  }

  deleteImage(id: number) {
    return this.http.delete(`${this.imageUrl}/${id}`);
  }
}