import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ProductService } from "../../services/product.service";
import { Product } from "../../model/product";
import { SectionVideoComponent } from "./section-video/section-video.component";
import { SliderComponent } from "./slider/slider.component";
import { BentoComponent } from "./bento/bento.component";
import { InformationComponent } from "./information/information.component";


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    SectionVideoComponent,
    SliderComponent,
    BentoComponent,
    InformationComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  products: Product[] = [];


  constructor(private productService:ProductService) { }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: data => {
        this.products = data;
      },
      error: error => {
        console.error('Error:', error);
      }
    });
  }

}
