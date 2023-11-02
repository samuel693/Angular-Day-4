import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Output() productAdded = new EventEmitter<{ name: string; price: number }>();
  name = '';
  price = 0;
  isValidName(){
    return this.name != '' && this.name.length > 3
  }

  get isValidAge(){
    return this.price >=100 && this.price<=2000
  }

  addProduct() {
    this.productAdded.emit({ name: this.name, price: this.price });
    this.name = '';
    this.price = 0;
  }
}
