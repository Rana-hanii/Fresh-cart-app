import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { FooterComponent } from "./core/components/footer/footer.component";
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { MainLayoutComponent } from "./core/layouts/main-layout/main-layout.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  // title = 'fresh-cart';
  // constructor(private flowbiteService: FlowbiteService) {}

  // ngOnInit(): void {
  //   this.flowbiteService.loadFlowbite(flowbite => {
  //     // Your custom code here
  //     // console.log('Flowbite loaded', flowbite);
  //   });
  // }
}
