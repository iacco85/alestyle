export interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  gallery: string[];
}

export const productList: Product[] = [
  {
    title: 'Shampoo Ristrutturante',
    description: 'Detergente delicato arricchito con cheratina e oli naturali per rinforzare la fibra capillare fin dal primo lavaggio.',
    image: 'https://images.unsplash.com/photo-1585232561307-3f83b0ed5778?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1585232561307-3f83b0ed5778?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  {
    title: 'Maschera Illuminante',
    description: 'Trattamento intensivo per donare lucentezza e morbidezza immediata ai capelli spenti, senza appesantirli.',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-280553fe75a3?q=80&w=1000&auto=format&fit=crop'
    ]
  }
]