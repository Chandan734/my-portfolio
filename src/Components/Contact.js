import React from 'react'
import Contactimgae from './Image/contact.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faFacebook,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Contact() {

  const[Name,setName]=useState('');
  const[Pnumber,setPnumber]=useState('');
  const[Email,setEmail]=useState('');
  const[Subject,setSubject]=useState('');
  const[Message,setMessage]=useState('');

    const handleName=(event)=>{
        setName(event.target.value)
    }
     const handlePnumber=(event)=>{
        setPnumber(event.target.value)
    }
     const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
     const handleSubject=(event)=>{
        setSubject(event.target.value)
    }
     const handleMessage=(event)=>{
        setMessage(event.target.value)
    }

    const handleClick= async (event)=>{
        event.preventDefault();
        const data={
            Name:Name,
            Pnumber:Pnumber,
            Email:Email,
            Subject:Subject,
            Message:Message,
        };
   try{
            const response= await fetch('https://dummy.restapiexample.com/api/v1/create',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify(data)
            });
        } catch(error){
            console.error('Error:',error);
        }
     }

  return (
   <div class="main-heading">

  <h1 >Contact <span class="highlight">Us</span></h1>
  <div class="contact-container">
    <div class="image-section">
      <img src={Contactimgae} alt="Support agents"/>
    </div>
    <div class="form-section">
      <h2>We’re always happy to hear from you and here to help—anytime you need us.</h2>
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name:</label>
            <input onChange={handleName}  value={Name} type="text" id="name" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <label for="phone">Phone number:</label>
            <input onChange={handlePnumber} value={Pnumber}type="tel" id="phone" placeholder="Enter your phone" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email:</label>
            <input onChange={handleEmail} value={Email} type="email" id="email" placeholder="Enter your email"/>
          </div>
          <div class="form-group">
            <label for="type">Subject type:</label>
            <input onChange={handleSubject} value={Subject} type="Subject" id="subject" placeholder="Enter your subject"/>
          </div>
        </div>
        <div class="form-group full-width">
          <label for="message">Message:</label>
          <textarea onChange={handleMessage} value={Message} id="message" rows="4" placeholder="Enter your message"/>
        </div>
        <div class="buttons contactbtn">
            <a href="#" onClick={handleClick} class="btn secondary">Submit</a>
          </div>
          <div>
    </div>
      </form>
    </div>
  </div>
 <div class="contact-section">
  <div class="contact-card">
    <div class="social-icons">
      {/* <!-- GitHub --> */}
      <a href="https://github.com/Chandan734" target="_blank">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      {/* <!-- LinkedIn --> */}
      <a href="https://www.linkedin.com/in/chandan-prajapati-819521222" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      {/* <!-- Facebook --> */}
      <a href="https://m.facebook.com/chandansahab.sahab/" target="_blank">
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </a>
      {/* <!-- Instagram --> */}
      <a href="https://www.instagram.com/Chandan_734" target="_blank">
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
    </div>
  </div>

  <div class="divider-container">
    <div class="divider-text">Personal Email- <span >cp028443@gmail.com</span> </div>
    <div class="divider-line"></div>
  </div>

  <div class="contact-card">
    {/* <!-- Optional extra info --> */}
  </div>
</div>


   </div>
  )
}

export default Contact
