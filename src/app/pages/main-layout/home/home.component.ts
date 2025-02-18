import { Component, inject, OnInit } from '@angular/core';
import { ProuductsService } from '../../../core/services/Products/prouducts.service';
import { IProduct } from '../../../core/interfaces/products/iproduct';
import { LoadingDataComponent } from "../../../shared/components/loading-data/loading-data.component";
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [LoadingDataComponent,CurrencyPipe,RouterLink ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
allProducts!:IProduct
  
 prouductsService=inject(ProuductsService)

 ngOnInit(): void {
     this.getProducts()
 }

getProducts():void {
  this.prouductsService.getAllProducts().subscribe({
    next:(res)=>{
      // console.log(res.data);
      this.allProducts=res;
    }
  })
}

// stringTrim(desc:string):string{
//  return desc.split(" ").splice(0,2).join(" ")
// }
}
