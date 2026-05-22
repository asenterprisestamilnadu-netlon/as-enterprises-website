export const meshTypes = [
  {
    id: 'velcro',
    title: 'Velcro Mesh',
    short: 'Easy to install and remove',
    description:
      'Removable mosquito mesh held in place with strong velcro strips. Perfect for renters and seasonal use — install in minutes, wash and reuse.',
    features: ['DIY removable', 'Washable', 'No drilling', 'Budget friendly'],
    bestFor: 'Rented homes, kids rooms, kitchens',
    iconKey: 'velcro',
  },
  {
    id: 'sliding',
    title: 'Sliding Mesh',
    short: 'Smooth sliding and durable',
    description:
      'Aluminium-frame sliding mosquito mesh that runs on smooth tracks alongside your existing windows. Premium look with long lifespan.',
    features: ['Aluminium frame', 'Stainless steel net', 'Smooth tracks', 'Long lasting'],
    bestFor: 'Sliding windows, French windows',
    iconKey: 'sliding',
  },
  {
    id: 'door',
    title: 'Door Mesh',
    short: 'Keeps doors open worry-free',
    description:
      'Hinged or sliding mosquito mesh doors that let you keep main doors open for ventilation while keeping mosquitoes and insects out.',
    features: ['Hinged or sliding', 'Self-closing options', 'Pet-resistant net', 'Custom sizes'],
    bestFor: 'Main doors, balcony doors, kitchen doors',
    iconKey: 'door',
  },
  {
    id: 'balcony',
    title: 'Balcony Mesh',
    short: 'Safe & secure for balconies',
    description:
      'Full-height balcony mosquito mesh with reinforced frames. Safe for children and pets, while still letting in fresh air and natural light.',
    features: ['Child & pet safe', 'Full balcony coverage', 'UV resistant', 'Strong frame'],
    bestFor: 'Apartment balconies, terrace gardens',
    iconKey: 'balcony',
  }
];

// Recommendation logic for the "Find Your Perfect Mesh" interactive section.
export const meshRecommendations = {
  'sliding-window': {
    living: 'sliding',
    bedroom: 'sliding',
    kitchen: 'velcro',
  },
  'casement-window': {
    living: 'velcro',
    bedroom: 'velcro',
    kitchen: 'velcro',
  },
  door: {
    living: 'door',
    bedroom: 'door',
    kitchen: 'door',
  },
  balcony: {
    living: 'balcony',
    bedroom: 'balcony',
    kitchen: 'balcony',
  },
};
