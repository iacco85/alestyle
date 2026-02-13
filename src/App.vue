<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Assicurati che il nome del file corrisponda a quello nella tua cartella assets
import logo from './assets/LogoAleStyle.jpg'
import './style.css'

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

// Dati Mock per le recensioni
const reviews = [
  { id: 1, author: 'Laura B.', text: 'Professionalità e cortesia. Il miglior taglio che abbia mai avuto!', rating: 5 },
  { id: 2, author: 'Marco G.', text: 'Ambiente rilassante e staff preparatissimo. Consigliato.', rating: 5 },
  { id: 3, author: 'Sofia R.', text: 'Prodotti di alta qualità e grande attenzione al cliente.', rating: 5 },
]

// Dati per i Servizi
const serviceList = [
  { 
    title: 'Taglio & Styling', 
    description: 'Esprimi la tua unicità con un taglio studiato per valorizzare i tuoi lineamenti.', 
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop',
    link: '#' 
  },
  { 
    title: 'Colorazione', 
    description: 'Nuance vibranti e tecniche innovative per dare luce e profondità ai tuoi capelli.', 
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop',
    link: '#' 
  },
  { 
    title: 'Trattamenti', 
    description: 'Rituali di benessere per rigenerare la fibra capillare e rilassare la mente.', 
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1000&auto=format&fit=crop',
    link: '#' 
  }
]

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
    <div class="header-socials">
      <a href="https://www.facebook.com" target="_blank" class="social-link-header" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
      </a>
      <a href="https://www.instagram.com" target="_blank" class="social-link-header" aria-label="Instagram">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
      </a>
      <a href="mailto:info@alestyle.it" class="social-link-header" aria-label="Email">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      </a>
      <a href="https://wa.me/390123456789" target="_blank" class="social-link-header" aria-label="WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
      </a>
    </div>

    <div class="menu-toggle" @click="toggleMenu" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
      <div class="hamburger" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav :class="{ 'open': isMenuOpen }">
      <!-- Icone Social Menu Mobile -->
      <div class="mobile-socials">
        <a href="https://www.facebook.com" target="_blank" class="social-link" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-link" aria-label="Instagram">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        </a>
        <a href="mailto:info@alestyle.it" class="social-link" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
        <a href="https://wa.me/390123456789" target="_blank" class="social-link" aria-label="WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        </a>
      </div>

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
        <h2 class="subtitle">Parrucchiere Uomo & Donna</h2>

        <p class="description">Ridefiniamo l'eleganza del tuo look.</p>

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
            <p>Via Roma 123, Città</p>
          </div>
          <div class="info-item">
            <h3>Orari</h3>
            <p>Mar - Sab: 09:00 - 19:00<br>Dom - Lun: Chiuso</p>
          </div>
          <div class="info-item">
            <h3>Contatti</h3>
            <p>Tel: 0123 456789<br>Email: info@alestyle.it</p>
          </div>
        </div>
        
        <!-- Icone Social Contatti -->
        <div class="social-icons contact-socials" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
          <a href="https://www.facebook.com" target="_blank" class="social-link" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="social-link" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="mailto:info@alestyle.it" class="social-link" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
          <a href="https://wa.me/390123456789" target="_blank" class="social-link" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
        </div>

      </div>
    </section>
  </main>
</template>
