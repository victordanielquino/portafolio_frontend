import { Component, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss'],
})
export class ProyectComponent implements OnInit {
  proyect_1: string = 'https://victordanielquino.github.io/mathboard_prod/';
  github_1: string = 'https://github.com/victordanielquino/mathboard_prod';
  proyect_2: string = 'https://frozen-castle-28372.herokuapp.com/docs';
  github_2: string =
    'https://github.com/victordanielquino/my-blog-backend-nestjs';
  proyect_3: string = 'https://vdqj-tiendavirtual.herokuapp.com/docs';
  github_3: string =
    'https://github.com/victordanielquino/my-store-backend-nestjs';

  constructor() {}

  ngOnInit(): void {}
}
