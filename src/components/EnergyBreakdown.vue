<template>
  <SectionContainer>
    <div class="energy-breakdown">
      <div class="breakdown-header">
        <h2>Where Your Energy Actually Goes</h2>
        <p class="subtitle">Understanding household energy distribution is key to saving money and reducing impact.</p>
      </div>

      <div class="breakdown-chart">
        <div class="chart-container">
          <AnimatedBar
            v-for="item in energyBreakdown"
            :key="item.category"
            :category="item.category"
            :value="item.value"
            :color="item.color"
            :description="item.description"
          />
        </div>
      </div>

      <div class="breakdown-insight">
        <h3>The Big Picture</h3>
        <p>
          Heating and cooling your home is the single largest energy expense, accounting for 45% of household energy use. 
          Water heating comes second at 18%. Together, these two systems account for nearly two-thirds of your energy bill.
        </p>
        <p>
          <strong>The Good News:</strong> Even small adjustments to your thermostat or showering habits can have significant 
          impact on your annual energy consumption and costs.
        </p>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { energyBreakdown } from '@/data/energyData'
import SectionContainer from './SectionContainer.vue'
import AnimatedBar from './AnimatedBar.vue'
</script>

<style scoped>
.energy-breakdown {
  max-width: 1100px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.breakdown-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.breakdown-header h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  max-width: 600px;
  margin: 0 auto;
}

.breakdown-chart {
  background: var(--color-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
}

.chart-container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.breakdown-insight {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.05) 0%, rgba(212, 132, 26, 0.05) 100%);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
}

.breakdown-insight h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-base);
}

.breakdown-insight p {
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: var(--spacing-base);
}

.breakdown-insight p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .breakdown-header h2 {
    font-size: var(--font-size-2xl);
  }

  .breakdown-chart {
    padding: var(--spacing-lg);
  }

  .breakdown-insight {
    padding: var(--spacing-lg);
  }
}
</style>
