// pages/Home/Home.js
import React from 'react';
import Card from '../../components/Card/Card';
import './Home.css'; // Import the home.css file

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to our Yoga Studio!</h2>
      
      <section className="featured-class">
        <h3>Featured Class</h3>
        <Card
          title="Morning Flow"
          description="Start your day with energizing morning yoga."
          imageUrl="https://source.unsplash.com/800x400/?yoga,morning"
        />
      </section>
      
      <section className="about-section">
        <h3>About Us</h3>
        <p>
          Discover the benefits of yoga and achieve physical and mental well-being. 
          Our experienced instructors are dedicated to guiding you on your yoga journey.
        </p>
      </section>
      
      <section className="testimonial-section">
        <h3>What Our Students Say</h3>
        <Card
          title="Jane Doe"
          description="The classes are rejuvenating, and I feel a positive change in my life."
          imageUrl="https://source.unsplash.com/800x400/?yoga,testimonial1"
        />
        <Card
          title="John Smith"
          description="Yoga has brought balance to my life, both physically and mentally."
          imageUrl="https://source.unsplash.com/800x400/?yoga,testimonial2"
        />
        <Card
          title="Alice Johnson"
          description="I appreciate the calming atmosphere and the supportive community."
          imageUrl="https://source.unsplash.com/800x400/?yoga,testimonial3"
        />
      </section>
      
      <section className="class-schedule">
        <h3>Class Schedule</h3>
        <p>Check out our weekly class schedule and find the perfect time for your practice.</p>
        <ul>
          <li>Monday - Yoga Basics: 9:00 AM</li>
          <li>Wednesday - Vinyasa Flow: 6:00 PM</li>
          <li>Friday - Meditation Session: 7:30 AM</li>
        </ul>
      </section>
      
      <section className="join-us">
        <h3>Join Us Today</h3>
        <p>Start your yoga journey with us. Join a class and experience the transformative power of yoga.</p>
        <a href="#" className="button">Join Now</a>
      </section>
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
