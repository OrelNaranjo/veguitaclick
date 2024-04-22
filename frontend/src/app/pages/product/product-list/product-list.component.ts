import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products = [
    {
      id: 1,
      sku: 'PRO1',
      name: 'Product 1',
      description: 'Description 1',
      price: 1000
    },
    {
      id: 2,
      sku: 'PRO2',
      name: 'Product 2',
      description: 'Description 2',
      price: 2000
    },
    {
      id: 3,
      sku: 'PRO3',
      name: 'Product 3',
      description: 'Description 3',
      price: 3000
    },
    {
      id: 4,
      sku: 'PRO4',
      name: 'Product 4',
      description: 'Description 4',
      price: 4000
    },
    {
      id: 5,
      sku: 'PRO5',
      name: 'Product 5',
      description: 'Description 5',
      price: 5000
    },
    {
      id: 6,
      sku: 'PRO6',
      name: 'Product 6',
      description: 'Description 6',
      price: 6000
    },
    {
      id: 7,
      sku: 'PRO7',
      name: 'Product 7',
      description: 'Description 7',
      price: 7000
    },
    {
      id: 8,
      sku: 'PRO8',
      name: 'Product 8',
      description: 'Description 8',
      price: 8000
    },
    {
      id: 9,
      sku: 'PRO9',
      name: 'Product 9',
      description: 'Description 9',
      price: 9000
    },
    {
      id: 10,
      sku: 'PRO10',
      name: 'Product 10',
      description: 'Description 10',
      price: 10000
    }
  ];

  deleteProduct(id: number) {
  }

}
