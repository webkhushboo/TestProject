// Core module
import { AddNewOrderComponent } from './../add-new-order/add-new-order.component';
import { Component, OnInit } from '@angular/core';
// Mat dialog
import { MatDialog } from '@angular/material/dialog';

export interface IItem {
  category: string;
  item: string;
  price: number;
}

export interface IOrder {
  customerName: string;
  email: string;
  newOrderArr: IItem[];
}

/**
 * Challenge6 component
 */
@Component({
  selector: 'app-challenge6',
  templateUrl: './challenge6.component.html',
  styleUrls: ['./challenge6.component.scss'],
})

export class Challenge6Component implements OnInit {
  techShopArray: IOrder[] = [];

  /**
   * Life cycle method
   * @param dialog MatDialog
   */
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(AddNewOrderComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.techShopArray.push(result);
      }
    });
  }

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.techShopArray = [
      {
        customerName: 'PewDiePie',
        email:'PewDiePie@gmail.com',
        newOrderArr: [
          {
            price: 246,
            item: 'AMD Ryzen 5 2600',
            category: 'CPU',
          },
          {
            price: 2,
            item: 'MSI PRO Z390-A',
            category: 'Motherboard',
          },
        ],
      },
      {
        customerName: 'Filthy Frank',
        email:'georgemiller@gmail.com',
        newOrderArr: [
          {
            price: 306,
            category: 'Video Card',
            item: 'ZOTAC GeForce GTX 1060',
          },
          {
            price: 2,
            category: 'Memory',
            item: 'CORSAIR Vengeance RGB Pro 16GB',
          },
        ],
      },
    ];
  }

  /**
   * Edit shop-card component
   */
  editTechShop(techShop) {
    const dialogRef = this.dialog.open(AddNewOrderComponent, {
      data: techShop,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.techShopArray.forEach((item, index) => {
        if (item.customerName === result.customerName) {
          this.techShopArray[index] = result;
        }
      });
    });
  }

  /**
   * Delete shop-card component
   */
  deleteTeshShop(shop) {
    this.techShopArray.forEach((item, index) => {
      if (item.customerName === shop.customerName) {
        this.techShopArray = [
          ...this.techShopArray.slice(0, index),
          ...this.techShopArray.slice(index + 1, this.techShopArray.length),
        ];
      }
    });
  }
}
