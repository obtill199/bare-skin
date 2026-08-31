export type ServicePage = {
  slug: string;
  shortLabel: string;
  cardTitle: string;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heading: string;
  lead: string;
  body: string;
  contentHeading: string;
  serviceType: string;
  highlights: string[];
  benefits: { title: string; description: string }[];
  preparation: string[];
  aftercare: string[];
  safetyNote?: string;
  relatedSlugs: string[];
  faqs: { question: string; answer: string }[];
};

export const servicePages: ServicePage[] = [
  {
    slug: 'brazilian-wax-wichita',
    shortLabel: 'Most requested',
    cardTitle: 'Brazilian Waxing in Wichita',
    cardDescription: 'What to expect, how to prepare, and why a consistent schedule gives the smoothest results.',
    metaTitle: 'Brazilian Wax Wichita, KS',
    metaDescription: 'Book a private Brazilian wax in Wichita, KS with Kristen at Bare Skin Studio. Comfortable, professional service for first-time and returning clients.',
    eyebrow: 'Brazilian waxing • Wichita, KS',
    heading: 'Professional Brazilian waxing without the awkwardness.',
    lead: 'A private, efficient Brazilian wax with clear communication from start to finish.',
    body: 'Bare Skin Studio offers Brazilian waxing for women in a clean, private East Wichita studio. Kristen explains the process, works efficiently, and keeps comfort at the center of every appointment. Regular maintenance every four to six weeks can make each visit feel easier and help deliver more consistent results.',
    contentHeading: 'A straightforward Brazilian wax in East Wichita.',
    serviceType: 'Brazilian waxing',
    highlights: ['Private appointment', 'Approximately 15 minutes', 'First-time option available', 'Online booking'],
    benefits: [
      { title: 'Longer-lasting smoothness', description: 'Waxing removes hair from the root for results that last longer than shaving.' },
      { title: 'A more consistent routine', description: 'Staying on a four-to-six-week schedule can improve the maintenance experience.' },
      { title: 'Clear communication', description: 'Know what to expect before, during, and after your appointment.' },
      { title: 'Private East Wichita studio', description: 'Appointment-based care in a calm, one-on-one environment.' },
    ],
    preparation: ['Grow hair to about one-quarter inch.', 'Gently exfoliate one or two days before.', 'Arrive with clean skin and avoid heavy lotions or oils.', 'Wear loose, breathable clothing when possible.'],
    aftercare: ['Avoid unnecessary friction and heavy sweating for the period Kristen recommends.', 'Skip pools, hot tubs, saunas, and fragranced products immediately after waxing.', 'Resume gentle exfoliation only after the skin has settled.', 'Rebook in four to six weeks for consistent maintenance.'],
    relatedSlugs: ['first-brazilian-wax-wichita', 'full-body-waxing-wichita'],
    faqs: [
      { question: 'How long should hair be before a Brazilian wax?', answer: 'Aim for roughly one-quarter inch of growth—about the length of a grain of rice. Avoid shaving for approximately two weeks before your visit when possible.' },
      { question: 'How often should I book?', answer: 'Most maintenance clients return every four to six weeks. Kristen can recommend a cadence based on your growth cycle.' },
      { question: 'Is there a first-time price?', answer: 'Yes. Bare Skin Studio offers a first-time Brazilian option for new guests. Confirm current pricing and availability while booking.' },
    ],
  },
  {
    slug: 'full-body-waxing-wichita',
    shortLabel: 'Face + body',
    cardTitle: 'Full-Body Waxing in Wichita',
    cardDescription: 'Explore professional waxing for the face, arms, legs, back, chest, stomach, and more.',
    metaTitle: 'Full-Body Waxing Wichita, KS',
    metaDescription: 'Professional full-body waxing in Wichita, KS. Book face and body waxing services in a clean, private studio at Bare Skin Studio.',
    eyebrow: 'Full-body waxing • Wichita, KS',
    heading: 'One trusted specialist for your full waxing routine.',
    lead: 'From brows and underarms to legs, back, chest, and Brazilian waxing, your routine stays simple.',
    body: 'Bare Skin Studio provides professional face and body hair removal for clients who value privacy, consistency, and straightforward service. Mix individual areas or choose popular combinations, then book everything through the studio’s online calendar.',
    contentHeading: 'Build a waxing routine around the areas you need.',
    serviceType: 'Full-body waxing',
    highlights: ['Face and body services', 'Service combinations', 'Private studio', 'Women and men welcome for eligible services'],
    benefits: [
      { title: 'One consistent specialist', description: 'Build trust and maintain your preferences with the same waxing professional.' },
      { title: 'Flexible service menu', description: 'Choose individual areas or combine services into one efficient visit.' },
      { title: 'Professional products', description: 'Services are performed with skin comfort and clean technique in mind.' },
      { title: 'Easy maintenance', description: 'Rebook on a regular schedule to keep your routine predictable.' },
    ],
    preparation: ['Check the live menu for the areas you want to combine.', 'Allow approximately one-quarter inch of hair growth.', 'Gently exfoliate one or two days ahead.', 'Avoid applying heavy lotion or oil to treatment areas.'],
    aftercare: ['Follow the area-specific guidance Kristen provides.', 'Reduce friction, heat, and heavy sweating immediately afterward.', 'Use gentle, fragrance-free products on freshly waxed skin.', 'Maintain a predictable rebooking schedule for each area.'],
    relatedSlugs: ['brazilian-wax-wichita', 'brow-wax-wichita'],
    faqs: [
      { question: 'Which areas can be waxed?', answer: 'The menu includes facial areas, underarms, arms, legs, stomach, back, chest, bikini services, and more. Review the live booking menu for current availability.' },
      { question: 'Can I book more than one area?', answer: 'Yes. You can select multiple eligible services or choose one of the studio’s listed combinations.' },
      { question: 'How should I prepare?', answer: 'Let hair grow to about one-quarter inch, gently exfoliate one or two days beforehand, and arrive with clean skin when possible.' },
    ],
  },
  {
    slug: 'brow-wax-wichita',
    shortLabel: 'Face waxing',
    cardTitle: 'Brow Waxing in Wichita',
    cardDescription: 'Clean, polished brow shaping plus convenient facial waxing combinations.',
    metaTitle: 'Brow Wax Wichita, KS',
    metaDescription: 'Book professional eyebrow waxing and facial waxing in Wichita, KS at Bare Skin Studio. Private appointments and easy online booking.',
    eyebrow: 'Brow waxing • Wichita, KS',
    heading: 'Polished brows shaped for your natural features.',
    lead: 'Professional brow cleanup and facial waxing with a comfortable, detail-focused approach.',
    body: 'Whether you need regular brow maintenance or want to pair brows with an upper-lip service, Bare Skin Studio makes facial waxing quick and easy. Kristen focuses on a clean result that complements your natural shape rather than forcing a one-size-fits-all brow.',
    contentHeading: 'Brow shaping that works with your natural features.',
    serviceType: 'Eyebrow waxing',
    highlights: ['Natural-looking shape', 'Brow and lip combination', 'Quick appointment', 'Tweeze option available'],
    benefits: [
      { title: 'Natural shaping', description: 'A polished result designed around your existing brow and facial features.' },
      { title: 'Efficient maintenance', description: 'Keep stray growth controlled with a quick recurring appointment.' },
      { title: 'Convenient combinations', description: 'Pair brow shaping with upper-lip or other facial waxing services.' },
      { title: 'Comfortable alternatives', description: 'Ask about tweezing when waxing is not the right option for your skin.' },
    ],
    preparation: ['Let the brows grow enough for Kristen to see the natural shape.', 'Avoid aggressive exfoliation immediately before the appointment.', 'Arrive without heavy brow makeup or oils when possible.', 'Disclose all retinoids, prescriptions, peels, or recent facial treatments.'],
    aftercare: ['Avoid touching the freshly waxed area unnecessarily.', 'Skip strong actives, fragranced products, and heavy heat while skin settles.', 'Use gentle skin care and follow Kristen’s instructions.', 'Return in roughly three to five weeks based on growth.'],
    safetyNote: 'Facial waxing may not be appropriate with some retinoids, isotretinoin/Accutane use, prescription skin products, recent peels, laser treatments, sunburn, or broken skin. Tell Kristen before the service; tweezing or rescheduling may be safer.',
    relatedSlugs: ['full-body-waxing-wichita', 'first-brazilian-wax-wichita'],
    faqs: [
      { question: 'How often should brows be waxed?', answer: 'Many clients return every three to five weeks, depending on their growth pattern and preferred level of maintenance.' },
      { question: 'Can I combine brows and upper lip?', answer: 'Yes. Bare Skin Studio lists a brow and upper-lip combination on the service menu.' },
      { question: 'What if I use retinol?', answer: 'Tell Kristen about retinoids, exfoliating acids, prescriptions, or recent skin treatments before facial waxing. A tweeze service may be more appropriate.' },
    ],
  },
  {
    slug: 'first-brazilian-wax-wichita',
    shortLabel: 'First-time guide',
    cardTitle: 'Your First Brazilian Wax',
    cardDescription: 'A straightforward preparation guide for first-time waxing clients in Wichita.',
    metaTitle: 'First Brazilian Wax Wichita Guide',
    metaDescription: 'Preparing for your first Brazilian wax in Wichita? Learn what to expect and book a comfortable first-time appointment at Bare Skin Studio.',
    eyebrow: 'First Brazilian wax • Wichita, KS',
    heading: 'Your first Brazilian wax, explained honestly.',
    lead: 'A little preparation and the right specialist can make a first appointment feel far less intimidating.',
    body: 'It is normal to feel nervous before a first Brazilian wax. Kristen keeps the appointment professional, private, and conversational, explaining what is happening and checking in along the way. Most first-time appointments are quick, and the studio offers a dedicated new-guest option.',
    contentHeading: 'What actually happens at a first Brazilian wax.',
    serviceType: 'First-time Brazilian waxing',
    highlights: ['New-guest service', 'Private setting', 'Approximately 15 minutes', 'Aftercare guidance'],
    benefits: [
      { title: 'Come with enough growth', description: 'Aim for about one-quarter inch—roughly the length of a grain of rice.' },
      { title: 'Skip heavy exfoliation', description: 'Gently exfoliate one or two days before, but avoid irritating the skin right before your visit.' },
      { title: 'Wear comfortable clothing', description: 'Loose, breathable clothing can feel better after the appointment.' },
      { title: 'Plan simple aftercare', description: 'Avoid friction, heavy sweating, pools, and fragranced products for the period Kristen recommends.' },
    ],
    preparation: ['Stop shaving and grow hair to about one-quarter inch.', 'Gently exfoliate one or two days before—not immediately before.', 'Wear loose clothing and arrive with clean skin.', 'Bring questions; Kristen will explain the process before beginning.'],
    aftercare: ['Avoid friction, intense exercise, pools, hot tubs, and fragranced products for the recommended period.', 'Let the skin settle before resuming exfoliation.', 'Do not shave between maintenance appointments.', 'Plan the next visit in roughly four to six weeks if you want consistent results.'],
    relatedSlugs: ['brazilian-wax-wichita', 'full-body-waxing-wichita'],
    faqs: [
      { question: 'Will my first Brazilian wax hurt?', answer: 'You will likely feel brief discomfort, but the service moves quickly. Consistent maintenance can make future visits feel easier for many clients.' },
      { question: 'How long does the appointment take?', answer: 'The currently listed first-time Brazilian appointment is approximately 15 minutes.' },
      { question: 'Can I ask questions during the appointment?', answer: 'Absolutely. Clear communication and client comfort are central to the Bare Skin Studio experience.' },
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
