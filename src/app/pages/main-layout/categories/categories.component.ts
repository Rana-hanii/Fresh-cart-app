import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../../core/services/categories/categories.service';
import { ICategories } from '../../../core/interfaces/categories/ICategories';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit{
  categoriesService=inject(CategoriesService);
  categories!:ICategories

  ngOnInit():void{
    this.allCategories()

  }

  allCategories():void{
    this.categoriesService.getAllCategories().subscribe({
      next:(res)=>{
        console.log(res);
        this.categories=res;
      }
    })

  }
}
