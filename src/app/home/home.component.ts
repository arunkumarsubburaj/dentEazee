import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    autoHeight: true,
    navigation: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    centeredSlides: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    scrollbar: { draggable: true },
    loop: true,
  };

  ngOnInit(): void {}
}
