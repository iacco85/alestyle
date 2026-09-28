<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { promo, promoWhatsappUrl, promoValidUntilText, isPromoActive } from '../data/promo'

const emit = defineEmits<{
  (e: 'hover', value: boolean): void
}>()

// Chi chiude il popup non se lo vede più aprire da solo (per questa promozione):
// al suo posto resta una linguetta "-15%" nell'angolo che lo riapre, così chi
// lo chiude per sbaglio non perde lo sconto. È una semplice preferenza salvata
// nel browser del visitatore: se il browser la blocca il popup ricompare,
// nessun problema.
const storageKey = `promo-dismissed:${promo.id}`

const isOpen = ref(false)
const showTab = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

const open = () => {
  showTab.value = false
  isOpen.value = true
}

const wasDismissed = () => {
  try {
    return localStorage.getItem(storageKey) === '1'
  } catch {
    return false
  }
}

const close = () => {
  isOpen.value = false
  showTab.value = true
  emit('hover', false)
  try {
    localStorage.setItem(storageKey, '1')
  } catch {
    // storage non disponibile (navigazione privata, ecc.): pazienza
  }
}

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) close()
}

// Solo lato browser (onMounted): la pagina statica generata non contiene il
// popup, e la scadenza viene controllata sulla data di chi visita, non del build
onMounted(() => {
  if (!isPromoActive()) return
  window.addEventListener('keydown', onKeydown)
  if (wasDismissed()) {
    showTab.value = true
  } else {
    timer = setTimeout(open, promo.delayMs)
  }
})

onUnmounted(() => {
  clearTimeout(timer)
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Transition name="promo">
    <div v-if="isOpen" class="promo-backdrop" @click.self="close">
      <div class="promo-popup" role="dialog" aria-modal="true" aria-labelledby="promo-title">
        <button
          type="button"
          class="promo-close"
          aria-label="Chiudi"
          @click="close"
          @mouseenter="emit('hover', true)"
          @mouseleave="emit('hover', false)"
        >&times;</button>

        <p class="promo-badge">-{{ promo.discount }}</p>
        <h2 id="promo-title" class="promo-title">{{ promo.title }}</h2>
        <p class="promo-text">{{ promo.text }}</p>

        <a
          :href="promoWhatsappUrl"
          target="_blank"
          rel="noopener"
          class="cta-btn promo-cta"
          @click="close"
          @mouseenter="emit('hover', true)"
          @mouseleave="emit('hover', false)"
        >{{ promo.cta }}</a>

        <p class="promo-conditions">
          {{ promo.conditions }} Valido fino al {{ promoValidUntilText }}.
        </p>
      </div>
    </div>
  </Transition>

  <Transition name="promo">
    <button
      v-if="showTab"
      type="button"
      class="promo-tab"
      :aria-label="`Mostra lo sconto del ${promo.discount}`"
      @click="open"
      @mouseenter="emit('hover', true)"
      @mouseleave="emit('hover', false)"
    >-{{ promo.discount }}</button>
  </Transition>
</template>
