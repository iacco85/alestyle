<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { businessInfo, contactInfo } from '../data/contact'
import { SITE_URL, SITE_NAME } from '../data/site'

// Informativa privacy e cookie (art. 13 GDPR). Da aggiornare se il sito
// inizia a usare servizi esterni (analytics, mappe incorporate, widget social,
// script di Google): in quel caso servirebbe anche il banner di consenso.
const LAST_UPDATE = '28 settembre 2026'

defineEmits<{
  (e: 'hover', value: boolean): void
}>()

useHead({
  title: `Privacy e cookie | ${SITE_NAME}`,
  meta: [
    { name: 'description', content: `Informativa sul trattamento dei dati personali e sui cookie del sito ${SITE_NAME}.` }
  ],
  link: [
    { rel: 'canonical', href: `${SITE_URL}/privacy` }
  ]
})
</script>

<template>
  <section class="legal-page">
    <h1>Privacy e cookie</h1>
    <p class="legal-updated">Ultimo aggiornamento: {{ LAST_UPDATE }}</p>

    <p>
      Questa pagina descrive come vengono trattati i dati personali di chi visita il sito
      {{ SITE_URL.replace('https://', '') }}, ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR).
    </p>

    <h2>Titolare del trattamento</h2>
    <p>
      {{ businessInfo.owner }}<br />
      {{ businessInfo.registeredAddress }}<br />
      P.IVA {{ businessInfo.vatNumber }}<br />
      Email: <a :href="`mailto:${contactInfo.email}`" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">{{ contactInfo.email }}</a>
      &ndash; Tel. {{ contactInfo.phone }}
    </p>

    <h2>Quali dati trattiamo</h2>
    <h3>Dati di navigazione</h3>
    <p>
      Come ogni sito web, i server che lo ospitano registrano automaticamente alcuni dati tecnici
      (indirizzo IP, tipo di browser, data e ora della richiesta, pagina visitata). Servono solo a
      far funzionare il sito e a proteggerlo da abusi e attacchi informatici, non vengono usati per
      identificare o profilare i visitatori. La base giuridica è il legittimo interesse del titolare
      alla sicurezza del sito (art. 6, par. 1, lett. f GDPR).
    </p>

    <h3>Dati che ci invii tu</h3>
    <p>
      Il sito non ha moduli di contatto né aree riservate. Se ci contatti per telefono, email,
      WhatsApp o tramite i nostri profili social, useremo i dati che ci comunichi (nome, recapito,
      contenuto del messaggio) solo per risponderti e gestire il tuo appuntamento. La base giuridica
      è l'esecuzione di misure richieste da te (art. 6, par. 1, lett. b GDPR).
    </p>

    <h2>Cookie</h2>
    <p>
      Il sito <strong>non usa cookie di profilazione, di statistica o di terze parti</strong> e non
      contiene strumenti di tracciamento. Anche i caratteri tipografici sono ospitati direttamente sul
      sito, senza collegamenti a servizi esterni.
    </p>
    <p>
      Il fornitore di hosting può impostare dei cookie tecnici strettamente necessari alla sicurezza
      (ad esempio per distinguere i visitatori reali dai bot). Questi cookie non richiedono consenso
      (art. 122 del Codice Privacy e Linee guida del Garante del 10 giugno 2021), per questo il sito
      non mostra alcun banner. Puoi comunque bloccarli o cancellarli dalle impostazioni del tuo browser.
    </p>

    <h2>A chi vengono comunicati i dati</h2>
    <p>
      Il sito è ospitato da Cloudflare, Inc., che tratta i dati di navigazione come responsabile del
      trattamento. Cloudflare può trattare dati anche negli Stati Uniti; il trasferimento è coperto
      dall'adesione di Cloudflare all'EU-U.S. Data Privacy Framework e dalle clausole contrattuali
      standard approvate dalla Commissione europea.
    </p>
    <p>
      I link a Facebook, Instagram, WhatsApp e Google Maps portano a servizi esterni: il sito non
      carica nulla da queste piattaforme finché non ci clicchi. Una volta lì, vale l'informativa
      privacy della piattaforma stessa.
    </p>
    <p>I dati non vengono venduti né ceduti a terzi per finalità di marketing.</p>

    <h2>Per quanto tempo</h2>
    <p>
      I dati di navigazione sono conservati dal fornitore di hosting per il tempo strettamente
      necessario alle finalità di sicurezza. I dati dei contatti sono conservati per il tempo
      necessario a gestire la richiesta o l'appuntamento, salvo obblighi di legge (ad esempio fiscali).
    </p>

    <h2>I tuoi diritti</h2>
    <p>
      Puoi chiedere in qualsiasi momento di accedere ai tuoi dati, correggerli, cancellarli,
      limitarne il trattamento, opporti al trattamento o riceverli in un formato portabile
      (artt. 15&ndash;22 GDPR), scrivendo a
      <a :href="`mailto:${contactInfo.email}`" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">{{ contactInfo.email }}</a>.
      Hai anche il diritto di presentare reclamo al Garante per la protezione dei dati personali
      (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">www.garanteprivacy.it</a>).
    </p>

    <p class="legal-back">
      <a href="/" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">&larr; Torna al sito</a>
    </p>
  </section>
</template>
