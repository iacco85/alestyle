export interface GalleryItem {
  image: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;      // Immagine principale della card (es. '/images/taglio.jpg')
  link: string;       // Link opzionale (può rimanere '#')
  gallery: GalleryItem[];  // Lista di oggetti (immagine + descrizione)
}

export const serviceList: Service[] = [
  { 
    title: 'Taglio & Styling Donna', 
    description: 'Tagli personalizzati, dal classico al moderno, studiati per valorizzare i lineamenti del tuo viso e la tua personalità.', 
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', description: 'Taglio scalato per dare volume e movimento.' },
      { image: 'https://images.unsplash.com/photo-1595476103518-3c182f246e91?q=80&w=1000&auto=format&fit=crop', description: 'Piega liscia con finitura lucida.' },
      { image: 'https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=1000&auto=format&fit=crop', description: 'Styling mosso per un look naturale.' }
    ]
  },
  { 
    title: 'Barber & Uomo', 
    description: 'Tagli uomo di tendenza e regolazione barba per un look curato, maschile e sempre in ordine.', 
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop', description: 'Sfumatura a macchinetta e rifinitura a forbice.' },
      { image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop', description: 'Regolazione barba e baffi con panno caldo.' },
      { image: 'https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=1000&auto=format&fit=crop', description: 'Taglio classico pettinato all\'indietro.' }
    ]
  },
  { 
    title: 'Colorazione & Schiariture', 
    description: 'Balayage, decolorazioni e colori moda. Nuance vibranti per dare luce e profondità alla tua chioma.', 
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop', description: 'Balayage biondo freddo su base naturale.' },
      { image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=1000&auto=format&fit=crop', description: 'Schiariture effetto sole (Babylights).' },
      { image: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=1000&auto=format&fit=crop', description: 'Colorazione ramata intensa e vibrante.' }
    ]
  },
  { 
    title: 'Trattamenti Curativi', 
    description: 'Soluzioni specifiche per caduta, forfora e cute grassa con cellule staminali vegetali e prodotti naturali.', 
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop', description: 'Trattamento detox per la cute.' },
      { image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop', description: 'Applicazione fiale anticaduta.' },
      { image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop', description: 'Massaggio cutaneo riattivante.' }
    ]
  },
  { 
    title: 'Extension & Infoltimento', 
    description: 'Allungamento e volume con capelli 100% naturali e cheratina vegetale per un risultato invisibile e duraturo.', 
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop', description: 'Infoltimento laterale invisibile.' },
      { image: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=1000&auto=format&fit=crop', description: 'Allungamento completo con cheratina.' }
    ]
  },
  { 
    title: 'Spose & Cerimonie', 
    description: 'Acconciature esclusive per il tuo giorno più bello. Disponibile anche servizio a domicilio per spose e invitate.', 
    image: 'https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1522337360705-8b13d5230394?q=80&w=1000&auto=format&fit=crop', description: 'Raccolto morbido ed elegante per sposa.' },
      { image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1000&auto=format&fit=crop', description: 'Acconciatura intrecciata per cerimonia.' }
    ]
  },
  { 
    title: 'Ricostruzione & Lisciante', 
    description: 'Trattamenti alla cheratina per riparare i capelli danneggiati o per ottenere un liscio perfetto e setoso.', 
    image: 'https://images.unsplash.com/photo-1595476103518-3c182f246e91?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1595476103518-3c182f246e91?q=80&w=1000&auto=format&fit=crop', description: 'Risultato liscio seta dopo il trattamento.' },
      { image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop', description: 'Ricostruzione profonda della fibra.' }
    ]
  },
  { 
    title: 'Speciale Bimbi', 
    description: 'Cura delicata per i più piccoli, inclusi trattamenti naturali e atossici per la prevenzione e cura.', 
    image: 'https://images.unsplash.com/photo-1595867865332-acd6236fa2bb?q=80&w=1000&auto=format&fit=crop',
    link: '#',
    gallery: [
      { image: 'https://images.unsplash.com/photo-1595867865332-acd6236fa2bb?q=80&w=1000&auto=format&fit=crop', description: 'Taglio pratico e divertente per bambino.' },
      { image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1000&auto=format&fit=crop', description: 'Treccine colorate per bambina.' }
    ]
  }
]