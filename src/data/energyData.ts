export interface EnergyBreakdownItem {
  category: string;
  value: number;
  color: string;
  description: string;
}

export interface SavingsAction {
  id: string;
  name: string;
  savings: number; // annual savings in dollars
  energySavings: number; // percentage reduction
  effort: string; // 'Easy', 'Medium', 'Hard'
  description: string;
}

export interface QuizOption {
  id: string;
  label: string;
  feedback: string;
}

export const quizOptions: QuizOption[] = [
  {
    id: 'lighting',
    label: 'Lighting',
    feedback: 'Only about 5% of household energy typically goes toward lighting. While LED bulbs help, this isn\'t where the big savings are.'
  },
  {
    id: 'charging',
    label: 'Phone Charging',
    feedback: 'Modern chargers are incredibly efficient. Phone charging uses minimal energy compared to your home\'s major systems.'
  },
  {
    id: 'laundry',
    label: 'Laundry',
    feedback: 'Laundry accounts for about 8% of household energy. Water heating during laundry is part of the cost, but there\'s a bigger culprit.'
  },
  {
    id: 'showers',
    label: 'Hot Showers',
    feedback: 'Hot water is significant, but heating and cooling your entire home uses far more energy throughout the year.'
  },
  {
    id: 'hvac',
    label: 'Heating & Cooling',
    feedback: 'Correct! Heating and cooling account for 45% of household energy use. This is where the biggest savings opportunities are.'
  },
  {
    id: 'electronics',
    label: 'TV / Electronics',
    feedback: 'Modern electronics are relatively efficient. Only about 4% of household energy goes to entertainment devices.'
  }
];

export const energyBreakdown: EnergyBreakdownItem[] = [
  {
    category: 'Heating & Cooling',
    value: 45,
    color: '#d4841a',
    description: 'Your HVAC system is the largest energy consumer in your home.'
  },
  {
    category: 'Water Heating',
    value: 18,
    color: '#e8a74f',
    description: 'Heating water for showers, laundry, and dishes is the second biggest expense.'
  },
  {
    category: 'Laundry',
    value: 8,
    color: '#f0c79e',
    description: 'Washers and dryers consume significant energy, especially dryers.'
  },
  {
    category: 'Kitchen Appliances',
    value: 7,
    color: '#a8d08d',
    description: 'Refrigerators, ovens, and dishwashers run regularly throughout the day.'
  },
  {
    category: 'Lighting',
    value: 5,
    color: '#70ad47',
    description: 'Modern LED lighting is efficient and uses minimal energy.'
  },
  {
    category: 'Electronics',
    value: 4,
    color: '#4ba643',
    description: 'TVs, computers, and entertainment devices are relatively efficient today.'
  },
  {
    category: 'Other',
    value: 13,
    color: '#2d7b3d',
    description: 'Misc appliances, standby power, and other household systems.'
  }
];

export const savingsActions: SavingsAction[] = [
  {
    id: 'thermostat',
    name: 'Lower thermostat by 2°F',
    savings: 210,
    energySavings: 15,
    effort: 'Easy',
    description: 'Adjust your thermostat down in winter and up in summer. Most people don\'t notice the difference.'
  },
  {
    id: 'showers',
    name: 'Shorter showers (5 min)',
    savings: 73,
    energySavings: 5,
    effort: 'Easy',
    description: 'Reducing shower time by just a few minutes saves significant water heating energy.'
  },
  {
    id: 'coldwash',
    name: 'Wash clothes in cold water',
    savings: 42,
    energySavings: 3,
    effort: 'Easy',
    description: 'Modern detergents work great in cold water. 90% of washing machine energy goes to heating water.'
  },
  {
    id: 'lights',
    name: 'Turn off lights when leaving a room',
    savings: 18,
    energySavings: 2,
    effort: 'Easy',
    description: 'A simple habit that adds up, especially with traditional bulbs (LED makes this impact smaller).'
  },
  {
    id: 'chargers',
    name: 'Unplug phone chargers when not in use',
    savings: 6,
    energySavings: 1,
    effort: 'Medium',
    description: 'Phantom power drain is real but small. This habit matters more for appliances than chargers.'
  }
];

export const energyFacts = [
  'Heating and cooling accounts for nearly half of household energy use.',
  'Water heating is the second largest energy expense in most homes.',
  'A 2°F thermostat adjustment can save 1-3% on heating/cooling costs.',
  'Heating water for showers uses about 20% of home energy.',
  '90% of washing machine energy goes to heating water.',
  'Modern LED bulbs use 75% less energy than incandescent bulbs.',
  'Phantom power drain accounts for 5-10% of home electricity use.',
  'Proper insulation can reduce heating/cooling costs by 10-20%.'
];

export const impactComparisons = {
  treesPerYear: (co2Saved: number) => Math.round(co2Saved / 21.77),
  milesDriven: (co2Saved: number) => Math.round(co2Saved / 0.411),
  gallonsOfWater: (waterSaved: number) => waterSaved
};