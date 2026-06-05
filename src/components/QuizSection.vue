<template>
  <SectionContainer id="quiz">
    <div class="quiz-container">
      <div class="quiz-header">
        <h2>Which activity uses the most energy in your home?</h2>
        <p class="quiz-subtitle">Take a guess and see how you compare to typical households.</p>
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
            <p>{{ currentFeedback }}</p>
          </div>
          <button class="btn-secondary" @click="resetQuiz">Try Again</button>
        </div>
      </Transition>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { quizOptions } from '@/data/energyData'
import SectionContainer from './SectionContainer.vue'

const selectedOption = ref<string | null>(null)
const isAnswered = ref(false)

const currentFeedback = ref('')

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
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-base);
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

.feedback p {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  margin-bottom: 0;
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
}
</style>
