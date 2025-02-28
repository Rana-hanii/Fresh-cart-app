import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { MainLayoutComponent } from "./core/layouts/main-layout/main-layout.component";
import { NgxSpinnerModule , NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent,NgxSpinnerModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  ngx=inject(NgxSpinnerService);

  title = 'fresh-cart';


  // constructor(private flowbiteService: FlowbiteService) {}

  // ngOnInit(): void {
  //  this.ngx.show();

  //  setTimeout(() => {
  //   this.ngx.hide();
  //  }, 1000);
  // }
}
