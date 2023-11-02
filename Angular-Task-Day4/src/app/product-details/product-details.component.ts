
// product-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() products: { name: string; price: number }[] = [];
  @Output() productDeleted = new EventEmitter<{ name: string; price: number }>();

  deleteProduct(product: { name: string; price: number }) {
    this.productDeleted.emit(product);
  }
}
