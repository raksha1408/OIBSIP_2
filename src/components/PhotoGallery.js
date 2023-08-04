import React from 'react';

const PhotoGallery = () => {
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg'
    // Your image URLs here
  ];

  return (
    <div>
      <h2>Photo Gallery of MS Dhoni</h2>
      <div className="gallery-container">
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={` ${index + 1}`}
            width="300"
            height="300" // Set the desired height here
            style={{ margin: '5px 5px 40px', objectFit: 'cover' }} // Add margin to create space between rows
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
