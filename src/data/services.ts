import taglioDonnaMain from '../assets/services/taglio-donna-main.jpg'
import barberUomoMain from '../assets/services/barber-uomo-main.jpg'
import colorazioneMain from '../assets/services/colorazione-main.jpg'
import trattamentiMain from '../assets/services/trattamenti-main.jpg'
import extensionMain from '../assets/services/extension-main.jpg'
import sposeMain from '../assets/services/spose-main.jpg'
import stylingMosso from '../assets/services/styling-mosso.jpg'
import acconciaturaIntrecciata from '../assets/services/acconciatura-intrecciata.jpg'
import ricostruzioneMain from '../assets/services/ricostruzione-main.jpg'
import bimbiMain from '../assets/services/servizio_bimbi.jpg'

export interface GalleryItem {
  image: string;
  description: string;
}

export interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;      // Immagine principale della card (es. '/images/taglio.jpg')
  link: string;       // Link opzionale (può rimanere '#')
  gallery: GalleryItem[];  // Lista di oggetti (immagine + descrizione)
}

export const serviceList: Service[] = [
  {
    title: 'Taglio e Styling Donna',
    slug: 'taglio-e-styling-donna',
    description: 'Tagli personalizzati, dal classico al moderno, studiati per valorizzare i lineamenti del tuo viso e la tua personalità.',
    image: taglioDonnaMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Barber e Uomo',
    slug: 'barber-e-uomo',
    description: 'Tagli uomo di tendenza e regolazione barba per un look curato, maschile e sempre in ordine.',
    image: barberUomoMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Colorazione e Schiariture',
    slug: 'colorazione-e-schiariture',
    description: 'Balayage, decolorazioni e colori moda. Nuance vibranti per dare luce e profondità alla tua chioma.',
    image: colorazioneMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Trattamenti Curativi',
    slug: 'trattamenti-curativi',
    description: 'Soluzioni specifiche per caduta, forfora e cute grassa con cellule staminali vegetali e prodotti naturali.',
    image: trattamentiMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Extension e Infoltimento',
    slug: 'extension-e-infoltimento',
    description: 'Allungamento e volume con capelli 100% naturali e cheratina vegetale per un risultato invisibile e duraturo.',
    image: extensionMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Spose e Cerimonie',
    slug: 'spose-e-cerimonie',
    description: 'Acconciature esclusive per il tuo giorno più bello. Disponibile anche servizio a domicilio per spose e invitate.',
    image: sposeMain,
    link: '#',
    gallery: [
      { image: stylingMosso, description: 'Raccolto morbido ed elegante per sposa.' },
      { image: acconciaturaIntrecciata, description: 'Acconciatura intrecciata per cerimonia.' }
    ]
  },
  {
    title: 'Ricostruzione e Lisciante',
    slug: 'ricostruzione-e-lisciante',
    description: 'Trattamenti alla cheratina per riparare i capelli danneggiati o per ottenere un liscio perfetto e setoso.',
    image: ricostruzioneMain,
    link: '#',
    gallery: []
  },
  {
    title: 'Speciale Bimbi',
    slug: 'speciale-bimbi',
    description: 'Cura delicata per i più piccoli, inclusi trattamenti naturali e atossici per la prevenzione e cura.',
    image: bimbiMain,
    link: '#',
    gallery: []
  }
]
