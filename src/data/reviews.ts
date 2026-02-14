export interface Review {
  id: number;
  author: string;
  text: string;
  rating: number;
  date: string;
  profilePhoto?: string;
}

export const reviews: Review[] = [
  { id: 1, author: 'Mery M.', text: 'Bravissima e super comprensiva verso il cliente. Bellissimi colori e pieghe. Io mi trovo molto bene.', rating: 5, date: '1 settimana fa' },
  { id: 2, author: 'alessandra amatori', text: `Alessandra,più di una parrucchiera. Sempre molto attenta alla cliente, ti consiglia e si prende cura 
    di te in modo molto attento. Prodotti di altissima qualità e una piega che dura per giorni. Alessandra è la parrucchiera che ho sempre desiderato. 
    Sono sempre molto soddisfatta quando esco dal suo salone.`, rating: 5, date: 'ULtima modifica: un anno fa' },
  { id: 3, author: 'Silvia Salvatori', text: `Frequento questo salone da diversi anni 
    E devo dire che Alessandra lo
    Gestisce con grande professionalita, sempre accogliente e disponibile, riservata ma anche  molto socievole, molto sensibile alle richieste ed alla soddisfazione del Cliente, i suoi lavori sono unici 
    per ogni Donna che frequenta il salone…brava Alessandra alla prossima!!!`, rating: 5, date: '2 anni fa' },
]