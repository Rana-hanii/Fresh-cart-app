import { IProducts } from '../../../../core/interfaces/products/IProducts';


import { SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProuductsService } from '../../../../core/services/Products/prouducts.service';
import { SearchProductsPipe } from '../../../../shared/pipes/search-products.pipe';
import { ProductCartComponent } from "./product-cart/product-cart.component";

@Component({
  selector: 'app-home-product',
  imports:[ ProductCartComponent,SearchProductsPipe,FormsModule],
  templateUrl: './home-product.component.html',
  styleUrl: './home-product.component.scss'
})
export class HomeProductComponent implements OnInit{
  allProducts!:IProducts;
  searchValue:string="";
  
 prouductsService=inject(ProuductsService)

 ngOnInit(): void {
     this.getProducts()
 }

getProducts():void {
  this.prouductsService.getAllProducts().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allProducts=res;
    }
  })

}

}
