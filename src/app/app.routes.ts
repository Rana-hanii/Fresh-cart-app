import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { NotfoundComponent } from './pages/main-layout/notfound/notfound.component';
import path from 'path';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/main-layout/home/home.component';
import { CategoriesComponent } from './pages/main-layout/categories/categories.component';
import { BrandsComponent } from './pages/main-layout/brands/brands.component';
import { CartComponent } from './pages/main-layout/cart/cart.component';
import { DetailsComponent } from './pages/main-layout/details/details.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  { path: '', component: MainLayoutComponent 
    ,children: [
        { path: 'home', component: HomeComponent },
        { path: 'categories', component: CategoriesComponent},
        { path: 'brands', component: BrandsComponent},
        { path: 'cart', component: CartComponent},
        { path: 'details/:id', component: DetailsComponent},
        { path: '**', component: NotfoundComponent },
      ]
  },
];
