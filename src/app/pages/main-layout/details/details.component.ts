import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IProductDet } from '../../../core/interfaces/product-det/IProductDet';
import { ProuductsService } from '../../../core/services/Products/prouducts.service';


@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  activeRoute = inject(ActivatedRoute);
  prouductsService = inject(ProuductsService);
  title=inject(Title);
  meta=inject(Meta);


  productHere!: IProductDet;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe({
      next: (res) => {
        console.log(res);
        let id = res.get('id') as string;
        this.currentProduct(id);
        console.log (id);
      },
    });
  }

  currentProduct(id:string): void {
    console.log (id);
    this.prouductsService.getProductDet(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log (id)
        this.productHere=res;
        this.title.setTitle(this.productHere.data.title);
        this.meta.addTag({
          name:'description',
          content:res.data.description
        }
         
        )

      },
    });
  }

}
