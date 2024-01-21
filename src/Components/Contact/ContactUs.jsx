// Contact.js

import React from 'react';
import './ContactUs.css';
import { Link } from 'react-router-dom';

const Contact = () => {
  const developers = [
    { name: 'Sudhamsha Sagar', photo: './Images/dev1.jpg', contributions: 'Contributions: Drawing inspiration from a webpage at IIT showcasing a similar project, I took charge of conceptualizing, creating content, generating AI images, and executing the coding part. This project reflects my dedication to bringing innovative ideas to life.' },
    { name: 'Sumanth Ullas Prabhu', photo: './Images/dev2.png', contributions: 'Contributions: Played a significant role in the coding part, contributing to the development of specific pages. Additionally, took charge of hosting the project, ensuring its accessibility and seamless online presence.' },
    // Add more developers as needed
  ];

  return (
    <div className="contact-container">
      <div className="title_social">
        <h1>Contact Us</h1>
        <div className="contact-links">
          <a href="https://wa.me/+917975073574" target="_blank" rel="noopener noreferrer">
            <div className="social">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </a>
          <a href="https://instagram.com/its.ramayan?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
            <div className="social">
              <i className="fa-brands fa-instagram"></i>
            </div>
          </a>
          <a href="mailto:sudhamshasagar@gmail.com" target="_blank">
            <div className="social">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </a>
        </div>
      </div>
      <div className="developers-section">
        <h2>Our Team</h2>
        <div className="developer-cards">
          {developers.map((developer, index) => (
            <div key={index} className="developer-card">
              <img src={developer.photo} alt={developer.name} className="developer-image" />
              <div className="developer-info">
                <p className="name">{developer.name}</p>
                <p className="contributions">{developer.contributions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright-section">
        <p>&copy; 2024 its.ramayan. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Contact;
