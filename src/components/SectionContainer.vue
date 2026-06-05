<template>
  <section class="section-container" :id="id">
    <div class="container">
      <div class="section-content">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
}>()
</script>

<style scoped>
.section-container {
  width: 100%;
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-bg);
  animation: slideUp 0.8s ease-out;
}

.section-container:nth-child(even) {
  background-color: var(--color-primary-lighter);
}

.section-content {
  width: 100%;
}

@media (max-width: 768px) {
  .section-container {
    padding: var(--spacing-2xl) 0;
  }
}
</style>
