<template>
  <SectionContainer>
    <div class="myth-reality">
      <div class="section-header">
        <h2>Myth vs Reality</h2>
        <p class="section-subtitle">Common assumptions about household energy. Let's test them.</p>
      </div>

      <div class="cards-grid">
        <div v-for="item in myths" :key="item.id" class="myth-card">
          <div class="card-side myth-side">
            <div class="side-label">Myth</div>
            <p class="side-text">{{ item.myth }}</p>
          </div>
          <div class="divider">
            <span class="vs-badge">vs</span>
          </div>
          <div class="card-side reality-side">
            <div class="side-label">Reality</div>
            <p class="side-text">{{ item.reality }}</p>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
const myths = [
  {
    id: 1,
    myth: 'Turning off lights saves the most energy.',
    reality: 'Lighting uses only 5% of home energy. Heating and cooling use 45%.'
  },
  {
    id: 2,
    myth: 'Unplugging chargers has a huge impact.',
    reality: 'Phone chargers use ~0.1% of home energy. Thermostat adjustments save 100x more.'
  },
  {
    id: 3,
    myth: 'Electronics dominate energy bills.',
    reality: 'Electronics use 4% of home energy. Water heating uses 18% and growing.'
  },
  {
    id: 4,
    myth: 'Laundry is the largest household energy expense.',
    reality: 'Laundry uses 8%. But 90% of washing machine energy goes to heating water.'
  }
]
</script>

<style scoped>
.myth-reality {
  max-width: 1100px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-header h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-2xl);
}

.myth-card {
  background: var(--color-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  animation: slideUp 0.8s ease-out;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.myth-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary-light);
}

.card-side {
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.myth-side {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.05) 0%, rgba(239, 68, 68, 0.02) 100%);
  border-right: 1px solid var(--color-border);
}

.reality-side {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(16, 185, 129, 0.02) 100%);
}

.side-label {
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-base);
}

.myth-side .side-label {
  color: #dc2626;
}

.reality-side .side-label {
  color: var(--color-primary);
}

.side-text {
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin-bottom: 0;
  color: var(--color-text);
  font-weight: 600;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-light);
  width: 60px;
  position: relative;
}

.vs-badge {
  background: var(--color-primary);
  color: white;
  font-size: var(--font-size-sm);
  font-weight: 700;
  padding: var(--spacing-xs) var(--spacing-base);
  border-radius: var(--radius-base);
  letter-spacing: 0.05em;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .myth-card {
    grid-template-columns: 1fr;
  }

  .myth-side {
    border-right: none;
    border-bottom: 1px solid var(--color-border);
  }

  .divider {
    width: 100%;
    height: 40px;
  }

  .vs-badge {
    position: absolute;
  }

  .section-header h2 {
    font-size: var(--font-size-2xl);
  }
}
</style>
