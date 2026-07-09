import React, { useState } from 'react';
import Contactimgae from './Image/contact.jpg';
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

function Contact() {

  const [Name, setName] = useState('');
  const [Pnumber, setPnumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Subject, setSubject] = useState('');
  const [Message, setMessage] = useState('');

  const handleClick = async (event) => {
    event.preventDefault();

    try {

      await emailjs.send(
        'service_8k9c9yg',     // service_xxxxx
        'template_6442sdq',    // template_xxxxx
        {
          name: Name,
          phone: Pnumber,
          email: Email,
          subject: Subject,
          message: Message
        },
        '8Oxj6apjOLEJhu9kU'
      );

      alert('Message sent successfully! We will contact you soon.');

      setName('');
      setPnumber('');
      setEmail('');
      setSubject('');
      setMessage('');

    } catch (error) {
      console.log(error);
      alert('Failed to send message! Please try again');
    }
  };

  return (
    <div className="main-heading">

      <h1>
        Contact <span className="highlight">Us</span>
      </h1>

      <div className="contact-container">

        <div className="image-section">
          <img
            src={Contactimgae}
            alt="Support agents"
          />
        </div>

        <div className="form-section">

          <h2>
            Have a Roblox project in mind? Let's work together to bring your ideas to life.
          </h2>

          <form>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="name">
                  Name:
                </label>

                <input
                  onChange={(e)=>setName(e.target.value)}
                  value={Name}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="phone">
                  Phone number:
                </label>

                <input
                  onChange={(e)=>setPnumber(e.target.value.slice(0,10))}
                  value={Pnumber}
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone"
                  required
                />

              </div>

            </div>

            <div className="form-row">

              <div className="form-group">

                <label htmlFor="email">
                  Email:
                </label>

                <input
                  onChange={(e)=>setEmail(e.target.value)}
                  value={Email}
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                />

              </div>

              <div className="form-group">

                <label htmlFor="subject">
                  Subject:
                </label>

                <input
                  onChange={(e)=>setSubject(e.target.value)}
                  value={Subject}
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  required
                />

              </div>

            </div>

            <div className="form-group full-width">

              <label htmlFor="message">
                Message:
              </label>

              <textarea
                onChange={(e)=>setMessage(e.target.value)}
                value={Message}
                id="message"
                rows="4"
                placeholder="Enter your message"
                required
              />

            </div>

            <div className="contactbtn">

              <button
                type="button"
                onClick={handleClick}
                className="btn secondary"
              >
                Submit
              </button>

            </div>

          </form>

        </div>
      </div>

      <div className="contact-section">

        <div className="contact-card">

          <div className="social-icons">

            <a
              href="https://github.com/Chandan734"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/chandan-kumar-819521222/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="icon"
              />
            </a>

            <a
              href="https://m.facebook.com/chandansahab.sahab/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="icon"
              />
            </a>

            <a
              href="https://www.instagram.com/Chandan_734"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="icon"
              />
            </a>

          </div>

        </div>

        {/* <div className="divider-container">

          <div className="divider-text">
            Personal Email -
            <span> cp028443@gmail.com </span>
          </div>

          <div className="divider-line"></div>

        </div> */}

      </div>

    </div>
  );
}

export default Contact;