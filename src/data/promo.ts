import { socialUrls } from './contact'

// Promozione mostrata nel popup (componente PromoPopup.vue).
// - enabled: false per spegnerla subito, senza aspettare la scadenza
// - validUntil: ultimo giorno valido (AAAA-MM-GG). Dal giorno dopo il popup non
//   compare più da solo, anche senza rifare il deploy
// - id: cambialo quando crei una promozione nuova, così il popup ricompare
//   anche a chi aveva chiuso quello vecchio
export const promo = {
  enabled: true,
  id: 'whatsapp-15-nuovi-clienti',
  validUntil: '2026-12-31',
  discount: '15%',
  title: 'Prima volta da Ale’s Style?', //  : il nome non va a capo a metà
  text: 'Scrivimi su WhatsApp da qui: lo sconto è già tuo.',
  cta: 'Prenota ora',
  conditions: 'Riservato ai nuovi clienti, sul primo appuntamento. Non cumulabile con altre promozioni.',
  // Messaggio già scritto in WhatsApp: serve anche in negozio per riconoscere
  // chi arriva dal sito e ha diritto allo sconto
  whatsappMessage: 'Ciao! Vorrei prenotare il mio primo appuntamento con lo sconto del 15% del sito.',
  delayMs: 4000 // dopo quanto compare il popup
}

export const promoWhatsappUrl = `${socialUrls.whatsapp}?text=${encodeURIComponent(promo.whatsappMessage)}`

// Data di scadenza come testo leggibile, es. "31 dicembre 2026"
export const promoValidUntilText = new Date(`${promo.validUntil}T00:00:00`)
  .toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' })

export function isPromoActive(now = new Date()): boolean {
  return promo.enabled && now <= new Date(`${promo.validUntil}T23:59:59`)
}
