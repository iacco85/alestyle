<script setup lang="ts">
import { useHead } from '@unhead/vue'
import logo from '../assets/LogoAleStyle.jpg'
import SocialLinks from '../components/SocialLinks.vue'
import { contactInfo, socialUrls } from '../data/contact'
import { SITE_NAME } from '../data/site'

defineEmits<{
  (e: 'hover', value: boolean): void
}>()

useHead({
  title: `${SITE_NAME} | Il nuovo sito sta arrivando`,
  meta: [
    { name: 'robots', content: 'noindex, nofollow' }
  ]
})
</script>

<template>
  <div class="status-page">
    <img :src="logo" alt="ALE STYLE" class="status-logo" />
    <h1 class="status-title">Il nuovo sito sta arrivando</h1>
    <p class="status-text">
      Sto lavorando al nuovo sito di {{ SITE_NAME }}.<br>
      Nel frattempo puoi contattarmi direttamente per appuntamenti e informazioni.
    </p>

    <div class="status-contacts">
      <a :href="socialUrls.whatsapp" target="_blank" class="cta-btn" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)">WhatsApp</a>
      <p>Tel: {{ contactInfo.phone }}</p>
      <p>{{ contactInfo.address }}</p>
    </div>

    <SocialLinks class="status-socials" @mouseenter="$emit('hover', true)" @mouseleave="$emit('hover', false)" />
  </div>
</template>
