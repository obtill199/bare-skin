export type PriceItem = {
  name: string;
  price: string;
  duration?: string;
  description: string;
  badge?: string;
};

export const bookingUrl = 'https://bareskinstudioict.glossgenius.com/services';

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
    price: '$99',
    duration: '15 min',
    description: 'Two maintenance essentials combined in one streamlined appointment.',
    badge: 'Save $5',
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
    price: '$45',
    duration: '15 min',
    description: 'Polished brow shaping and upper-lip waxing in one appointment.',
    badge: 'Save $3',
  },
  {
    name: 'Brow Trim Add-On',
    price: '$10',
    duration: '10 min',
    description: 'A quick finishing service available as an add-on to another appointment.',
  },
];

export const memberships: PriceItem[] = [
  {
    name: 'Bare Club',
    price: '$64/mo',
    description: 'One Brazilian wax each month, priority rebooking, and member-only maintenance pricing.',
    badge: 'Best for monthly maintenance',
  },
  {
    name: 'Smooth Duo',
    price: '$94/mo',
    description: 'One Brazilian and one underarm wax each month, plus priority rebooking.',
    badge: 'Most complete routine',
  },
  {
    name: '3-Visit Brazilian Pack',
    price: '$199',
    description: 'Prepay for three Brazilian appointments and save $11 over individual visits.',
    badge: 'One-time prepaid option',
  },
];
