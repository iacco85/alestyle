<script setup lang="ts">
defineProps<{
  title: string
  description: string
  gallery: string[]
  backText: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'hover', value: boolean): void
}>()
</script>

<template>
  <div class="service-detail-page section-padding">
    <div class="detail-header">
      <button 
        @click="emit('close')" 
        class="back-btn" 
        @mouseenter="emit('hover', true)" 
        @mouseleave="emit('hover', false)"
      >
        ← {{ backText }}
      </button>
    </div>
    
    <h1 class="section-title center">{{ title }}</h1>
    <p class="section-text detail-description">{{ description }}</p>
    
    <div class="gallery-grid">
      <div v-for="(img, index) in gallery" :key="index" class="gallery-item">
        <img :src="img" :alt="`${title} ${index + 1}`" class="gallery-img">
      </div>
    </div>
  </div>
</template>