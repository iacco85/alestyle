<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'
import chiSonoImg from '../assets/chi_sono.jpg'
import framesiLogo from '../assets/framesi-logo.png'
import SocialLinks from '../components/SocialLinks.vue'
import GoogleReviews from '../components/GoogleReviews.vue'
import { serviceList } from '../data/services'
import { contactInfo, socialUrls } from '../data/contact'
import { SITE_URL, SITE_NAME, DEFAULT_TITLE, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '../data/site'

defineEmits<{
  (e: 'hover', value: boolean): void
}>()

useHead({
  title: DEFAULT_TITLE,
  meta: [
    { name: 'description', content: DEFAULT_DESCRIPTION },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: DEFAULT_TITLE },
    { property: 'og:description', content: DEFAULT_DESCRIPTION },
    { property: 'og:image', content: DEFAULT_OG_IMAGE },
    { property: 'og:url', content: SITE_URL },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: DEFAULT_TITLE },
    { name: 'twitter:description', content: DEFAULT_DESCRIPTION },
    { name: 'twitter:image', content: DEFAULT_OG_IMAGE }
  ],
  link: [
    { rel: 'canonical', href: SITE_URL }
  ],
  script: [
    {
      type: 'application/ld+json',
      textContent: {
        '@context': 'https://schema.org',
        '@type': 'HairSalon',
        name: SITE_NAME,
        image: DEFAULT_OG_IMAGE,
        url: SITE_URL,
        telephone: contactInfo.phone,
        email: contactInfo.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Via Coletti 3',
          addressLocality: 'Rimini',
          addressRegion: 'RN',
          addressCountry: 'IT'
        },
        openingHoursSpecification: [
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '09:00', closes: '12:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Thursday'], opens: '15:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday'], opens: '09:00', closes: '17:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '08:30', closes: '12:30' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '15:00', closes: '19:00' },
          { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:30', closes: '19:00' }
        ],
        sameAs: [socialUrls.facebook, socialUrls.instagram]
      }
    }
  ]
})

// Parallasse hero (solo lato client: window non esiste durante l'SSG)
const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

let observer: IntersectionObserver | undefined

onMounted(() => {
  window.addEventListener('scroll', handleScroll)

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach(section => {
    observer!.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<template>
  <!-- Sezione Hero -->
  <section class="hero" id="home">
    <div class="hero-bg" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
      <img src="../assets/home_negozio.png" alt="Ale Style Mood Uomo Donna" fetchpriority="high" />
      <div class="overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="subtitle">Capelli che raccontano chi sei</h1>

      <p class="description">Esperienza, creatività e qualità professionale per valorizzare la tua unicità.</p>

      <div class="actions">
        <a :href="socialUrls.whatsapp" target="_blank" class="cta-btn" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">
          Prenota Ora
        </a>
      </div>
    </div>

    <div class="scroll-indicator">
      <span>Scorri</span>
      <div class="line"></div>
    </div>
  </section>

  <!-- Sezione Chi sono -->
  <section id="chi-sono" class="about section-padding">
    <h2 class="section-title center">La MIA <span class="highlight">Filosofia</span></h2>
    <div class="content-wrapper about-content">
      <img :src="chiSonoImg" alt="Alessandra, titolare di Ale's Style" class="about-img" loading="lazy">

      <div class="about-text">
        <h3 class="about-subtitle">Dal 2005, la bellezza dei tuoi capelli è la mia missione</h3>
        <p class="section-text">
          Mi chiamo Alessandra e da sempre vivo il mondo dell’hairstyling con passione autentica. Ho iniziato a soli 14 anni nei saloni di Rimini, trasformando giorno dopo giorno la mia vocazione in competenza, esperienza e visione.
        </p>
        <p class="section-text">
          Nel 2005 ho dato vita a Ale’s Style: uno spazio intimo e accogliente dove ogni persona viene seguita direttamente da me, con attenzione, ascolto e cura su misura.
        </p>

        <h3 class="about-subtitle">Un servizio personale, pensato per te</h3>
        <p class="section-text">
          Ogni trattamento nasce dall’ascolto e dallo studio della tua immagine, dei tuoi desideri e delle caratteristiche dei tuoi capelli. Credo in una bellezza che valorizza, che rispetta e che racconta chi sei davvero.
          <br><br>
          Nel mio lavoro unisco tecnica, creatività e aggiornamento costante per offrirti risultati naturali, armoniosi e sempre attuali.
        </p>

        <h3 class="about-subtitle">Qualità senza compromessi</h3>
        <p class="section-text">
          Per garantire risultati eccellenti utilizzo esclusivamente prodotti professionali selezionati, come quelli firmati Framesi, marchio italiano sinonimo di innovazione, ricerca e alta performance nel mondo dell’hairstyling.
        </p>

        <h3 class="about-subtitle">Più di un cambio look: un’esperienza</h3>
        <p class="section-text">
          Ale’s Style non è solo un salone, ma uno spazio dove concederti tempo, cura e attenzione autentica. Qui ogni dettaglio è pensato per farti sentire a tuo agio e per esaltare al meglio la tua unicità.
        </p>
      </div>
    </div>
  </section>

  <!-- Sezione Servizi -->
  <section id="servizi" class="services-section section-padding">
    <h2 class="section-title center">I Miei <span class="highlight">Servizi</span></h2>
    <div class="services-grid">
      <div class="service-card" v-for="service in serviceList" :key="service.slug" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">
        <div class="service-image-wrapper">
          <img :src="service.image" :alt="service.title" class="service-img" loading="lazy">
        </div>
        <div class="service-content">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <router-link v-if="service.gallery.length > 0" :to="`/servizi/${service.slug}`" class="service-link-btn">Scopri di più</router-link>
        </div>
      </div>
    </div>
  </section>

  <!-- Sezione Prodotti -->
  <section id="prodotti" class="brand-section section-padding">
    <h2 class="section-title center">I Nostri <span class="highlight">Prodotti</span></h2>
    <p class="brand-statement">Utilizziamo <span class="highlight">solo prodotti di altissima qualità</span>, perché i tuoi capelli meritano il meglio.</p>
    <img :src="framesiLogo" alt="Framesi" class="brand-logo" loading="lazy">
  </section>

  <!-- Sezione Dicono di Noi -->
  <section id="recensioni" class="reviews section-padding">
    <h2 class="section-title center">Dicono di <span class="highlight">ME</span></h2>

    <GoogleReviews @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)" />

  </section>

  <!-- Sezione Contatti -->
  <section id="contatti" class="contact section-padding">
    <div class="contact-content">
      <h2 class="section-title">Vieni a <span class="highlight">Trovarmi</span></h2>
      <div class="info-grid">
        <div class="info-item">
          <h3>Indirizzo</h3>
          <p>
            <a :href="contactInfo.mapLink" target="_blank" class="map-link" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="map-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {{ contactInfo.address }}
            </a>
          </p>
        </div>
        <div class="info-item">
          <h3>Orari</h3>
          <p style="white-space: pre-line;">{{ contactInfo.hours }}</p>
        </div>
        <div class="info-item">
          <h3>Contatti</h3>
          <p>Tel: {{ contactInfo.phone }}<br>Email: {{ contactInfo.email }}</p>
        </div>
      </div>

      <!-- Icone Social Contatti -->
      <SocialLinks class="social-icons contact-socials" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)" />

    </div>
  </section>
</template>
