import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  @Input() product;
  @Output() addToCartClick = new EventEmitter<string>();
  @Output() removeFromCartClick = new EventEmitter<string>();

  cartItems = [];
  
  /**
   * Life cycle method
   */
  constructor() {}
  
  /**
   * Life cycle init method
   */
  ngOnInit(): void {}
  
  /**
   * Emit event to add to cart
   */
  addToCart() {
    this.cartItems.push(this.product.id);
    this.addToCartClick.emit(this.product);
  }
  
  /**
   * Emit event for remove from cart
   */
  removeFromCart() {
    this.cartItems = this.cartItems.filter((item) => item != this.product.id);
    this.removeFromCartClick.emit(this.product);
  }
}
