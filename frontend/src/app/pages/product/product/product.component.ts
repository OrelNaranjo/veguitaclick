import { Component } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  isNew = true;

  productForm = new FormGroup({
    id: new FormControl(0),
    barcode: new FormControl(''),
    sku: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(0),
    cost: new FormControl(0),
    discontinued: new FormControl(false),
    is_selleable: new FormControl(true),
    is_purchase: new FormControl(true),
    min_stock: new FormControl(0),
    max_stock: new FormControl(0),
    weight: new FormControl(0),
    width: new FormControl(0),
    height: new FormControl(0),
    length: new FormControl(0),
    category: new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
    }),
    images: new FormArray([]),
    packageType: new FormGroup({
      id: new FormControl(0),
      name: new FormControl(''),
    }),
  });

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if(id != undefined){
      this.isNew = false;
      this.productService.getProductById(id).subscribe((product: any) => {
        this.loadProduct(product);
        this.productForm.get('id')?.disable();
      });
    }
  }

  loadProduct(product: Product) {
    const imagesFormArray = this.productForm.get('images') as FormArray;
    imagesFormArray.clear();
    product.images.forEach(image => {
      imagesFormArray.push(new FormGroup({
        id: new FormControl(image.id),
        url: new FormControl(image.url),
        alt: new FormControl(image.alt)
      }));
    });
    const { images, ...productWithoutImages } = product;
    this.productForm.patchValue(productWithoutImages);
  }

  onSubmit() {
    if (this.productForm.valid) {
      const product = this.productForm.value;
      if (product?.id) {
        this.productService.updateProduct(product.id, product).subscribe(response => {
          console.log(response);
        });
      } else {
        this.productService.createProduct(product).subscribe(response => {
          console.log(response);
        });
      }
    }
  }
}