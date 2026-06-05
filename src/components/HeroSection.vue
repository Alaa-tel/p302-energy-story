<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">The Hidden Energy Cost of Your Day</h1>
        <p class="hero-subtitle">Most people focus on the wrong energy-saving habits.</p>
        <button class="btn-primary btn-large" @click="$emit('start')">Start the Story</button>
      </div>
      <div class="hero-illustration">
        <div class="home-illustration">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <!-- House structure -->
            <rect x="30" y="100" width="140" height="70" fill="#f3f4f3" stroke="#10b981" stroke-width="2" rx="4"/>
            <!-- Roof -->
            <polygon points="30,100 100,40 170,100" fill="#10b981" opacity="0.8"/>
            <!-- Door -->
            <rect x="85" y="135" width="30" height="35" fill="#d4841a" rx="2"/>
            <!-- Door knob -->
            <circle cx="110" cy="152" r="2" fill="#f9faf8"/>
            <!-- Window 1 -->
            <rect x="50" y="110" width="20" height="20" fill="#a8d08d" stroke="#10b981" stroke-width="1" rx="2"/>
            <line x1="60" y1="110" x2="60" y2="130" stroke="#10b981" stroke-width="1"/>
            <line x1="50" y1="120" x2="70" y2="120" stroke="#10b981" stroke-width="1"/>
            <!-- Window 2 -->
            <rect x="130" y="110" width="20" height="20" fill="#a8d08d" stroke="#10b981" stroke-width="1" rx="2"/>
            <line x1="140" y1="110" x2="140" y2="130" stroke="#10b981" stroke-width="1"/>
            <line x1="130" y1="120" x2="150" y2="120" stroke="#10b981" stroke-width="1"/>
            <!-- Chimney -->
            <rect x="95" y="50" width="10" height="20" fill="#e8a74f" stroke="#d4841a" stroke-width="1"/>
            <!-- Smoke -->
            <circle cx="100" cy="40" r="3" fill="#9ca3af" opacity="0.6"/>
            <circle cx="98" cy="35" r="2.5" fill="#9ca3af" opacity="0.4"/>
            <!-- Ground -->
            <ellipse cx="100" cy="175" rx="70" ry="8" fill="#70ad47" opacity="0.3"/>
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  start: []
}>()
</script>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) 0;
  background: linear-gradient(135deg, var(--color-primary-lighter) 0%, var(--color-bg) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(212, 132, 26, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 0.8s ease-out 0.2s both;
}

.hero-title {
  font-size: var(--font-size-5xl);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text);
  font-weight: 800;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.6;
}

.btn-large {
  padding: var(--spacing-lg) var(--spacing-3xl);
  font-size: var(--font-size-lg);
  font-weight: 700;
  width: fit-content;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.btn-large:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.hero-illustration {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: scaleIn 0.8s ease-out 0.4s both;
}

.home-illustration {
  width: 100%;
  max-width: 300px;
  animation: fadeIn 1s ease-out 0.6s both;
}

.home-illustration svg {
  width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
}

@media (max-width: 968px) {
  .container {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }

  .hero-illustration {
    order: -1;
  }

  .hero-title {
    font-size: var(--font-size-4xl);
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: auto;
    padding: var(--spacing-2xl) 0;
  }

  .hero-title {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-base);
  }

  .hero-subtitle {
    font-size: var(--font-size-base);
    margin-bottom: var(--spacing-lg);
  }

  .btn-large {
    padding: var(--spacing-base) var(--spacing-xl);
    font-size: var(--font-size-base);
  }

  .home-illustration {
    max-width: 200px;
  }
}
</style>
