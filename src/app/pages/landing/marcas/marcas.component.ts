import { Component } from '@angular/core';

@Component({
  selector: 'app-marcas',
  standalone: true,
  imports: [],
  templateUrl: './marcas.component.html',
  styleUrl: './marcas.component.scss'
})
export class MarcasComponent {

  brands = [
    {name: 'Apple', logo: 'https://res.cloudinary.com/dpfmihznr/image/upload/v1716804329/marcas/apple.webp'},
    {name: 'Samsung', logo: 'https://res.cloudinary.com/dpfmihznr/image/upload/v1716804329/marcas/samsung.webp'},
    {name: 'Intel', logo: 'https://res.cloudinary.com/dpfmihznr/image/upload/v1716804329/marcas/intel.webp'},
    {name: 'HP', logo: 'https://res.cloudinary.com/dpfmihznr/image/upload/v1716804329/marcas/hp.webp'},
  ];


}
