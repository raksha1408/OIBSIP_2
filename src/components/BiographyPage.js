import React from 'react';
import './BiographyPage.css'; // Import the CSS file for the BiographyPage component

const BiographyPage = () => {
  return (
    <div className="biography-container">
      <div className="biography-content">
        <h2>Dr. Kalam Biography</h2>
        
        <p>
        Dr. Avul Pakir Jainulabdeen Abdul Kalam, popularly known as Dr. APJ Abdul Kalam, was an Indian scientist and
        statesman who served as the 11th President of India from 2002 to 2007. He was born on October 15, 1931, in
        Rameswaram, Tamil Nadu, and brought up in a humble family.
      </p>
      <p className="biography-content">
        Dr. Kalam was a pioneer in aerospace engineering and played a significant role in India's civilian space program
        and military missile development. He was the chief architect of India's first indigenous Satellite Launch Vehicle
        (SLV-III) and the ballistic missile Agni and Prithvi. His work in the field of defense and technology earned him
        the nickname "Missile Man of India."
      </p>
      <p className="biography-content">
        Apart from his scientific contributions, Dr. Kalam was also known for his vision of a developed India and his
        interactions with the youth of the nation. He believed in the power of education and technology to transform the
        country and inspire its young minds to dream big.
      </p>
      <p className="biography-content">
        Dr. APJ Abdul Kalam's dedication to science, education, and the nation earned him numerous awards and honors,
        including the Bharat Ratna, India's highest civilian award. He was a true inspiration to millions and remains an
        enduring symbol of excellence and integrity.
        </p>
      </div>
    </div>
  );
};

export default BiographyPage;
