// Stato del sito. Cambia il valore e rifai il deploy per mostrare una pagina
// diversa al posto del sito, senza toccare nient'altro:
// - 'online'      sito vero e proprio (normale)
// - 'coming-soon' "il nuovo sito sta arrivando" (prima del lancio ufficiale)
// - 'maintenance' "sito in aggiornamento" (interventi dopo il lancio)
export const SITE_STATUS: 'online' | 'coming-soon' | 'maintenance' = 'online'

export const SITE_URL = 'https://www.alestyle.it'

export const SITE_NAME = "Ale's Style"

export const DEFAULT_TITLE = "Tagli di tendenza | Rimini, RN | Parrucchiera Ale's Style"

export const DEFAULT_DESCRIPTION = "Ale's Style, parrucchiera a Rimini dal 2005. Taglio, colore, trattamenti, extension e acconciature sposa in Via Coletti 3. Prenota il tuo appuntamento."

export const DEFAULT_OG_IMAGE = `${SITE_URL}/social/alestyle-nuovo-sito-facebook-1200x630.png`
