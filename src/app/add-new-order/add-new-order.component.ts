// Core module
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// Angular Forms
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IOrder } from '../challenge6/challenge6.component';

interface Category {
  value: string;
  viewValue: string;
}

/**
 * Add-New-Order Component
 */
@Component({
  selector: 'app-add-new-order',
  templateUrl: './add-new-order.component.html',
  styleUrls: ['./add-new-order.component.scss'],
})
export class AddNewOrderComponent implements OnInit {
  newOrderForm: FormGroup;

  categories: Category[] = [
    {value: 'CPU-0', viewValue: 'CPU'},
    {value: 'Motherboard-1', viewValue: 'Motherboard'},
    {value: 'Videocard-2', viewValue: 'Videocard'},
    {value: 'Memory-2', viewValue: 'Memory'}
  ];

  /**
   * Life cycle method
   */
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: IOrder) {}

  /**
   * Life cycle init method
   */
  ngOnInit(): void {
    this.newOrderForm = new FormGroup({
      customerName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      newOrderArr: new FormArray([]),
    });
    if(this.data) {
      // Edit playlist case
      if(this.data.newOrderArr.length > 0) {
        this.data.newOrderArr.forEach(item => this.addTonewOrderArray());
      }
      this.newOrderForm.patchValue(this.data);
    } else {
      // Create new playlist case
      this.addTonewOrderArray();
    }
  }

  /**
   * Return customerName
   */
  get customerName(): AbstractControl {
    return this.newOrderForm.get('customerName');
  }

  /**
   * Return email
   */
  get email(): AbstractControl {
    return this.newOrderForm.get('email');
  }

  /**
   * Return newOrderForm
   */
  get newOrderArr(): FormArray {
    return this.newOrderForm.get('newOrderArr') as FormArray;
  }

  /**
   * Add to new order array
   */
  addTonewOrderArray() {
    const formGroup = new FormGroup({
      category: new FormControl('', Validators.required),
      item: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
    this.newOrderArr.push(formGroup);
  }
  /**
   * Remove from order array
   * @param index
   */
  removeFromArray(index) {
    this.newOrderArr.removeAt(index);
  }
}
