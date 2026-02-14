<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { reviews as mockReviews } from '../data/reviews'
import type { Review } from '../data/reviews'

// --- CONFIGURAZIONE GOOGLE ---
// 1. Ottieni API Key: https://console.cloud.google.com/ (Abilita "Maps JavaScript API" e "Places API")
// 2. Trova Place ID: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
const GOOGLE_API_KEY = 'INSERISCI_QUI_LA_TUA_API_KEY'; 
const PLACE_ID = 'INSERISCI_QUI_IL_TUO_PLACE_ID'; 

// Link alla ricerca Google Maps per l'attività
const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Parrucchiera+Ale+Style+Via+Coletti+3+Rimini"

const reviewsList = ref<Review[]>([]);
const isLoading = ref(true);

// Funzione per caricare lo script di Google Maps dinamicamente
const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if ((window as any).google && (window as any).google.maps) {
      resolve((window as any).google.maps);
      return;
    }
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve((window as any).google.maps);
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  // Se la chiave è ancora quella di default, usa i dati finti
  if (GOOGLE_API_KEY === 'INSERISCI_QUI_LA_TUA_API_KEY') {
    console.warn('Google API Key mancante. Uso dati mock.');
    reviewsList.value = mockReviews;
    isLoading.value = false;
    return;
  }

  try {
    await loadGoogleMapsScript();
    const mapDiv = document.createElement('div'); // Elemento dummy necessario per il servizio
    const service = new (window as any).google.maps.places.PlacesService(mapDiv);

    service.getDetails({
      placeId: PLACE_ID,
      fields: ['reviews'] // Richiediamo solo le recensioni
    }, (place: any, status: any) => {
      if (status === (window as any).google.maps.places.PlacesServiceStatus.OK && place.reviews) {
        // Mappiamo i dati di Google nel nostro formato
        reviewsList.value = place.reviews.map((r: any, index: number) => ({
          id: index,
          author: r.author_name,
          text: r.text,
          rating: r.rating,
          date: r.relative_time_description,
          profilePhoto: r.profile_photo_url
        })).slice(0, 5); // Google restituisce max 5 recensioni
      } else {
        console.error('Errore Google Places:', status);
        reviewsList.value = mockReviews; // Fallback in caso di errore
      }
      isLoading.value = false;
    });
  } catch (e) {
    console.error('Errore caricamento script Google:', e);
    reviewsList.value = mockReviews;
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="google-reviews-container">
    <div v-if="isLoading" class="loading-state">Caricamento recensioni...</div>

    <div v-else class="reviews-grid">
      <div v-for="review in reviewsList" :key="review.id" class="google-card">
        <div class="card-header">
          <div class="author-info">
            <!-- Mostra foto profilo se esiste (da Google), altrimenti iniziale -->
            <img v-if="review.profilePhoto" :src="review.profilePhoto" alt="User" class="profile-pic-img" />
            <div v-else class="profile-pic" :style="{ backgroundColor: 'var(--accent-color)' }">
              {{ review.author.charAt(0) }}
            </div>
            
            <div class="author-text">
              <span class="author-name">{{ review.author }}</span>
              <span class="review-date">{{ review.date }}</span>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="google-icon">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
        </div>
        
        <div class="stars">
          <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= review.rating }">★</span>
        </div>
        
        <p class="review-text">{{ review.text }}</p>
      </div>
    </div>

    <div class="google-actions">
      <a :href="googleMapsLink" target="_blank" class="google-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="btn-icon">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
        Leggi tutte le recensioni su Google
      </a>
    </div>
  </div>
</template>

<style scoped>
.google-reviews-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 3rem;
}

.google-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #333; /* Testo scuro su sfondo bianco come Google */
}

.google-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.2);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #000;
  font-size: 1.2rem;
}

.profile-pic-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.author-text {
  display: flex;
  flex-direction: column;
}

.author-name { font-weight: bold; font-size: 0.95rem; }
.review-date { font-size: 0.8rem; color: #666; }

.google-icon { width: 24px; height: 24px; }

.stars { color: #ddd; font-size: 1.2rem; margin-bottom: 10px; }
.star.filled { color: #fbbc04; }

.review-text { font-size: 0.95rem; line-height: 1.5; color: #444; white-space: pre-line;}

.google-actions { text-align: center; margin-top: 20px; }

.google-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background: #fff; color: #333; padding: 12px 24px; border-radius: 24px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}
.google-btn:hover { background: #f1f1f1; transform: scale(1.05); }
.btn-icon { width: 18px; height: 18px; }

.loading-state {
  text-align: center;
  color: #888;
  padding: 40px;
}
</style>