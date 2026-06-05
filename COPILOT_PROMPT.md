# P302 – Interactive Data Story

Build a responsive Vue 3 application using Vite and TypeScript called:

"The Hidden Energy Cost of Your Day"

## Goal

Create a storytelling experience that teaches users that the biggest household energy savings come from heating, cooling, and hot water rather than lights and small electronics.

The application should feel like an interactive article rather than a dashboard.

Use smooth scrolling, subtle animations, large typography, and a modern sustainability-focused visual design.

## Visual Style

* Clean modern design
* Inspired by Apple storytelling pages
* Soft green palette
* Warm off-white backgrounds
* Rounded cards
* Large illustrations
* Generous spacing
* Mobile responsive
* Smooth transitions
* Accessibility friendly

## Application Structure

Create the following sections:

### Hero Section

Title:
"The Hidden Energy Cost of Your Day"

Subtitle:
"Most people focus on the wrong energy-saving habits."

CTA button:
"Start the Story"

Include a large illustration of a modern home.

---

### Section 2 – Assumption Quiz

Question:

"Which activity uses the most energy in your home?"

Options:

* Lighting
* Phone Charging
* Laundry
* Hot Showers
* Heating & Cooling
* TV / Electronics

When selected:

Display feedback.

Example:

"Only about 5% of household energy typically goes toward lighting."

Include a Reveal Answer button.

---

### Section 3 – Energy Breakdown

Create an animated horizontal bar chart.

Data:

Heating & Cooling = 45
Water Heating = 18
Laundry = 8
Kitchen Appliances = 7
Lighting = 5
Electronics = 4
Other = 13

Headline:

"Where your energy actually goes"

Add explanatory narrative beneath the chart.

---

### Section 4 – Habit Impact Calculator

Display habit cards with toggle switches.

Habits:

* Lower thermostat by 2°F = $210
* Shorter showers = $73
* Wash clothes cold = $42
* Turn off lights = $18
* Unplug chargers = $6

As users toggle habits:

Calculate:

* Total annual savings
* Energy reduction
* CO₂ reduction
* Effort level

Update instantly.

---

### Section 5 – Personalized Energy Plan

Display:

* Annual savings
* Energy saved
* CO₂ avoided

Show friendly impact comparisons:

* Trees planted equivalent
* Miles not driven equivalent

Final message:

"Small actions matter. The right actions matter more."

Include a Share Plan button.

---

## Components

Create reusable Vue components:

HeroSection.vue

QuizSection.vue

EnergyBreakdown.vue

HabitCalculator.vue

ImpactSummary.vue

SectionContainer.vue

AnimatedBar.vue

ToggleCard.vue

---

## Data

Create:

src/data/energyData.ts

Store all chart and calculator data separately from components.

---

## Animation

Use CSS transitions or Vue transitions.

Animate:

* Bars growing
* Numbers counting up
* Section fade-ins
* Hover states

Keep animations subtle and professional.

---

## Deliverables

Generate:

* Full folder structure
* Vue components
* TypeScript interfaces
* Sample data
* Responsive layouts
* Modern styling

The application should be functional immediately after npm install and npm run dev.
