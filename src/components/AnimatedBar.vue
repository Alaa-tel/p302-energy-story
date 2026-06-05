<template>
  <div class="bar-item">
    <div class="bar-header">
      <span class="bar-label">{{ category }}</span>
      <span class="bar-percentage">{{ value }}%</span>
    </div>
    <div class="bar-container">
      <div
        class="bar-fill"
        :style="{ 
          width: '0%',
          backgroundColor: color,
          animation: `fillBar 0.8s ease-out 0.2s forwards`
        }"
      />
    </div>
    <p class="bar-description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string
  value: number
  color: string
  description: string
}>()
</script>

<style scoped>
.bar-item {
  margin-bottom: var(--spacing-lg);
}

.bar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.bar-label {
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--font-size-base);
}

.bar-percentage {
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--color-text);
}

.bar-container {
  background-color: var(--color-bg-light);
  border-radius: var(--radius-base);
  height: 32px;
  overflow: hidden;
  position: relative;
}

.bar-fill {
  height: 100%;
  border-radius: var(--radius-base);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: var(--spacing-base);
}

.bar-container:hover .bar-fill {
  filter: brightness(0.9);
}

.bar-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-top: var(--spacing-sm);
  margin-bottom: 0;
}

@keyframes fillBar {
  from {
    width: 0%;
  }
  to {
    width: v-bind('value + "%"');
  }
}

@media (max-width: 768px) {
  .bar-label {
    font-size: var(--font-size-sm);
  }

  .bar-percentage {
    font-size: var(--font-size-base);
  }

  .bar-container {
    height: 28px;
  }
}
</style>
