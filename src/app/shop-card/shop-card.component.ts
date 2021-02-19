// Core module
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IOrder } from '../challenge6/challenge6.component';

export interface Section {
  name: string;
  updated: string;
}

/**
 *  Shop Card Component
 */
@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
  styleUrls: ['./shop-card.component.scss'],
})

export class ShopCardComponent implements OnInit {
  
  @Input() techShop: IOrder;
  @Output() editTechShop = new EventEmitter<IOrder>();
  @Output() deleteTechShop = new EventEmitter<IOrder>();

  totalPrice: number = 0;

  /**
   *  Life circle Method
   */
  constructor(private dialog: MatDialog) {}

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.techShop.newOrderArr.forEach((item) => {
      this.totalPrice += item.price;
    });
  }

  /**
   * Edit shop-card component
   */
  editTechShopClick() {
    this.editTechShop.emit(this.techShop);
  }

  /**
   * Delete shop-card component
   */
  deleteTechShopClick() {
    this.deleteTechShop.emit(this.techShop);
  }
}
