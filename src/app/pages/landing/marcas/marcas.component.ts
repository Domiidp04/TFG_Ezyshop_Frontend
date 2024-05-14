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
    {name: 'Apple', logo: 'https://cdn.pccomponentes.com/img/repositorio/home/path4.webp'},
    {name: 'Samsung', logo: 'https://cdn.pccomponentes.com/img/repositorio/home/image-8.webp'},
    {name: 'Intel', logo: 'https://img.pccomponentes.com/pcblog/1666648800000/frame-10867-1.png'},
    {name: 'HP', logo: 'https://cdn.pccomponentes.com/img/repositorio/home/1024px-hp-logo-2012-1.webp'},
    // {name: 'Corsair', logo: 'https://res.cloudinary.com/dpfmihznr/image/upload/v1715359800/grid/teclado1.png'}
  ];


}
