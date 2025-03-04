import { Routes } from '@angular/router';
import { ForgetPasswordComponent } from './auth/pages/forget-password/forget-password.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AllordersComponent } from './pages/main-layout/allorders/allorders.component';
import { BrandsComponent } from './pages/main-layout/brands/brands.component';
import { CartComponent } from './pages/main-layout/cart/cart.component';
import { CategoriesComponent } from './pages/main-layout/categories/categories.component';
import { DetailsComponent } from './pages/main-layout/details/details.component';
import { HomeComponent } from './pages/main-layout/home/home.component';
import { NotfoundComponent } from './pages/main-layout/notfound/notfound.component';
import { PaymentGatewayComponent } from './pages/main-layout/payment-gateway/payment-gateway.component';
import { ProductsComponent } from './pages/main-layout/products/products.component';
import { WishListComponent } from './pages/main-layout/wish-list/wish-list.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [loggedGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: SignInComponent, title: 'FreshCart-SignIn' },
      { path: 'signup', component: SignUpComponent, title: 'FreshCart-SignUp' },
      {
        path: 'forget',
        component: ForgetPasswordComponent,
        title: 'FreshCart-Forget',
      },
    ],
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'FreshCart-Home' },
      {
        path: 'categories',
        component: CategoriesComponent,
        title: 'FreshCart-Category',
      },
      { path: 'brands', component: BrandsComponent, title: 'FreshCart-Brands' },
      {
        path: 'products',
        component: ProductsComponent,
        title: 'FreshCart-Products',
      },
      { path: 'cart', component: CartComponent, title: 'FreshCart-Cart' },
      {
        path: 'wishList',
        component: WishListComponent,
        title: 'FreshCart-WishList',
      },
      {
        path: 'allorders/:id',
        component: AllordersComponent,
        title: 'FreshCart-Orders',
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'FreshCart-Product',
      },
      {
        path: 'payment/:id',
        component: PaymentGatewayComponent,
        title: 'FreshCart-Payment',
      },
      { path: '**', component: NotfoundComponent, title: 'FreshCart-NotFound' },
    ],
  },
];
