<template>
  <SectionContainer>
    <div class="day-in-life">
      <div class="section-header">
        <h2>A Day in the Life</h2>
        <p class="section-subtitle">Follow household energy usage throughout a typical day.</p>
      </div>

      <div class="timeline">
        <div v-for="(event, index) in dayEvents" :key="event.id" class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot" />
            <div v-if="index < dayEvents.length - 1" class="marker-line" />
          </div>

          <div class="timeline-content">
            <div class="time">{{ event.time }}</div>
            <div class="event-card" :class="'impact-' + event.impact.toLowerCase()">
              <div class="event-icon">{{ event.icon }}</div>
              <div class="event-details">
                <h3>{{ event.activity }}</h3>
                <p class="event-description">{{ event.description }}</p>
                <div class="energy-badge">{{ event.energyPercent }}% of day's energy</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="day-summary">
        <h3>Throughout the Day</h3>
        <p class="summary-text">Most of today's energy came from temperature control and hot water. These two factors alone account for 63% of all household energy use.</p>
        <div class="energy-breakdown-mini">
          <div class="mini-bar">
            <div class="bar-segment" style="width: 45%; background-color: #d4841a;" title="Heating & Cooling">
              <span>45%</span>
            </div>
            <div class="bar-segment" style="width: 18%; background-color: #e8a74f;" title="Water Heating">
              <span>18%</span>
            </div>
            <div class="bar-segment" style="width: 37%; background-color: #f0c79e;" title="Other">
              <span>37%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
const dayEvents = [
  {
    id: 1,
    time: '7:00 AM',
    icon: '🚿',
    activity: 'Hot Shower',
    description: 'Heating water for your morning shower',
    impact: 'High',
    energyPercent: 12
  },
  {
    id: 2,
    time: '8:00 AM',
    icon: '💡',
    activity: 'Lights & Phone Charging',
    description: 'Turning on lights and charging your phone',
    impact: 'Low',
    energyPercent: 1
  },
  {
    id: 3,
    time: '2:00 PM',
    icon: '❄️',
    activity: 'Air Conditioning',
    description: 'Cooling your home on a warm afternoon',
    impact: 'Very High',
    energyPercent: 28
  },
  {
    id: 4,
    time: '6:00 PM',
    icon: '👕',
    activity: 'Laundry',
    description: 'Washing and drying clothes',
    impact: 'Medium',
    energyPercent: 8
  },
  {
    id: 5,
    time: '8:00 PM',
    icon: '📺',
    activity: 'TV & Electronics',
    description: 'Evening entertainment and devices',
    impact: 'Low',
    energyPercent: 3
  }
]
</script>

<style scoped>
.day-in-life {
  max-width: 900px;
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

.timeline {
  position: relative;
  padding: var(--spacing-2xl) 0;
}

.timeline-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
  animation: slideUp 0.8s ease-out;
}

.timeline-marker {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border-radius: 50%;
  border: 4px solid var(--color-primary-lighter);
  position: relative;
  z-index: 2;
}

.marker-line {
  position: absolute;
  top: 16px;
  bottom: -52px;
  width: 2px;
  background: linear-gradient(to bottom, var(--color-primary), var(--color-primary-lighter));
}

.timeline-item:last-child .marker-line {
  display: none;
}

.timeline-content {
  padding-top: var(--spacing-base);
}

.time {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-base);
}

.event-card {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border-left: 4px solid var(--color-primary);
  display: flex;
  gap: var(--spacing-lg);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-base);
}

.event-card:hover {
  transform: translateX(8px);
  box-shadow: var(--shadow-md);
}

.event-card.impact-low {
  border-left-color: #10b981;
}

.event-card.impact-medium {
  border-left-color: #f59e0b;
}

.event-card.impact-high {
  border-left-color: #ef4444;
}

.event-card.impact-very-high {
  border-left-color: #dc2626;
}

.event-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.event-details {
  flex: 1;
}

.event-details h3 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-lg);
}

.event-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-base);
}

.energy-badge {
  display: inline-block;
  background: var(--color-bg-light);
  color: var(--color-text);
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: 4px 8px;
  border-radius: var(--radius-base);
}

.day-summary {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(212, 132, 26, 0.05) 100%);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  margin-top: var(--spacing-2xl);
  animation: slideUp 0.8s ease-out 0.2s both;
}

.day-summary h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.summary-text {
  font-size: var(--font-size-base);
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: var(--spacing-lg);
}

.energy-breakdown-mini {
  padding: var(--spacing-lg);
  background: var(--color-card);
  border-radius: var(--radius-lg);
}

.mini-bar {
  display: flex;
  gap: 0;
  border-radius: var(--radius-base);
  overflow: hidden;
  height: 40px;
  box-shadow: var(--shadow-sm);
}

.bar-segment {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: var(--font-size-sm);
  transition: all 0.3s ease;
}

.bar-segment:hover {
  filter: brightness(1.1);
  z-index: 1;
}

@media (max-width: 768px) {
  .section-header h2 {
    font-size: var(--font-size-2xl);
  }

  .timeline-item {
    grid-template-columns: 50px 1fr;
    gap: var(--spacing-base);
    margin-bottom: var(--spacing-lg);
  }

  .event-card {
    flex-direction: column;
    padding: var(--spacing-base);
  }

  .event-icon {
    font-size: 1.5rem;
  }

  .day-summary {
    padding: var(--spacing-lg);
  }

  .bar-segment span {
    font-size: var(--font-size-xs);
  }
}
</style>
