import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ICartProducts } from '../../../core/interfaces/cart/ICartProducts';
import { CartService } from '../../../core/services/cart/cart.service';
// import { ICartUpdate } from '../../../core/interfaces/cart/ICartUpdate';


@Component({
  selector: 'app-cart',
  imports: [ CurrencyPipe,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  _cartService: CartService = inject(CartService);
  _toastrService = inject(ToastrService);
  
  allCartProducts!: ICartProducts;

  ngOnInit(): void {
    this.getCart();
  }

  // ! products in cart

  getCart(): void {
    this._cartService.getCart().subscribe({
      next: (res) => {
        console.log(res);
        this.allCartProducts = res;
        this._cartService.numOfCartItems = res.numOfCartItems;
      },
    });
  }
  // ! clear all products in cart button
  clearCart(): void {
    this._cartService.clearCart(this.allCartProducts.data._id).subscribe({
      next: (res) => {
        console.log(res);
        this._toastrService.success(res.message, '');
        this.getCart();
       
      },
    });
  }

  // ! remove product in cart button

  removeFromCart(id: string): void {
    this._cartService.removeFromCart(id).subscribe({
      next: (res) => {
        console.log(res);
        this._toastrService.success(res.status, '');
        this.getCart();
      },
    });
  }

  // ! update product in cart button
  updateCart(id: string, count: number): void {
    this._cartService.updateCart(id, count).subscribe({
      next: (res) => {
        console.log(res);
        this.allCartProducts = res as ICartProducts;
        this._toastrService.success(res.status, '');
        this.getCart();
      },
    });
  }

}
