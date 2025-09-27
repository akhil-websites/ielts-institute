import React from "react";
import "../styles/features.css";
import FeatureCard from "./FeatureCard";

function Features() {
  const features = [
    { 
      title: "Live Speaking Sessions", 
      desc: "Interactive one-on-one and group practice with expert mentors.", 
      icon: "🎤" 
    },
    { 
      title: "Real IELTS Mock Tests", 
      desc: "Simulated exams every week to track progress and improve speed.", 
      icon: "📝" 
    },
    { 
      title: "AI-Powered Band Predictor", 
      desc: "Get instant band score predictions with detailed feedback.", 
      icon: "🤖" 
    },
    { 
      title: "Certified IELTS Trainers", 
      desc: "Learn with Cambridge-certified instructors who know the exam inside out.", 
      icon: "🏅" 
    },
  ];

  return (
    <section className="features" id="features">
      <h2 className="features-title">Why Choose Our Institute?</h2>
      <p className="features-subtitle">
        Empowering students with world-class IELTS preparation tools and mentorship.
      </p>
      <div className="features-grid">
        {features.map((f, index) => (
          <FeatureCard key={index} title={f.title} desc={f.desc} icon={f.icon} />
        ))}
      </div>
    </section>
  );
}

export default Features;
