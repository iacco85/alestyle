<script setup lang="ts">
const services = [
  { title: 'Taglio Donna', price: 'da €25', desc: 'Consulenza personalizzata e taglio su misura.' },
  { title: 'Taglio Uomo', price: 'da €18', desc: 'Stile classico o moderno, rifiniture a forbice.' },
  { title: 'Colore & Balayage', price: 'da €45', desc: 'Tecniche avanzate per illuminare il tuo viso.' },
  { title: 'Trattamenti Curativi', price: 'da €30', desc: 'Ricostruzione, idratazione e benessere per la cute.' },
]
</script>

<template>
  <section class="services container">
    <div class="header">
      <h3 class="section-subtitle">I Nostri Servizi</h3>
      <h2 class="section-title">Listino & Trattamenti</h2>
    </div>

    <div class="grid">
      <div v-for="(service, index) in services" :key="index" class="card">
        <h4>{{ service.title }}</h4>
        <div class="price">{{ service.price }}</div>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.header {
  text-align: center;
  margin-bottom: 60px;
}

.section-subtitle {
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.9rem;
  margin-bottom: 10px;
  font-family: var(--font-sans);
}

.section-title {
  font-size: 2.5rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.card {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  border-color: var(--color-gold);
}

.card h4 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.price {
  color: var(--color-gold);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: var(--font-serif);
}

.card p {
  color: var(--color-gray);
  font-size: 0.95rem;
}
</style>