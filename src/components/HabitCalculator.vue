<template>
  <SectionContainer>
    <div class="habit-calculator">
      <div class="chapter-label">Chapter 3</div>
      <div class="calculator-header">
        <h2>The Tradeoff</h2>
        <p class="subtitle">Which habits actually move the needle? Let's compare.</p>
      </div>

      <div class="calculator-content">
        <div class="habits-grid">
          <div class="impact-group">
            <h3 class="impact-group-title">🎯 High Impact</h3>
            <ToggleCard
              v-for="action in highImpactHabits"
              :key="action.id"
              :action="action"
              @toggle="handleToggle"
            />
          </div>

          <div class="impact-group">
            <h3 class="impact-group-title">⭐ Medium Impact</h3>
            <ToggleCard
              v-for="action in mediumImpactHabits"
              :key="action.id"
              :action="action"
              @toggle="handleToggle"
            />
          </div>

          <div class="impact-group">
            <h3 class="impact-group-title">💭 Low Impact</h3>
            <ToggleCard
              v-for="action in lowImpactHabits"
              :key="action.id"
              :action="action"
              @toggle="handleToggle"
            />
          </div>
        </div>

        <div class="calculator-summary">
          <h3>Your Annual Impact</h3>
          
          <div class="impact-metrics">
            <div class="metric">
              <div class="metric-icon">💰</div>
              <div class="metric-content">
                <div class="metric-label">Annual Savings</div>
                <div class="metric-value">${{ totalSavings }}</div>
              </div>
            </div>

            <div class="metric">
              <div class="metric-icon">⚡</div>
              <div class="metric-content">
                <div class="metric-label">Energy Reduced</div>
                <div class="metric-value">{{ totalEnergyReduction }}%</div>
              </div>
            </div>

            <div class="metric">
              <div class="metric-icon">🌍</div>
              <div class="metric-content">
                <div class="metric-label">CO₂ Avoided</div>
                <div class="metric-value">{{ totalCO2Avoided }}kg</div>
              </div>
            </div>
          </div>

          <div class="effort-indicator">
            <span>Effort Level:</span>
            <div class="effort-bars">
              <div 
                v-for="i in 5" 
                :key="i"
                class="effort-bar"
                :class="{ active: i <= effortLevel }"
              />
            </div>
          </div>

          <p class="impact-note">
            {{ impactMessage }}
          </p>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { savingsActions } from '@/data/energyData'
import SectionContainer from './SectionContainer.vue'
import ToggleCard from './ToggleCard.vue'

const selectedHabits = ref<Set<string>>(new Set())

const highImpactHabits = computed(() => 
  savingsActions.filter(a => a.savings >= 70)
)

const mediumImpactHabits = computed(() => 
  savingsActions.filter(a => a.savings >= 40 && a.savings < 70)
)

const lowImpactHabits = computed(() => 
  savingsActions.filter(a => a.savings < 40)
)

const totalSavings = computed(() => {
  let total = 0
  selectedHabits.value.forEach((habitId: string) => {
    const action = savingsActions.find(a => a.id === habitId)
    if (action) total += action.savings
  })
  return total
})

const totalEnergyReduction = computed(() => {
  let total = 0
  selectedHabits.value.forEach((habitId: string) => {
    const action = savingsActions.find(a => a.id === habitId)
    if (action) total += action.energySavings
  })
  return total
})

const totalCO2Avoided = computed(() => {
  // Approximately 0.92 kg CO2 per dollar saved on electricity
  return Math.round(totalSavings.value * 0.92 + totalSavings.value * 0.5)
})

const effortLevel = computed(() => {
  if (selectedHabits.value.size === 0) return 0
  if (selectedHabits.value.size <= 2) return 2
  if (selectedHabits.value.size <= 3) return 3
  return 4
})

const impactMessage = computed(() => {
  if (selectedHabits.value.size === 0) return 'Select habits to see your potential impact.'
  if (totalSavings.value < 50) return 'Every small step counts. Start with one habit this month.'
  if (totalSavings.value < 150) return 'Good start! These changes will make a real difference.'
  if (totalSavings.value < 300) return 'Excellent choices! You\'re targeting the habits that matter most.'
  return '🎉 You\'re maximizing your impact. These changes will transform your energy footprint!'
})

const handleToggle = (habitId: string, isActive: boolean) => {
  if (isActive) {
    selectedHabits.value.add(habitId)
  } else {
    selectedHabits.value.delete(habitId)
  }
}
</script>

<style scoped>
.chapter-label {
  display: inline-block;
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-base);
  animation: fadeIn 0.6s ease-out;
}

.habit-calculator {
  max-width: 1200px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.calculator-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.calculator-header h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.calculator-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
}

.habits-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.impact-group {
  animation: slideUp 0.8s ease-out;
}

.impact-group-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-base);
  border-bottom: 2px solid var(--color-border);
}

.calculator-summary {
  background: linear-gradient(135deg, var(--color-primary-lighter) 0%, rgba(209, 250, 229, 0.5) 100%);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
}

.calculator-summary h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xl);
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.metric {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  background: var(--color-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
}

.metric:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.metric-icon {
  font-size: 2rem;
}

.metric-content {
  flex: 1;
}

.metric-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.metric-value {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.effort-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  background: var(--color-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
}

.effort-indicator span {
  font-weight: 600;
  color: var(--color-text);
  min-width: 100px;
}

.effort-bars {
  display: flex;
  gap: var(--spacing-xs);
}

.effort-bar {
  width: 24px;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: var(--radius-sm);
  transition: background-color 0.3s ease;
}

.effort-bar.active {
  background-color: #f59e0b;
}

.impact-note {
  background: var(--color-card);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  margin-bottom: 0;
  color: var(--color-text);
  line-height: 1.6;
  font-size: var(--font-size-sm);
}

@media (max-width: 1024px) {
  .calculator-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .calculator-header h2 {
    font-size: var(--font-size-2xl);
  }

  .calculator-summary {
    padding: var(--spacing-lg);
  }

  .metric {
    padding: var(--spacing-base);
  }

  .metric-icon {
    font-size: 1.5rem;
  }

  .metric-value {
    font-size: var(--font-size-xl);
  }
}
</style>
