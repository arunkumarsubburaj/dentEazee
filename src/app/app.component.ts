import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollbarEvents } from 'swiper/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  @HostListener('window:scroll', ['$event'])
  scrollHandler(event: ScrollbarEvents) {
    if (window.scrollY >= 200) {
      document.body.classList.add('fixedHeader');
    } else {
      document.body.classList.remove('fixedHeader');
    }
  }
  ngOnInit() {}
}
