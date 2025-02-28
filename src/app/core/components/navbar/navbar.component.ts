import { Component, inject, Input, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FlowbiteService } from '../../services/flowbite/flowbite.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
 

  _cartService: CartService = inject(CartService);

  @Input() isLogin: boolean = false;

  constructor(private flowbiteService: FlowbiteService) {}
  router = inject(Router);

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {});
    this.cartItems();
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  cartItems(): void {
    this._cartService.getCart().subscribe({
      next: (res) => {
        this._cartService.numOfCartItems = res.numOfCartItems;

      },
    });
  }
}
