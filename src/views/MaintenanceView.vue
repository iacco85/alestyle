<script setup lang="ts">
import { useHead } from '@unhead/vue'
import logo from '../assets/LogoAleStyle.jpg'
import { contactInfo, socialUrls } from '../data/contact'
import { SITE_NAME } from '../data/site'

defineEmits<{
  (e: 'hover', value: boolean): void
}>()

useHead({
  title: `${SITE_NAME} | Sito in aggiornamento`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <div class="status-page">
    <img :src="logo" alt="ALE STYLE" class="status-logo" />
    <h1 class="status-title">Sto aggiornando il sito</h1>
    <p class="status-text">
      Torno online a brevissimo.<br>
      Per appuntamenti e informazioni puoi contattarmi direttamente.
    </p>

    <div class="status-contacts">
      <a :href="socialUrls.whatsapp" target="_blank" class="cta-btn" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">WhatsApp</a>
      <p>Tel: {{ contactInfo.phone }}</p>
      <p>{{ contactInfo.address }}</p>
    </div>
  </div>
</template>
