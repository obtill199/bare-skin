'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { clientReviews } from '../lib/reviews';

export default function ReviewCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const review = clientReviews[activeIndex];

  const showPrevious = () => setActiveIndex((current) => (current - 1 + clientReviews.length) % clientReviews.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % clientReviews.length);

  return (
    <div className="reviewCarousel" aria-roledescription="carousel" aria-label="Five-star client reviews">
      <article className="reviewCard" aria-live="polite">
        <div className="reviewStars" aria-label="Five out of five stars">★★★★★</div>
        <blockquote className="reviewQuote">“{review.text}”</blockquote>
        <div className="reviewAuthor">
          <span className="reviewInitial" aria-hidden="true">{review.author.charAt(0)}</span>
          <span>
            <strong>{review.author}</strong>
            <small>{review.service ?? 'Bare Skin Studio client'}</small>
          </span>
        </div>
      </article>
      <div className="carouselControls">
        <div className="carouselButtons">
          <button className="carouselButton" type="button" onClick={showPrevious} aria-label="Previous review"><ArrowLeft size={18} /></button>
          <button className="carouselButton" type="button" onClick={showNext} aria-label="Next review"><ArrowRight size={18} /></button>
        </div>
        <div className="carouselDots" aria-label="Choose a review">
          {clientReviews.map((item, index) => (
            <button
              className={`carouselDot ${index === activeIndex ? 'active' : ''}`}
              key={item.author}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show review ${index + 1}`}
              aria-current={index === activeIndex ? 'true' : undefined}
            />
          ))}
        </div>
        <span className="reviewCount">{activeIndex + 1} / {clientReviews.length}</span>
      </div>
    </div>
  );
}
