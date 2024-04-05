import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';
import { CarouselModule } from 'primeng/carousel';
import { Button, ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule, ButtonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  //Responsive Options PrimeNG
  responsiveOptions: any[] | undefined = [];

  categories:Product[] = [];

  constructor(private productService: ProductService){ }

  ngOnInit() {
    this.responsiveOptionsGet();
    this.getProducts();
    };

    getProducts(){
      this.productService.getProducts().subscribe({
        next: data => {
          this.categories = data;
        },
        error: error => {
          console.error('Error:', error);
        }
      });
    }

    responsiveOptionsGet(){
      this.responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '1220px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '1100px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    }

}
