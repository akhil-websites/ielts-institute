import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/hero-banner.jpg";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Master IELTS with <span>Confidence</span>
        </h1>
        <p className="hero-subtext">
          Join our expert-led courses with AI-powered feedback, daily speaking practice, 
          and full-length mock tests to achieve your dream band score.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn primary">Get Started</button>
          <button className="hero-btn secondary">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImg} alt="IELTS preparation" />
      </div>
    </section>
  );
}

export default Hero;
