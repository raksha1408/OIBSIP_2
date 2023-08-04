// Achievements.js

import React from 'react';
import achievementImage from 'D:/RAKSHA/react/tribute/src/c.jpg';
import secondImage from 'D:/RAKSHA/react/tribute/src/ms.jpg';
import 'D:/RAKSHA/react/tribute/src/components/Achievements.css'; // Replace with the actual path to the CSS file


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
        <h2 className="achievements-heading">Achievements of MS Dhoni</h2>
        <div className="achievements-subheadings">
          <h3 className="subheading">National Honors</h3>
          <ul className="achievements-list">
            <li>2018: Padma Bhushan, India's third-highest civilian award.</li>
            <li>2009: Padma Shri, India's fourth-highest civilian award.</li>
            <li>2007–08: Major Dhyanchand Khel Ratna award, India's highest honor given for achievement in sports.</li>
          </ul>

          <h3 className="subheading">Sporting Honors</h3>
          <ul className="achievements-list">
            <li>ICC ODI Player of the Year: 2008, 2009</li>
            <li>ICC World ODI XI: 2006, 2008, 2009, 2010, 2011, 2012, 2013, 2014 (captain in 2009, 2011–2014)</li>
            <li>Castrol Indian Cricketer of the Year: 2011</li>
            <li>ICC Men's ODI team of the decade: 2011–2020 (captain and wicketkeeper)</li>
            <li>ICC Men's T20I team of the decade: 2011–2020 (captain and wicketkeeper)</li>
            <li>ICC Spirit of the cricket award of the decade: 2011–2020</li>
          </ul>

          <h3 className="subheading">Other Honors</h3>
          <ul className="achievement-list">
            <li>MTV Youth Icon of the Year: 2006</li>
            <li>LG People's Choice Award: 2013</li>
            <li>Honorary doctorate degree by De Montfort University in August 2011</li>
            <li>CNN-News18 Indian of the Year: 2011</li>
            <li>In 2019, the Jharkhand Cricket Association named their stadium's South stand after Dhoni – M.S. DHONI PAVILION.</li>
            <li>In 2023, the Mumbai Cricket Association (MCA) has decided to honour him by dedicating seats (J282–J286) at the Wankhede Stadium where he hit the winning shot in 2011 World Cup Final.</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Achievements;