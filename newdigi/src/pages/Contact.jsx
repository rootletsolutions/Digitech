import React from 'react';
import contact from '../assets/contact.png';
import digi from '../assets/digi.png';
import '../styles/Contact.css'; // Assuming you have a separate CSS file for Contact styling

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image">
        <img src={contact} alt="Contact" />
      </div>
      <div className="new">
        <div className="newleft">
          <img src={digi} alt="Digi" />
          <div className="contactright">
            <h1> Let’s </h1>
            <h2> Connect</h2>
              <div className="firstandlast">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Phone Number" />
              </div>
               <button className='abiwalabtn'>Get Started</button>
          </div>
        </div>
      </div>

      <div className="map">
      <div className="contact-section">
  <div className="mapleft">
    <p>We are Near Around You..</p> 
    <div className="visit">
    <h2>Come !</h2> <h1>Visit us</h1>
    </div>
    <br />
    <h4>Address</h4>
    <p>Office #1515-1516, 15th Floor, Caesar’s Tower, Opposite to Aisha Banwany, Shahrah-e-Faisal, Karachi, Pakistan</p>
  </div>
  <div className="mapright">
    <div className="map-container">
      <iframe width="718px;" height="600px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=;&amp;hl=en&amp;q=caeser%20tower%20Opposite%20to%20Aisha%20Banwany,%20Shahrah-e-Faisal,%20Karachi,%20Pakistan+(Digitech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
