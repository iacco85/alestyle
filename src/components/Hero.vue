<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h2 class="subtitle">Parrucchiera Unisex</h2>
      <h1 class="title">Il tuo stile,<br><span class="highlight">la nostra arte.</span></h1>
      <p class="description">Esperti in taglio, colore e cura dei capelli per uomo e donna.</p>
      <a href="#contact" class="btn">Prenota Ora</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  width: 100%;
  background-image: url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.3), var(--color-dark));
}

.content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 20px;
}

.subtitle {
  color: var(--color-gold);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1rem;
  margin-bottom: 20px;
  font-family: var(--font-sans);
}

.title {
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 30px;
}

.highlight {
  color: var(--color-gold);
  font-style: italic;
}

.description {
  font-size: 1.2rem;
  color: var(--color-gray);
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
}
</style>