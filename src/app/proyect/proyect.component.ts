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
  constructor() {}

  ngOnInit(): void {}
}
