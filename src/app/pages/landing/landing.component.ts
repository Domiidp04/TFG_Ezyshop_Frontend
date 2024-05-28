import { Component } from "@angular/core";
import { HeaderComponent } from "../../components/header/header.component";
import { ProductService } from "../../services/product.service";
import { Product } from "../../model/product";
import { SectionVideoComponent } from "./section-video/section-video.component";
import { SliderComponent } from "./slider/slider.component";
import { BentoComponent } from "./bento/bento.component";
import { InformationComponent } from "./information/information.component";
import { MarcasComponent } from "./marcas/marcas.component";


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    SectionVideoComponent,
    SliderComponent,
    BentoComponent,
    InformationComponent,
    MarcasComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  public products: Product[];


  constructor(private productService:ProductService) { }


  ngOnInit() {
    this.getProducts();
  }

  async getProducts(): Promise<void>{
    this.products = await this.productService.getProducts();
  }

}
