<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Assicurati che il nome del file corrisponda a quello nella tua cartella assets
import logo from './assets/LogoAleStyle.jpg'
import './style.css'
import SocialLinks from './components/SocialLinks.vue'
import { reviews, serviceList, contactInfo } from './data/siteData'

// Stato per il cursore personalizzato
const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)
const scrollY = ref(0)

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
    <!-- Sezione Hero -->
    <section class="hero" id="home">
      <div class="hero-bg" :style="{ transform: `translateY(${scrollY * 0.5}px)` }">
        <img src="./assets/home_negozio.webp" alt="Ale Style Mood Uomo Donna" />
        <div class="overlay"></div>
      </div>

      <div class="hero-content">
        <!-- Logo come elemento principale della Hero (al posto della foto) -->
        <h2 class="subtitle">Hair Stylist & Image Creator</h2>

        <p class="description">La tua unicità è la mia ispirazione. Creo il look perfetto per raccontare chi sei.</p>

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
    <section id="chi-sono" class="about section-padding">
      <div class="content-wrapper">
        <h2 class="section-title">La MIA <span class="highlight">Filosofia</span></h2>
        <p class="section-text">
          Da Ale Style, non ci limitiamo a tagliare i capelli. Creiamo opere d'arte che riflettono la tua personalità. 
          In un ambiente esclusivo e rilassante, ci prendiamo cura della tua immagine con passione e dedizione, 
          utilizzando solo i migliori prodotti per garantire salute e bellezza ai tuoi capelli.
        </p>
      </div>
    </section>

    <!-- Sezione Servizi -->
    <section id="servizi" class="services-section section-padding">
      <h2 class="section-title center">I Miei <span class="highlight">Servizi</span></h2>
      <div class="services-grid">
        <div class="service-card" v-for="service in serviceList" :key="service.title" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          <div class="service-image-wrapper">
            <img :src="service.image" :alt="service.title" class="service-img">
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a :href="service.link" class="service-link-btn">Scopri di più</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Sezione Dicono di Noi -->
    <section id="recensioni" class="reviews section-padding">
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
    <section id="contatti" class="contact section-padding">
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
