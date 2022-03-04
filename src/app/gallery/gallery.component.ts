import { Component, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
  GalleryRef,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  items!: GalleryItem[];
  itemsClient!: GalleryItem[];

  imageData = data;
  imageDataClient = data2;
  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.itemsClient = this.imageDataClient.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    this.gallery.ref('lightbox').load(this.items);

    // Add custom gallery config to the lightbox (optional)
    this.gallery.ref().setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
  tabChange(event: any) {
    this.gallery.ref().reset();
    if (event.index == 0) {
      this.gallery.ref('lightbox').load(this.items);
    } else {
      this.gallery.ref('lightboxClient').load(this.itemsClient);
    }
  }
}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
  },
];

const data2 = [
  {
    srcUrl: './../../assets/images/home-slide1.png',
    previewUrl: './../../assets/images/home-slide1.png',
  },
  {
    srcUrl: './../../assets/images/home-slide2.png',
    previewUrl: './../../assets/images/home-slide2.png',
  },
  {
    srcUrl: './../../assets/images/teeth-cleaning.jpg',
    previewUrl: './../../assets/images/teeth-cleaning.jpg',
  },
  {
    srcUrl: './../../assets/images/teeth-whitening.jpg',
    previewUrl: './../../assets/images/teeth-whitening.jpg',
  },
];
