import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProuductsService } from '../../../core/services/Products/prouducts.service';
import { LoadingDataComponent } from '../../../shared/components/loading-data/loading-data.component';
import { IProductDet } from '../../../core/interfaces/product-det/IProductDet';


@Component({
  selector: 'app-details',
  imports: [LoadingDataComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  activeRoute = inject(ActivatedRoute);
  prouductsService = inject(ProuductsService);
  productHere!: IProductDet;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe({
      next: (res) => {
        console.log(res);
        

        let id = res.get('id') as string;
        this.currentProduct('id');
      },
    });
  }

  currentProduct(id:string): void {
    this.prouductsService.getProductDet(id).subscribe({
      next: (res) => {
        console.log(res);
        this.productHere=res;
      },
    });
  }

}
