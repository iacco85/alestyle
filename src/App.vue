<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'
// Assicurati che il nome del file corrisponda a quello nella tua cartella assets
import logo from './assets/LogoAleStyle.jpg'
import './style.css'
import SocialLinks from './components/SocialLinks.vue'
import MaintenanceView from './views/MaintenanceView.vue'
import ComingSoonView from './views/ComingSoonView.vue'
import { contactInfo } from './data/contact'
import { SITE_NAME, SITE_STATUS } from './data/site'

useHead({ htmlAttrs: { lang: 'it' } })

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
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursor)
})

// Stato per il menu mobile
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <!-- Cursore Personalizzato: sempre presente, anche in manutenzione, perché il CSS nasconde il cursore nativo -->
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

  <MaintenanceView v-if="SITE_STATUS === 'maintenance'" @hover="(val: boolean) => isHovering = val" />
  <ComingSoonView v-else-if="SITE_STATUS === 'coming-soon'" @hover="(val: boolean) => isHovering = val" />

  <template v-else>
  <!-- Menu di Navigazione -->
  <header class="site-header">
    <div class="header-logo-container">
      <a href="/"><img :src="logo" alt="ALE STYLE" class="header-logo" /></a>
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
        <li><a href="/#home" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Home</a></li>
        <li><a href="/#chi-sono" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Chi sono</a></li>
        <li><a href="/#servizi" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Servizi</a></li>
        <li><a href="/#prodotti" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Prodotti</a></li>
        <li><a href="/#recensioni" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Dicono di me</a></li>
        <li><a href="/#contatti" @click="isMenuOpen = false" @mouseenter="isHovering = true" @mouseleave="isHovering = false">Contatti</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <router-view v-slot="{ Component }">
      <component :is="Component" @hover="(val: boolean) => isHovering = val" />
    </router-view>
  </main>

  <footer class="site-footer">
    <p>&copy; {{ new Date().getFullYear() }} {{ SITE_NAME }} &ndash; Parrucchiera a Rimini, {{ contactInfo.address }}</p>
  </footer>
  </template>
</template>
