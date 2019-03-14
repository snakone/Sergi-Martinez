export const SLIDES: Slide[] = [
  {
    title: 'first.slide.title',
    description: 'first.slide.description',
    image: 'assets/img/slide1.png',
  },
  {
    title: 'second.slide.title',
    description: 'second.slide.description',
    image: 'assets/img/slide2.png',
  },
  {
    title: 'third.slide.title',
    description: 'third.slide.description',
    image: 'assets/img/slide3.png',
  },
  {
    title: 'fourth.slide.title',
    description: 'fourth.slide.description',
    image: 'assets/img/slide4.png',
  }
];

export const SLIDER_OPTIONS = {
  effect: 'flip',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
 };

 export interface Slide {
   title: string;
   description: string;
   image: string;
 }


