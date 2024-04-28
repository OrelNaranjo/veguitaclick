import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../interfaces/supplier';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.scss'
})
export class SupplierListComponent {

  suppliers: Supplier[] = [];
  constructor(private supplierService: SupplierService ){}

  ngOnInit(){
    this.supplierService.getAllSuppliers().subscribe((suppliers: Supplier[]) => {
      this.suppliers = suppliers;
    });
  }

  deleteSupplier(id: number) {
  }

}
