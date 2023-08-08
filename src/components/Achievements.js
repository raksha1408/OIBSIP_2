// Achievements.js

import React from 'react';
import achievementImage from 'D:/RAKSHA/react/apj/src/apj.jpeg';
import secondImage from 'D:/RAKSHA/react/apj/src/kalam.PNG';
import 'D:/RAKSHA/react/apj/src/components/Achievements.css'; // Replace with the actual path to the CSS file


const Achievements = () => {
  return (
    <div className="achievements-container light-mode">
      <div className="achievements-image">
        <img src={achievementImage} alt="Achievement" />
        <div className="second-image">
        <img src={secondImage} alt="Second Achievement" />
      </div>
      </div>
      <div className="achievements-content">
        <h2 className="achievements-heading">Achievements of Dr. Kalam</h2>
        <div className="achievements-subheadings">
          <h3 className="subheading">Presidency and Vision for India:</h3>
          <ul className="achievements-list">
            <li>Elected as the 11th President of India in 2002, becoming the first scientist and bachelor to hold the prestigious office.</li>
            <li>Utilized the presidency to interact with young minds across the nation, inspiring them with his vision of a developed India and the "Vision 2020" plan for the country's growth and progress.</li>
            <li>Received the Bharat Ratna, India's highest civilian award, in 1997 for his exceptional contributions to science and technology and the Padma Vibhushan in 1990.</li>
          </ul>

          <h3 className="subheading">Awards and Honors</h3>
          <ul className="achievements-list">
          <li>1981: Padma Bhushan – Government of India</li>
<li>Padma Vibhushan – Government of India</li>
  <li>1997: Bharat Ratna – Government of India</li>
   <li> 1997: Indira Gandhi Award for National Integration – Government of India</li>
   <li> 1998: Veer Savarkar Award – Government of India</li>
    <li>2000: SASTRA Ramanujan Prize – Shanmugha Arts,Science,Technology & Research Academy, India</li>
    <li>2013: Von Braun Award – National Space Society.</li></ul>

          <h3 className="subheading">Space and Missile Program</h3>
          <ul className="achievements-list">
            <li>Led the development of the indigenous Satellite Launch Vehicle (SLV-III), which successfully deployed the Rohini satellite into orbit, making India a member of the exclusive space club.</li>
            <li>Played a key role in the development of the Polar Satellite Launch Vehicle (PSLV), which has become one of the most successful and reliable launch vehicles in the world.</li>
            <li>Spearheaded the Agni and Prithvi series of ballistic missiles, showcasing India's advanced missile technology capabilities.</li>
            
          

          <h3 className="subheading">Nuclear Program and Pokhran-II:</h3>
          <ul className="achievement-list">
            <li>As Chief Project Coordinator, played a pivotal role in the successful nuclear tests of Pokhran-II, demonstrating India's nuclear capabilities and establishing the country as a nuclear power.</li>
            <li>Guided India's nuclear energy and technology programs, including the development of fast-breeder reactors and nuclear-powered submarines.</li>
            </ul>
          
          <br></br>
          <br></br>
          <li> APJ Abdul Kalam's achievements spanned various fields, including space research, defense, education, and politics. His contributions continue to inspire generations and his legacy as the "People's President" lives on as a symbol of excellence and dedication to the nation.</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Achievements;