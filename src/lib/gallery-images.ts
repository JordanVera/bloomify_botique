export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: string;
  featured: boolean;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: '/gallery/gallery-01.png',
    alt: 'Luxury red rose ramó wrapped in hot-pink paper by Bloomify Boutique in El Paso',
    category: 'ramos',
    featured: true,
  },
  {
    id: 2,
    src: '/gallery/gallery-02.png',
    alt: 'Blush, pink, and white rose bouquet with gold-rim wrapping from Bloomify Boutique',
    category: 'ramos',
    featured: true,
  },
  {
    id: 3,
    src: '/gallery/gallery-03.png',
    alt: 'Stargazer lily bouquet wrapped in cream paper by Bloomify Boutique El Paso',
    category: 'seasonal',
    featured: true,
  },
  {
    id: 4,
    src: '/gallery/gallery-04.png',
    alt: 'Red and strawberry-pink wrapped ramós styled together on a sunlit table',
    category: 'ramos',
    featured: true,
  },
  {
    id: 5,
    src: '/gallery/gallery-05.png',
    alt: 'Hot-pink rose ramó in translucent black and pink wrapping paper',
    category: 'ramos',
    featured: true,
  },
  {
    id: 6,
    src: '/gallery/gallery-06.png',
    alt: 'Yellow and white rose ramó wrapped in pastel yellow paper for Yellow Flower Day',
    category: 'seasonal',
    featured: true,
  },
  {
    id: 7,
    src: '/gallery/gallery-07.png',
    alt: 'Graduation ramó with black and hot-pink wrapping and a pink tassel accent',
    category: 'grad',
    featured: true,
  },
  {
    id: 8,
    src: '/gallery/gallery-08.png',
    alt: 'White and lavender rose ramó wrapped in translucent purple florist paper',
    category: 'ramos',
    featured: true,
  },
  {
    id: 9,
    src: '/gallery/gallery-09.png',
    alt: 'All-white rose ramó with satin ribbon by Bloomify Boutique',
    category: 'ramos',
    featured: true,
  },
  {
    id: 10,
    src: '/gallery/gallery-10.png',
    alt: 'Bloomify Boutique wrapping papers and rose stems on the design table',
    category: 'seasonal',
    featured: true,
  },
];
