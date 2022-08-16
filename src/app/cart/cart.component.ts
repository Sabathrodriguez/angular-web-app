import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  onSubmit() {
    this.items = this.cartService.clearCart();
    console.warn('Your oder has been submitted', this.checkoutForm.value);
    // window.alert('Your oder has been submitted');
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}
