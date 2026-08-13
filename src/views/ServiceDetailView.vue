<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useHead } from '@unhead/vue'
import DetailView from '../components/DetailView.vue'
import { serviceList } from '../data/services'
import { contactInfo } from '../data/contact'
import { SITE_URL, SITE_NAME } from '../data/site'

const props = defineProps<{
  slug: string
}>()

const emit = defineEmits<{
  (e: 'hover', value: boolean): void
}>()

const router = useRouter()

const service = computed(() => serviceList.find(s => s.slug === props.slug))

watchEffect(() => {
  if (!service.value) {
    router.replace('/')
  }
})

const close = () => {
  router.push({ path: '/', hash: '#servizi' })
}

useHead(() => {
  const current = service.value
  if (!current) return {}

  const title = `${current.title} | ${SITE_NAME} Parrucchiera Rimini`
  const url = `${SITE_URL}/servizi/${current.slug}`
  const image = `${SITE_URL}${current.image}`

  return {
    title,
    meta: [
      { name: 'description', content: current.description },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: current.description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: current.description },
      { name: 'twitter:image', content: image }
    ],
    link: [
      { rel: 'canonical', href: url }
    ],
    script: [
      {
        type: 'application/ld+json',
        textContent: {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: current.title,
          description: current.description,
          url,
          areaServed: 'Rimini',
          provider: {
            '@type': 'HairSalon',
            name: SITE_NAME,
            telephone: contactInfo.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Via Coletti 3',
              addressLocality: 'Rimini',
              addressRegion: 'RN',
              addressCountry: 'IT'
            }
          }
        }
      }
    ]
  }
})
</script>

<template>
  <DetailView
    v-if="service"
    :title="service.title"
    :description="service.description"
    :gallery="service.gallery"
    back-text="Torna ai servizi"
    @close="close"
    @hover="(val) => emit('hover', val)"
  />
</template>
