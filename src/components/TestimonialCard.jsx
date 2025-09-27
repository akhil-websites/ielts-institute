import React from "react";
import "../styles/testimonials.css";

function TestimonialCard({ name, review, img }) {
  return (
    <div className="testimonial-card">
      <img src={img} alt={name} className="testimonial-img" />
      <p className="testimonial-review">“{review}”</p>
      <h4 className="testimonial-name">- {name}</h4>
    </div>
  );
}

export default TestimonialCard;
