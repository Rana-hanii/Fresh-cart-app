import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WEBSITE_BASE_URL } from '../../constance/WEBSITE_BASE_URL';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private _httpClient: HttpClient) {}

  // !All Orders
  getAllOrders(id: string) {
    return this._httpClient.get(`${WEBSITE_BASE_URL}/api/v1/orders/${id}`);
  }

  // !Payment
  onlinePayment(cartId: string, userDetails: {}) {
    return this._httpClient.post(
      `${WEBSITE_BASE_URL}/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddress: userDetails,
      }
    );
  }

  // !Cash
  cashOnDelivery(cartId: string, userDetails: {}) {
    return this._httpClient.post(`${WEBSITE_BASE_URL}/v1/orders/${cartId}`, {
      shippingAddress: userDetails,
    });
  }
}
