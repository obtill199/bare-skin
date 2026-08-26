export type ClientReview = {
  author: string;
  text: string;
  service?: string;
};

export const clientReviews: ClientReview[] = [
  {
    author: 'Becca Hunt',
    text: 'My experience with Kristen is always amazing! She is very knowledgeable, takes the time to explain everything, and makes me feel comfortable throughout the whole process. We will not go to anyone else!',
    service: 'Face, brow, lip and underarm waxing',
  },
  {
    author: 'Zoe Ellis',
    text: 'Kristen has the cutest and most relaxing place to have any kind of waxing service. So comforting, and she does a fantastic job.',
    service: 'Brazilian waxing',
  },
  {
    author: 'Molly McGrath',
    text: 'Such a cozy space, and Kristen is so sweet and makes me feel so comfortable every appointment. 10/10.',
  },
  {
    author: 'William Silvey',
    text: 'Kristen has been doing my eyebrows for years, and I will never go anywhere else. Love going to see her!',
    service: 'Eyebrow waxing',
  },
  {
    author: 'Ashley Hecker',
    text: 'Kristen is the best, and her place is so cute. 10/10 would recommend!',
  },
  {
    author: 'Retserof Mada',
    text: 'Kristen is awesome! Comfortable, clean studio. I would recommend her to anyone.',
    service: 'Chest and ear waxing',
  },
];
