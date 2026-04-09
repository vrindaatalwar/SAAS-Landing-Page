import React from 'react';
import { TestimonialSlider } from '../ui/testimonal-slider';

const testimonials = [
  {
    img: "https://randomuser.me/api/portraits/men/91.jpg",
    quote: "Nexus revolutionized how we manage our customer segments. We predicted our Q4 churn spike and reversed it with prescriptive loyalty campaigns.",
    name: "Sarah L.",
    role: "Head of Growth at Luxe Retail",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    quote: "The RFM diagnostic analytics cut our segment leakage by 40%. It's like having a senior data scientist monitoring every order 24/7.",
    name: "Mark T.",
    role: "Director of E-commerce at Global Goods",
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    quote: "Simple to integrate, powerful to use. Finally, an intelligence tool that doesn't just show data, but tells us exactly what the next move should be.",
    name: "Elena R.",
    role: "COO at Trendify",
  },
];

const QuoteSection = () => {
  return (
    <section className="pt-24 pb-4 md:pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  );
};

export default QuoteSection;
