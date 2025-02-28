import { CurrencyPipe } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../../../../../core/interfaces/products/IProducts';
import { CartService } from '../../../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product-cart',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  @Input() product!: IProduct;
  _cartService: CartService = inject(CartService);
  _toastrService=inject(ToastrService)


  addToCart(id: string) {
    this._cartService.addToCart(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log(id);
        this._cartService.numOfCartItems = res.numOfCartItems;
        this._toastrService.success(res.message,'');
        

      },
    });
  }


}
 