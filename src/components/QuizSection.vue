<template>
  <SectionContainer id="quiz">
    <div class="quiz-container">
      <div class="chapter-label">Chapter 1</div>
      <div class="quiz-header">
        <h2>The Guess</h2>
        <p class="quiz-subtitle">Which activity uses the most energy in your home?</p>
      </div>

      <div class="quiz-options">
        <button
          v-for="option in quizOptions"
          :key="option.id"
          class="quiz-option"
          :class="{ selected: selectedOption === option.id, answered: isAnswered }"
          @click="selectOption(option.id)"
          :disabled="isAnswered"
        >
          <span class="option-label">{{ option.label }}</span>
          <span v-if="isAnswered && selectedOption === option.id" class="checkmark">✓</span>
        </button>
      </div>

      <Transition name="slide">
        <div v-if="isAnswered" class="feedback-container">
          <div class="feedback" :class="{ correct: selectedOption === 'hvac' }">
            <div class="feedback-icon">
              {{ selectedOption === 'hvac' ? '🎯' : '💡' }}
            </div>
            <p class="feedback-text">{{ comparisonText }}</p>
            <p class="feedback-detail">{{ currentFeedback }}</p>
          </div>
          <button class="btn-secondary" @click="resetQuiz">Try Again</button>
        </div>
      </Transition>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { quizOptions } from '@/data/energyData'
import SectionContainer from './SectionContainer.vue'

const selectedOption = ref<string | null>(null)
const isAnswered = ref(false)

const currentFeedback = ref('')

const comparisonText = computed(() => {
  if (selectedOption.value === 'hvac') {
    return 'You nailed it! Heating and cooling is the biggest energy consumer in most homes, using about 45% of total household energy.'
  }
  
  const selectedLabel = quizOptions.find(o => o.id === selectedOption.value)?.label
  
  if (selectedOption.value === 'lighting') {
    return `You selected ${selectedLabel}. Lighting matters, but it represents about 5% of home energy use. Heating and cooling can be nearly 9x larger.`
  } else if (selectedOption.value === 'charging') {
    return `You selected ${selectedLabel}. Phone charging is incredibly efficient. Heating and cooling uses about 90x more energy.`
  } else if (selectedOption.value === 'laundry') {
    return `You selected ${selectedLabel}. Laundry accounts for about 8% of home energy. Heating and cooling is more than 5x larger.`
  } else if (selectedOption.value === 'showers') {
    return `You selected ${selectedLabel}. Hot water is significant at 18%, but heating and cooling your entire home uses about 2.5x more.`
  } else if (selectedOption.value === 'electronics') {
    return `You selected ${selectedLabel}. Modern entertainment devices use about 4% of home energy. Heating and cooling uses more than 11x more.`
  }
  
  return 'Great guess!'
})

const selectOption = (optionId: string) => {
  if (isAnswered.value) return
  
  selectedOption.value = optionId
  const option = quizOptions.find(o => o.id === optionId)
  currentFeedback.value = option?.feedback || ''
  isAnswered.value = true
}

const resetQuiz = () => {
  selectedOption.value = null
  isAnswered.value = false
  currentFeedback.value = ''
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

.quiz-container {
  max-width: 900px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.quiz-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.quiz-header h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.quiz-subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
}

.quiz-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.quiz-option {
  background: var(--color-card);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: left;
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.quiz-option:hover:not(:disabled) {
  border-color: var(--color-primary);
  background-color: var(--color-primary-lighter);
  transform: translateY(-2px);
  box-shadow: var(--shadow-base);
}

.quiz-option.selected {
  border-color: var(--color-primary);
  background-color: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-md);
}

.quiz-option.answered:not(.selected) {
  opacity: 0.6;
  cursor: not-allowed;
}

.checkmark {
  font-size: var(--font-size-xl);
  animation: scaleIn 0.3s ease-out;
}

.feedback-container {
  background: var(--color-card);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  animation: slideUp 0.5s ease-out;
}

.feedback {
  margin-bottom: var(--spacing-lg);
}

.feedback.correct {
  color: var(--color-primary);
}

.feedback-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-base);
}

.feedback-text {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  margin-bottom: var(--spacing-base);
  font-weight: 600;
  color: var(--color-text);
}

.feedback-detail {
  font-size: var(--font-size-base);
  line-height: 1.6;
  margin-bottom: 0;
  color: var(--color-text-light);
}

@media (max-width: 768px) {
  .quiz-header h2 {
    font-size: var(--font-size-2xl);
  }

  .quiz-options {
    grid-template-columns: 1fr;
    gap: var(--spacing-base);
  }

  .quiz-option {
    padding: var(--spacing-lg);
    font-size: var(--font-size-sm);
  }

  .feedback-container {
    padding: var(--spacing-lg);
  }

  .feedback-text {
    font-size: var(--font-size-base);
  }
}
</style>
