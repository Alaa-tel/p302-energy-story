<template>
  <div class="toggle-card" :class="{ active: isActive }">
    <div class="toggle-header">
      <div class="toggle-info">
        <h4>{{ action.name }}</h4>
        <p class="effort-badge">{{ action.effort }}</p>
      </div>
      <div class="toggle-switch" @click="toggleActive">
        <div class="toggle-circle" :class="{ active: isActive }" />
      </div>
    </div>
    <p class="toggle-description">{{ action.description }}</p>
    <div v-if="isActive" class="toggle-benefit">
      <span class="benefit-icon">✓</span>
      <span class="benefit-text">${{ action.savings }}/year</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { SavingsAction } from '@/data/energyData'

const props = defineProps<{
  action: SavingsAction
}>()

const emit = defineEmits<{
  toggle: [isActive: boolean]
}>()

const isActive = ref(false)

const toggleActive = () => {
  isActive.value = !isActive.value
  emit('toggle', isActive.value)
}

watch(isActive, (newValue) => {
  emit('toggle', newValue)
})
</script>

<style scoped>
.toggle-card {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-card:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-base);
  transform: translateY(-2px);
}

.toggle-card.active {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.toggle-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-base);
}

.toggle-info h4 {
  margin-bottom: var(--spacing-xs);
  color: var(--color-text);
}

.effort-badge {
  display: inline-block;
  background: var(--color-bg-light);
  color: var(--color-text-light);
  font-size: var(--font-size-xs);
  font-weight: 600;
  padding: 2px 8px;
  border-radius: var(--radius-sm);
  margin-bottom: 0;
  margin-top: 4px;
}

.toggle-switch {
  width: 50px;
  height: 28px;
  background: var(--color-border);
  border-radius: 14px;
  display: flex;
  align-items: center;
  padding: 2px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  flex-shrink: 0;
}

.toggle-card.active .toggle-switch {
  background: var(--color-primary);
}

.toggle-circle {
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.toggle-circle.active {
  transform: translateX(22px);
}

.toggle-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: 0;
  line-height: 1.5;
}

.toggle-benefit {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-base);
  padding-top: var(--spacing-base);
  border-top: 1px solid var(--color-border);
  animation: slideUp 0.3s ease-out;
}

.benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
}

.benefit-text {
  font-weight: 700;
  color: var(--color-primary);
  font-size: var(--font-size-base);
}

@media (max-width: 768px) {
  .toggle-card {
    padding: var(--spacing-base);
  }

  .toggle-header {
    margin-bottom: var(--spacing-sm);
  }

  .toggle-info h4 {
    font-size: var(--font-size-base);
  }

  .toggle-description {
    font-size: var(--font-size-xs);
  }
}
</style>
