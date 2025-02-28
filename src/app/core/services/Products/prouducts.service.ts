import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/products/IProducts';

import { WEBSITE_BASE_URL } from '../../constance/WEBSITE_BASE_URL';
import { IProductDet } from '../../interfaces/product-det/IProductDet';

@Injectable({
  providedIn: 'root',
})
export class ProuductsService {
  // WEBSITE_BASE_URL='https://ecommerce.routemisr.com'

  constructor(private _httpClient: HttpClient) {}
  getAllProducts(): Observable<IProduct> {
    return this._httpClient.get<IProduct>(
      `${WEBSITE_BASE_URL}/api/v1/products`
    );
  }
  // product details
  getProductDet(id: string): Observable<IProductDet> {
    console.log(id);
    return this._httpClient.get<IProductDet>(
      `${WEBSITE_BASE_URL}/api/v1/products/${id}`
    );
  }
}
