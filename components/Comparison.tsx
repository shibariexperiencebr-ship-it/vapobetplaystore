import React from 'react';
import { Language } from '../App';

// Fix: Component was missing prop definitions despite being passed 'lang' in App.tsx
const Comparison: React.FC<{ lang: Language }> = () => {
  return null;
};

export default Comparison;
