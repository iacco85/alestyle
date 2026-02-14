<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
// Assicurati che il nome del file corrisponda a quello nella tua cartella assets
import logo from './assets/LogoAleStyle.jpg'
import './style.css'
import SocialLinks from './components/SocialLinks.vue'
import DetailView from './components/DetailView.vue'
import { serviceList, type Service } from './data/services'
import { productList, type Product } from './data/products'
import { reviews } from './data/reviews'
import { contactInfo } from './data/contact'

// Stato per il cursore personalizzato
const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)
const scrollY = ref(0)

// Stato per la pagina di dettaglio (Generico per Servizi e Prodotti)
const selectedItem = ref<Service | Product | null>(null)
const backText = ref('')
const returnSectionId = ref('')

const openDetail = (item: Service | Product, sectionId: string, backLabel: string) => {
  selectedItem.value = item
  returnSectionId.value = sectionId
  backText.value = backLabel
  window.scrollTo(0, 0)
  isHovering.value = false
}

const closeDetail = () => {
  selectedItem.value = null
  nextTick(() => {
    const element = document.getElementById(returnSectionId.value)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

// Gestione Parallasse
const handleScroll = () => {
  scrollY.value = window.scrollY
}

// Aggiorna la posizione del cursore
const updateCursor = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

// Aggiungi/Rimuovi listener
onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  window.addEventListener('scroll', handleScroll)
  
   
  // Observer per animazioni allo scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
  window.removeEventListener('scroll', handleScroll)
})

// Stato per il menu mobile
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <!-- Menu di Navigazione -->
  <header class="site-header">
    <div class="header-logo-container">
      <a href="#home"><img :src="logo" alt="ALE STYLE" class="header-logo" /></a>
    </div>

    <!-- Icone Social Header (Desktop) -->
    <SocialLinks class="header-socials" link-class="social-link-header" :icon-size="20" />

    <div class="menu-toggle" @click="toggleMenu" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
      <div class="hamburger" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav :class="{ 'open': isMenuOpen }">
      <!-- Icone Social Menu Mobile -->
      <SocialLinks class="mobile-socials" />

      <ul>
        <li><a href="#home" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Home</a></li>
        <li><a href="#chi-sono" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Chi sono</a></li>
        <li><a href="#servizi" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Servizi</a></li>
        <li><a href="#prodotti" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Prodotti</a></li>
        <li><a href="#recensioni" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Dicono di me</a></li>
        <li><a href="#contatti" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Contatti</a></li>
      </ul>
    </nav>
  </header>

  <!-- Cursore Personalizzato -->
  <div 
    class="cursor" 
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }" 
    :class="{ active: isHovering }"
  ></div>
  <div 
    class="cursor-follower" 
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }" 
    :class="{ active: isHovering }"
  ></div>

  <main>
    <!-- Pagina Dettaglio Servizio -->
    <DetailView 
      v-if="selectedItem"
      :title="selectedItem.title"
      :description="selectedItem.description"
      :gallery="selectedItem.gallery"
      :back-text="backText"
      @close="closeDetail"
      @hover="(val) => isHovering = val"
    />

    <!-- Sezione Hero -->
    <section v-show="!selectedItem" class="hero" id="home">
      <div class="hero-bg" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
        <img src="./assets/home_negozio.webp" alt="Ale Style Mood Uomo Donna" />
        <div class="overlay"></div>
      </div>

      <div class="hero-content">
        <!-- Logo come elemento principale della Hero (al posto della foto) -->
        <h2 class="subtitle">Capelli che raccontano chi sei</h2>

        <p class="description">Esperienza, creatività e qualità professionale per valorizzare la tua unicità.</p>

        <div class="actions">
          <button class="cta-btn" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            Prenota Ora
          </button>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span>Scorri</span>
        <div class="line"></div>
      </div>
    </section>

    <!-- Sezione Chi sono -->
    <section v-show="!selectedItem" id="chi-sono" class="about section-padding">
      <div class="content-wrapper">
        <h2 class="section-title">La MIA <span class="highlight">Filosofia</span></h2>
        
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
    </section>

    <!-- Sezione Servizi -->
    <section v-show="!selectedItem" id="servizi" class="services-section section-padding">
      <h2 class="section-title center">I Miei <span class="highlight">Servizi</span></h2>
      <div class="services-grid">
        <div class="service-card" v-for="service in serviceList" :key="service.title" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          <div class="service-image-wrapper">
            <img :src="service.image" :alt="service.title" class="service-img">
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <button @click="openDetail(service, 'servizi', 'Torna ai servizi')" class="service-link-btn">Scopri di più</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Prodotti -->
    <section v-show="!selectedItem" id="prodotti" class="services-section section-padding">
      <h2 class="section-title center">I Nostri <span class="highlight">Prodotti</span></h2>
      <div class="services-grid">
        <div class="service-card" v-for="product in productList" :key="product.title" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          <div class="service-image-wrapper">
            <img :src="product.image" :alt="product.title" class="service-img">
          </div>
          <div class="service-content">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <button @click="openDetail(product, 'prodotti', 'Torna ai prodotti')" class="service-link-btn">Scopri di più</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Dicono di Noi -->
    <section v-show="!selectedItem" id="recensioni" class="reviews section-padding">
      <h2 class="section-title center">Dicono di <span class="highlight">ME</span></h2>
      <div class="reviews-grid">
        <div class="review-card" v-for="review in reviews" :key="review.id" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          <div class="stars">★★★★★</div>
          <p class="review-text">"{{ review.text }}"</p>
          <p class="review-author">- {{ review.author }}</p>
        </div>
      </div>
      <div class="google-link-container">
        <a href="https://www.google.com/maps" target="_blank" class="cta-btn google-btn" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          Leggi le recensioni su Google
        </a>
      </div>
    </section>

    <!-- Sezione Contatti -->
    <section v-show="!selectedItem" id="contatti" class="contact section-padding">
      <div class="contact-content">
        <h2 class="section-title">Vieni a <span class="highlight">Trovarmi</span></h2>
        <div class="info-grid">
          <div class="info-item">
            <h3>Indirizzo</h3>
            <p>
              <a :href="contactInfo.mapLink" target="_blank" class="map-link" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
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
        <SocialLinks class="social-icons contact-socials" @mouseenter="isHovering = true" @mouseleave="isHovering = false" />

      </div>
    </section>
  </main>
</template>
