export interface CarouselPost {
  index: number;
  img: string;
  title: string;
  goTo: string;
  detailsTitle: string;
  detailsBody: string;
}

export class CarouselProductPost implements CarouselPost {
  index: number;
  img: string;
  title: string;
  goTo: string;
  detailsTitle: string;
  detailsBody: string;
  downloadIOS: string;
  downloadAndroid: string;

  constructor(object: any) {
    Object.assign(this, object);
  }
}

export class CarouselEventPost implements CarouselPost {
  index: number;
  img: string;
  title: string;
  goTo: string;
  detailsTitle: string;
  detailsBody: string;
  date: string;
  location: string;
}