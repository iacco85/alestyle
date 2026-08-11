export interface GalleryItem {
  image: string;
  description: string;
}

export interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  gallery: GalleryItem[];
}
