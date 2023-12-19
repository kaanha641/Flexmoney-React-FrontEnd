// pages/About/About.js
import React from 'react';
import Card from '../../components/Card/Card';
import './about.css'; // Import the about.css file

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      
      <section className="mission-section">
        <h3>Our Mission</h3>
        <p>
          At Yoga Studio, our mission is to promote well-being through the practice of yoga. 
          We believe in creating a supportive and inclusive community where individuals can embark on a holistic journey towards health and mindfulness.
        </p>
      </section>
      
      <section className="instructors-section">
        <h3>Meet Our Instructors</h3>
        <div className="instructor-cards">
          <Card
            title="Anna Smith"
            description="Certified Yoga Instructor with 10 years of experience."
            imageUrl="https://source.unsplash.com/400x300/?yoga,instructor1"
          />
          <Card
            title="David Jones"
            description="Experienced meditation guide and yoga practitioner."
            imageUrl="https://source.unsplash.com/400x300/?yoga,instructor2"
          />
          {/* Add more instructor cards */}
        </div>
      </section>
      
      <section className="values-section">
        <h3>Our Values</h3>
        <ul>
          <li>Community</li>
          <li>Wellness</li>
          <li>Mindfulness</li>
          <li>Inclusivity</li>
          {/* Add more values */}
        </ul>
      </section>
      
      <section className="facility-section">
        <h3>Our Facility</h3>
        <p>
          Located in a serene environment, our yoga studio provides a peaceful space for practice. 
          We offer state-of-the-art facilities to enhance your yoga experience.
        </p>
      </section>
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default About;
