import React from "react";
import "../styles/testimonials.css";
import TestimonialCard from "./TestimonialCard";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";

function Testimonials() {
  const testimonials = [
    { 
      name: "Aditi Sharma", 
      review: "The structured mock tests and detailed feedback helped me secure Band 8. The trainers genuinely care!", 
      img: student1 
    },
    { 
      name: "Rahul Mehta", 
      review: "Speaking sessions were amazing. I overcame my hesitation and got Band 7.5 in speaking.", 
      img: student2 
    },
    { 
      name: "Sophia Thomas", 
      review: "The AI feedback was a game-changer. I could track progress instantly and focus on my weak areas.", 
      img: student3 
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonials-title">What Our Students Say</h2>
      <p className="testimonials-subtitle">
        Hear from students who transformed their IELTS journey with us.
      </p>
      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <TestimonialCard 
            key={index} 
            name={t.name} 
            review={t.review} 
            img={t.img} 
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
