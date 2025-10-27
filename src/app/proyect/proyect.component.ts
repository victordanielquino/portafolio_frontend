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

    vuce_portal_repo: string = "https://www.vuce.gob.bo/";
    vuce_portal_site: string = "https://www.vuce.gob.bo/";

    vuce_plataforma_repo: string = "https://plataforma.vuce.gob.bo/login";
    vuce_plataforma_site: string = "https://plataforma.vuce.gob.bo/login";

    colab_url: string = "https://gitlab.com/vdqj-cursos/umsa-maestria-ia/modulo-7/playstore/project-playstore/-/blob/main/notebooks/01_ingesta_playstore.ipynb?ref_type=heads";
    airflow_demo_url: string = "https://gitlab.com/vdqj-cursos/umsa-maestria-ia/modulo-7/playstore/project-playstore/-/tree/main/src?ref_type=heads";
    repo_data_url: string = "https://gitlab.com/vdqj-cursos/umsa-maestria-ia/modulo-7/playstore/project-playstore/-/blob/main/README.md?ref_type=heads";

    firma_digital_repo: string = "https://github.com/victordanielquino/adsib-firma-front/blob/main/README.md";
    firma_digital_site: string = "https://victordanielquino-jacobitus.netlify.app/adsib/home";

  constructor() {}

  ngOnInit(): void {}
}
