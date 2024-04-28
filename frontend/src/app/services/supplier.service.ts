import { Injectable } from '@angular/core';
import { API_BASE_URL } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Supplier } from '../interfaces/supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private supplierUrl= `${API_BASE_URL}/suppliers`;

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.supplierUrl);
  }

  getSupplierById(id: number) {
    return this.http.get(`${this.supplierUrl}/${id}`);
  }

  createSupplier(supplier: any) {
    return this.http.post(this.supplierUrl, supplier);
  }

  updateSupplier(id: number, supplier: any) {
    return this.http.put(`${this.supplierUrl}/${id}`, supplier);
  }

  deleteSupplier(id: number) {
    return this.http.delete(`${this.supplierUrl}/${id}`);
  }

}
