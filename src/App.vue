<template>
  <div id="app" class="app">
    <HeroSection @start="scrollToSection('quiz')" />
    <QuizSection ref="quizSection" />
    <EnergyBreakdown />
    <HabitCalculator />
    <ImpactSummary />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeroSection from './components/HeroSection.vue'
import QuizSection from './components/QuizSection.vue'
import EnergyBreakdown from './components/EnergyBreakdown.vue'
import HabitCalculator from './components/HabitCalculator.vue'
import ImpactSummary from './components/ImpactSummary.vue'

const quizSection = ref<InstanceType<typeof QuizSection>>()

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-bg);
}
</style>
