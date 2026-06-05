<template>
  <SectionContainer>
    <div class="impact-summary">
      <div class="summary-header">
        <h2>Your Personal Energy Plan</h2>
        <p class="subtitle">Let's look at the real-world impact of your choices.</p>
      </div>

      <div class="summary-content">
        <div class="summary-stats">
          <div class="stat-card">
            <div class="stat-icon">💵</div>
            <div class="stat-body">
              <div class="stat-label">Annual Savings</div>
              <div class="stat-number">$349</div>
              <div class="stat-detail">On your energy bills</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">⚡</div>
            <div class="stat-body">
              <div class="stat-label">Energy Saved</div>
              <div class="stat-number">2,847 kWh</div>
              <div class="stat-detail">Per year</div>
            </div>
          </div>

          <div class="stat-card">
            <div class="stat-icon">🌱</div>
            <div class="stat-body">
              <div class="stat-label">CO₂ Reduced</div>
              <div class="stat-number">2.1 tons</div>
              <div class="stat-detail">Per year</div>
            </div>
          </div>
        </div>

        <div class="impact-comparisons">
          <h3>Real-World Impact</h3>
          <div class="comparison-grid">
            <div class="comparison-item">
              <div class="comparison-icon">🌳</div>
              <p><strong>97 trees</strong> planted equivalent</p>
            </div>
            <div class="comparison-item">
              <div class="comparison-icon">🚗</div>
              <p><strong>5,100 miles</strong> not driven</p>
            </div>
            <div class="comparison-item">
              <div class="comparison-icon">💧</div>
              <p><strong>2,600 gallons</strong> of water saved</p>
            </div>
          </div>
        </div>

        <div class="final-message">
          <h3>Small Actions Matter. The Right Actions Matter More.</h3>
          <p>
            You now understand where household energy truly goes. By focusing on the big three 
            — heating, cooling, and hot water — you can make decisions that have real impact 
            on your wallet and our planet.
          </p>
          <p>
            Start with one habit this month. Add another next month. These small, consistent 
            changes compound into extraordinary results.
          </p>
        </div>

        <div class="cta-section">
          <button class="btn-primary btn-large" @click="sharePlan">📤 Share Your Plan</button>
          <button class="btn-secondary" @click="scrollToTop">Start Over</button>
        </div>
      </div>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
const sharePlan = () => {
  const message = `I just learned where my household energy actually goes, and I'm making changes! 🌱 

I'm focusing on thermostat adjustments, shorter showers, and cold water laundry to save money and reduce my carbon footprint. 

Learn about hidden energy costs and build your own plan: "The Hidden Energy Cost of Your Day"`
  
  // Try to share using Web Share API
  if (navigator.share) {
    navigator.share({
      title: 'The Hidden Energy Cost of Your Day',
      text: message,
      url: window.location.href
    }).catch((err) => {
      console.log('Share cancelled or failed:', err)
    })
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(message)
    alert('Plan copied to clipboard!')
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.impact-summary {
  max-width: 1000px;
  margin: 0 auto;
  animation: slideUp 0.8s ease-out;
}

.summary-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.summary-header h2 {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
}

.subtitle {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
}

.summary-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-3xl);
}

.stat-card {
  background: linear-gradient(135deg, var(--color-card) 0%, rgba(16, 185, 129, 0.02) 100%);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
  animation: scaleIn 0.5s ease-out;
}

.stat-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.stat-body {
  flex: 1;
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-xs);
}

.stat-number {
  font-size: var(--font-size-3xl);
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
  margin-bottom: var(--spacing-xs);
}

.stat-detail {
  font-size: var(--font-size-xs);
  color: var(--color-text-light);
}

.impact-comparisons {
  background: var(--color-card);
  border-radius: var(--radius-xl);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
  box-shadow: var(--shadow-md);
}

.impact-comparisons h3 {
  margin-bottom: var(--spacing-xl);
  color: var(--color-primary);
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
}

.comparison-item {
  background: var(--color-primary-lighter);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  text-align: center;
  animation: slideUp 0.6s ease-out;
}

.comparison-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: var(--spacing-base);
}

.comparison-item p {
  margin-bottom: 0;
  font-size: var(--font-size-base);
  line-height: 1.6;
}

.final-message {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(212, 132, 26, 0.05) 100%);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
}

.final-message h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.final-message p {
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: var(--spacing-base);
}

.final-message p:last-child {
  margin-bottom: 0;
}

.cta-section {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn-large {
  padding: var(--spacing-lg) var(--spacing-3xl);
  font-size: var(--font-size-lg);
  font-weight: 700;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.btn-large:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

@media (max-width: 768px) {
  .summary-header h2 {
    font-size: var(--font-size-2xl);
  }

  .stat-card {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-lg);
  }

  .stat-icon {
    font-size: 2rem;
  }

  .stat-number {
    font-size: var(--font-size-2xl);
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .final-message {
    padding: var(--spacing-lg);
  }

  .cta-section {
    gap: var(--spacing-base);
  }

  .btn-large {
    padding: var(--spacing-base) var(--spacing-xl);
    font-size: var(--font-size-base);
  }
}
</style>
