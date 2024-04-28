import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Supplier } from '../../../interfaces/supplier';
import { SupplierService } from '../../../services/supplier.service';

@Component({
  selector: 'app-supplier-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './supplier-detail.component.html',
  styleUrl: './supplier-detail.component.scss'
})
export class SupplierDetailComponent {

  supplier: Supplier = {} as Supplier;
  constructor(private supplierService: SupplierService,
    private route: ActivatedRoute
   ){}

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.supplierService.getSupplierById(id).subscribe((supplier: Supplier) => {
      this.supplier = supplier;
    });
  }
  
  }



