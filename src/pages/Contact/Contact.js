// pages/Contact/Contact.js
import React from 'react';
import Button from '../../components/Button/Button';
import './contact.css'; // Import the contact.css file

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      
      <p>
        Have questions or want to get in touch? Fill out the form below, and we'll get back to you as soon as possible.
      </p>
      
      <form>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        
        <Button type="submit">Submit</Button>
      </form>
      
      <section className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: info@yogastudio.com</p>
        <p>Phone: +1 (555) 123-4567</p>
        <p>Address: 123 Yoga Street, Cityville</p>
      </section>
      
      {/* Add more content as needed */}
    </div>
  );
};

export default Contact;
