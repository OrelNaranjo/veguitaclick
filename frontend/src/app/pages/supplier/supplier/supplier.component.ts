import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupplierService } from '../../../services/supplier.service';
import { Supplier } from '../../../interfaces/supplier';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {

  isNew=true;

  supplierForm = new FormGroup({
    id: new FormControl(0), 
    rut: new FormControl(''),
    name: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    products: new FormArray([]),
  });

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if(id != undefined){
      this.isNew = false;
      this.supplierService.getSupplierById(id).subscribe((supplier: any) => {
        this.loadSupplier(supplier);
        this.supplierForm.get('id')?.disable();
      });
    }
  }

  loadSupplier(supplier: Supplier) {
    const productsFormArray = this.supplierForm.get('products') as FormArray;
    productsFormArray.clear();
    supplier.product.forEach(product => {
      productsFormArray.push(new FormGroup({
        id: new FormControl(product.id),
      }));
    });
    const { product, ...supplierWithoutProduct } = supplier;
    this.supplierForm.patchValue(supplierWithoutProduct);
  }

  onSubmit() {
    if (this.supplierForm.valid) {
      const supplier = this.supplierForm.value;
      if (supplier?.id) {
        this.supplierService.updateSupplier(supplier.id, supplier).subscribe(response => {
          console.log(response);
        });
      } else {
        this.supplierService.createSupplier(supplier).subscribe(response => {
          console.log(response);
        });
      }
    }
  }
}


