export type PriceItem = {
  name: string;
  price: string;
  duration?: string;
  description: string;
  badge?: string;
};

export const bookingUrl = 'https://bareskinstudioict.glossgenius.com/services';
export const packagesUrl = 'https://bareskinstudioict.glossgenius.com/shop/packages';
export const membershipsUrl = 'https://bareskinstudioict.glossgenius.com/shop/memberships';

export const signaturePricing: PriceItem[] = [
  {
    name: 'First-Time Brazilian',
    price: '$63',
    duration: '15 min',
    description: 'An introductory Brazilian appointment for new Bare Skin Studio guests.',
    badge: 'New guests',
  },
  {
    name: 'Brazilian Wax',
    price: '$70',
    duration: '15 min',
    description: 'A smooth, confidence-first service with maintenance recommended every 4–6 weeks.',
  },
  {
    name: 'Brazilian + Underarm',
    price: '$104',
    duration: '15 min',
    description: 'Two maintenance essentials combined in one streamlined appointment.',
  },
  {
    name: 'Brazilian + Stomach Strip',
    price: '$82',
    duration: '15 min',
    description: 'A Brazilian wax and stomach strip paired into one easy visit.',
    badge: 'Save $3',
  },
  {
    name: 'Brow + Upper Lip',
    price: '$48',
    duration: '15 min',
    description: 'Polished brow shaping and upper-lip waxing in one appointment.',
  },
  {
    name: 'Brow Trim Add-On',
    price: '$6',
    duration: '10 min',
    description: 'A quick finishing service available as an add-on to another appointment.',
  },
];

export const prepaidOffers: PriceItem[] = [
  {
    name: '3-Visit Brazilian Pack',
    price: '$199',
    description: 'Prepay for three Brazilian appointments and save $11 over individual visits.',
    badge: 'One-time prepaid option',
  },
];

export const fullPricing: PriceItem[] = [
  ...signaturePricing,
  {
    name: 'Bikini Full',
    price: '$60',
    description: 'Full bikini-area waxing with the same private, comfort-first approach.',
  },
  {
    name: 'Bikini Line',
    price: '$50',
    description: 'Hair removal outside the standard bikini line.',
  },
  {
    name: 'Underarm Wax',
    price: '$34',
    duration: '15 min',
    description: 'Professional underarm hair removal in a quick private appointment.',
  },
  {
    name: 'Brow Wax',
    price: '$28',
    duration: '15 min',
    description: 'Brow cleanup shaped to complement your natural features.',
  },
  {
    name: 'Upper Lip',
    price: '$20',
    description: 'Quick upper-lip waxing as a standalone facial service.',
  },
  {
    name: 'Full Face Wax',
    price: '$62',
    description: 'Professional facial waxing for multiple eligible areas.',
  },
  {
    name: 'Stomach Strip',
    price: '$15',
    description: 'A focused stomach-strip wax that can be booked alone or with another service.',
  },
  {
    name: 'Dermaplane',
    price: '$65',
    description: 'A professional exfoliating service that removes surface buildup and fine facial hair.',
  },
];
