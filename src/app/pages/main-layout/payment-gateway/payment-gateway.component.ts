import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-payment-gateway',
  imports: [ReactiveFormsModule],
  templateUrl: './payment-gateway.component.html',
  styleUrl: './payment-gateway.component.scss',
})
export class PaymentGatewayComponent {
  isLoading: boolean = false;
  _formGroup = inject(FormBuilder);
  payForm!: FormGroup;
  ngOnInit() {
    this.checkoutForm();
  }
  // !validation
  checkoutForm(): void {
    this.payForm = this._formGroup.group({
      city: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      details: [null, [Validators.required]],
    });
  }
  // !Payment
  onlinePayment(): void {}
  // !Cash
  cashOnDelivery(): void {}
  // !Submit
  onSubmit(): void {}
}
