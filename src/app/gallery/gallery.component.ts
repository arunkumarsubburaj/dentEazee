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

const data2 = [
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

const data = [
  {
    srcUrl: './../../assets/images/gallery/g1.jpg',
    previewUrl: './../../assets/images/gallery/g1.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g2.jpg',
    previewUrl: './../../assets/images/gallery/g2.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g3.jpg',
    previewUrl: './../../assets/images/gallery/g3.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g4.jpg',
    previewUrl: './../../assets/images/gallery/g4.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g5.jpg',
    previewUrl: './../../assets/images/gallery/g5.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g6.jpg',
    previewUrl: './../../assets/images/gallery/g6.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g7.jpg',
    previewUrl: './../../assets/images/gallery/g7.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g8.jpg',
    previewUrl: './../../assets/images/gallery/g8.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g9.jpg',
    previewUrl: './../../assets/images/gallery/g9.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g10.jpg',
    previewUrl: './../../assets/images/gallery/g10.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g11.jpg',
    previewUrl: './../../assets/images/gallery/g11.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g12.jpg',
    previewUrl: './../../assets/images/gallery/g12.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g13.jpg',
    previewUrl: './../../assets/images/gallery/g13.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g14.jpg',
    previewUrl: './../../assets/images/gallery/g14.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g15.jpg',
    previewUrl: './../../assets/images/gallery/g15.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g16.jpg',
    previewUrl: './../../assets/images/gallery/g16.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g17.jpg',
    previewUrl: './../../assets/images/gallery/g17.jpg',
  },
  {
    srcUrl: './../../assets/images/gallery/g18.jpg',
    previewUrl: './../../assets/images/gallery/g18.jpg',
  },

];
