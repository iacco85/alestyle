<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Assicurati che il nome del file corrisponda a quello nella tua cartella assets
import logo from './assets/LogoAleStyle.jpg'
// Importiamo la nuova immagine per la hero (assicurati che l'estensione sia corretta, es. .jpg o .png)

// Stato per il cursore personalizzato
const cursorX = ref(0)
const cursorY = ref(0)
const isHovering = ref(false)

// Aggiorna la posizione del cursore
const updateCursor = (e: MouseEvent) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
}

// Aggiungi/Rimuovi listener
onMounted(() => {
  window.addEventListener('mousemove', updateCursor)
  
   
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
})

// Dati Mock per le recensioni
// Dati Mock per le recensioni
const reviews = [
  { id: 1, author: 'Laura B.', text: 'Professionalità e cortesia. Il miglior taglio che abbia mai avuto!', rating: 5 },
  { id: 2, author: 'Marco G.', text: 'Ambiente rilassante e staff preparatissimo. Consigliato.', rating: 5 },
  { id: 3, author: 'Sofia R.', text: 'Prodotti di alta qualità e grande attenzione al cliente.', rating: 5 },
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
    <div class="menu-toggle" @click="toggleMenu" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
      <div class="hamburger" :class="{ 'open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav :class="{ 'open': isMenuOpen }">
      <ul>
        <li><a href="#home" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Home</a></li>
        <li><a href="#chi-siamo" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Chi Siamo</a></li>
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
      <div class="hero-content">
        <!-- Logo come elemento principale della Hero (al posto della foto) -->
        <img :src="logo" alt="ALE STYLE" class="logo hero-logo fade-in" @mouseenter="isHovering = true" @mouseleave="isHovering = false" />

        <div class="hero-images">
          <div class="hero-image-card fade-in-delay-1" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1780&auto=format&fit=crop" alt="Donna" />
            <div class="image-label">Donna</div>
          </div>
          <div class="hero-image-card fade-in-delay-2" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
            <img src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=2070&auto=format&fit=crop" alt="Uomo" />
            <div class="image-label">Uomo</div>
          </div>
        </div>

        <p class="description">Ridefiniamo l'eleganza del tuo look.</p>
        
        <!-- Icone Social Hero -->
        <div class="social-icons hero-socials" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
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

    <!-- Sezione Chi Siamo -->
    <!-- Sezione Chi Siamo -->
    <section id="chi-siamo" class="about section-padding">
      <div class="content-wrapper">
        <h2 class="section-title">La Nostra <span class="highlight">Filosofia</span></h2>
        <p class="section-text">
          Da Ale Style, non ci limitiamo a tagliare i capelli. Creiamo opere d'arte che riflettono la tua personalità. 
          In un ambiente esclusivo e rilassante, ci prendiamo cura della tua immagine con passione e dedizione, 
          utilizzando solo i migliori prodotti per garantire salute e bellezza ai tuoi capelli.
        </p>
      </div>
    </section>

<!-- Sezione Servizi (ex Showcase) -->
    <section id="servizi" class="showcase section-padding">
      <h2 class="section-title center">I Nostri <span class="highlight">Servizi</span></h2>
      <div class="card" v-for="i in 3" :key="i" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
        <div class="card-number">0{{ i }}</div>
        <h2>Servizio {{ i }}</h2>
        <p>Taglio, colore e styling su misura per esaltare la tua personalità.</p>
      </div>
    </section>

    <!-- Sezione Dicono di Noi -->
    <section id="recensioni" class="reviews section-padding">
      <h2 class="section-title center">Dicono di <span class="highlight">Noi</span></h2>
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
        <h2 class="section-title">Vieni a <span class="highlight">Trovarci</span></h2>
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

<style>
/* Reset di base */
:root {
  --bg-color: #000000;
  --text-color: #ffffff;
  --accent-color: #D4AF37; /* Oro elegante */
  --cursor-size: 10px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: 'Helvetica Neue', sans-serif;
  overflow-x: hidden;
  cursor: none;
  display: block !important;
  min-width: 0 !important;
}

#app {
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  text-align: left !important;
  width: 100%;
}

/* --- Cursore --- */
.cursor {
  position: fixed;
  width: var(--cursor-size);
  height: var(--cursor-size);
  background: white;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  z-index: 9999;
  transition: width 0.3s, height 0.3s;
}

.cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9998;
  transition: left 0.1s ease-out, top 0.1s ease-out, width 0.3s, height 0.3s, background 0.3s, border-color 0.3s;
}

.cursor.active { width: 0px; height: 0px; }
.cursor-follower.active {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-color);
  backdrop-filter: blur(2px);
}

/* --- Header & Menu --- */
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: flex-end; /* Menu a destra */
  align-items: center;
  z-index: 1000;
  mix-blend-mode: difference; /* Per essere visibile su sfondi chiari e scuri */
  transition: all 0.3s ease;
}

.menu-toggle {
  display: none; /* Nascosto su desktop */
  cursor: none;
}

nav ul {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.3s;
  cursor: none;
}

nav a:hover {
  color: var(--accent-color);
}

