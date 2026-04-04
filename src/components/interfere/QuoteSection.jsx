import React from 'react';
import { TestimonialSlider } from '../ui/testimonal-slider';

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    quote: "Interfere revolutionized how we monitor our production environment. We catch regressions before they impact a single user.",
    name: "Jessie J",
    role: "Lead Engineer at Acme LTD",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "The deep traces and root cause analysis have cut our MTTR by 60%. It's an essential part of our stack now.",
    name: "Nick V",
    role: "VP Engineering at Malika Inc.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Simple to integrate, powerful to use. Finally, a monitoring tool that actually gives us time back to build features.",
    name: "Amelia W",
    role: "CTO at Panda AI",
  },
];

const QuoteSection = () => {
  return (
    <section className="pt-4 pb-12 md:pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default QuoteSection;
