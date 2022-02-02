import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  SwiperOptions,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Autoplay, Pagination, Navigation]);
interface selectObj {
  value: string;
  viewValue: string;
}
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
    centeredSlides: true,
    autoplay: { delay: 3000, disableOnInteraction: false },
    scrollbar: { draggable: true },
    loop: true,
  };
  departments: selectObj[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  times: selectObj[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
  ngOnInit(): void {}
}
