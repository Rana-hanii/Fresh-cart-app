import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/products/iproduct';
import { WEPSITE_BASE_URL } from '../../constance/WEPSITE_BASE_URL';
import { IProductDet } from '../../interfaces/product-det/IProductDet';


@Injectable({
  providedIn: 'root'
})
export class ProuductsService {
  WEPSITE_BASE_URL='https://ecommerce.routemisr.com'

  constructor(private _httpClient:HttpClient) {

   }
   getAllProducts():Observable<IProduct>{
      return this._httpClient.get<IProduct>(`${WEPSITE_BASE_URL}/api/v1/products`);
   }

   getProductDet(id:string):Observable<IProductDet>{
    return this._httpClient.get<IProductDet>(`${WEPSITE_BASE_URL}/api/v1/products/${id}`);
    
   }
}