/* Mobile Menu Styles */
@media (max-width: 768px) {
  .site-header {
    mix-blend-mode: normal; /* Risolve il problema del menu invisibile su mobile */
    padding: 15px 20px;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30px;
    height: 30px;
    z-index: 10001;
  }

  .hamburger span {
    display: block;
    width: 100%;
    height: 2px;
    background: #fff;
    margin: 6px 0;
    transition: 0.4s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.5); /* Migliora visibilità su sfondi chiari */
  }

  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95); /* Sfondo quasi solido per leggibilità */
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in-out;
    z-index: 10000;
  }

  nav.open {
    transform: translateY(0);
  }

  nav ul {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }

  nav a {
    font-size: 1.5rem;
  }
  
  /* Hamburger Animation */
  .hamburger.open span:nth-child(1) { transform: rotate(-45deg) translate(-5px, 6px); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: rotate(45deg) translate(-5px, -6px); }

  /* Typography & Layout Adjustments for Mobile */
  .section-title {
    font-size: 2rem !important; /* Titoli più piccoli */
  }

  .hero-logo {
    max-width: 85vw !important; /* Logo adattato */
  }

  .hero-image-card {
    width: 100% !important;
    height: 250px !important;
  }

  .description {
    font-size: 1.1rem !important;
    padding: 0 10px;
  }

  .section-padding {
    padding: 60px 20px !important; /* Meno padding laterale */
  }

  .reviews-grid, .info-grid {
    grid-template-columns: 1fr !important; /* Una colonna su mobile */
  }

  .card {
    width: 100% !important; /* Card a tutta larghezza */
    height: auto !important;
    min-height: 350px;
  }
}

/* --- Hero Section --- */
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 5vh; 
  background-color: var(--bg-color);
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  z-index: 10;
}

/* Logo con Fade In */
.hero-logo {
  max-width: 350px; /* Ridotto come richiesto */
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: fadeInLogo 2s ease-out forwards;
}

@keyframes fadeInLogo {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Hero Images */
.hero-images {
  display: flex;
  gap: 20px;
  margin: 0.5rem 0;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-image-card {
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
  border: 1px solid #333;
}

.hero-image-card.fade-in-delay-1 { animation-delay: 0.5s; }
.hero-image-card.fade-in-delay-2 { animation-delay: 0.8s; }

.hero-image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: brightness(0.8);
}

.hero-image-card:hover img {
  transform: scale(1.1);
  filter: brightness(1);
}

.image-label {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.8);
  z-index: 2;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--accent-color);
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1s forwards;
}

.description {
  font-size: 1rem;
  color: #888;
  margin-top: 10px;
  font-weight: 300;
  font-size: 1.5rem;
  color: #e0e0e0;
  margin-top: 1rem;
  font-weight: 400;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.2s forwards;
}

/* Social Icons */
.social-icons {
  display: flex;
  gap: 25px;
  margin-top: 1.5rem;
  justify-content: center;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.3s forwards;
}

.contact-socials {
  margin-top: 3rem;
  animation: none; /* No animation delay for footer socials */
  opacity: 1;
}

.social-link {
  color: #fff;
  transition: transform 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  color: var(--accent-color);
  transform: translateY(-5px) scale(1.1);
}

.actions {
  margin-top: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 1.4s forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}


.cta-btn {
  padding: 1rem 3rem;
  font-size: 0.9rem;
  background: var(--accent-color);
  color: #000000;
  border: none;
  border-radius: 0;
  cursor: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
}

.cta-btn:hover {
  background: #ffffff;
  color: #000000;
  transform: scale(1.05);
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  opacity: 0.5;
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: bounce 2s infinite;
  z-index: 20;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
}

.scroll-indicator .line {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, #fff, transparent);
}

/* --- Common Section Styles --- */
.section-padding {
  padding: 100px 5vw;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.section-padding.in-view {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
  text-transform: uppercase;
}

.section-title.center { text-align: center; }

.highlight { color: var(--accent-color); }

.section-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ccc;
  max-width: 800px;
}

/* --- About Section --- */
.about {
  background-color: #050505;
  align-items: center;
  text-align: center;
}

/* --- Showcase Section --- */
.showcase {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: #000000;
  flex-direction: row; /* Reset flex direction for cards */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 100px 5vw;
  background: #000000;
  flex-wrap: wrap;
}

/* --- Reviews Section --- */
.reviews {
  background-color: #0a0a0a;
  align-items: center;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 3rem;
}

.review-card {
  background: #111;
  padding: 30px;
  border: 1px solid #222;
  transition: transform 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
  border-color: var(--accent-color);
}

.stars { color: var(--accent-color); margin-bottom: 1rem; font-size: 1.2rem; }
.review-text { font-style: italic; color: #ddd; margin-bottom: 1rem; }
.review-author { font-weight: bold; color: #fff; text-align: right; }

.google-btn {
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
}

/* --- Contact Section --- */
.contact {
  background: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000000 70%);
  text-align: center;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 3rem;
}

.info-item h3 { color: var(--accent-color); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 2px; }
.info-item p { color: #ccc; line-height: 1.6; }

/* --- Showcase Section --- */
.showcase {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 100px 5vw;
  background: #000000;
  flex-wrap: wrap;
}

.card {
  background: #0a0a0a;
  padding: 40px;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), background 0.3s;
  border: 1px solid #222;
}

.card:hover {
  transform: translateY(-10px);
  background: #111;
  border-color: var(--accent-color);
}

.card-number {
  font-size: 3rem;
  font-weight: 900;
  color: #222;
  transition: color 0.3s;
}

.card:hover .card-number {
  color: var(--accent-color);
}

.card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.card p {
  color: #666;
  line-height: 1.6;
  font-size: 0.9rem;
}
</style>
