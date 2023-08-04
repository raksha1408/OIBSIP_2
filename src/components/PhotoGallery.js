import React from 'react';

const PhotoGallery = () => {
  const imageUrls = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD458934ohXw1N9mBywXdrFFh0Gi-9SYjUXg&usqp=CAU',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-p-mUPHtb1jO8L2VDMJy_5_ktqCZmLaprUw&usqp=CAU',
    'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/07/dhoni-ap0107-1561967789.jpg',
    'https://pbs.twimg.com/media/EcTS5R_WkAEyk30.jpg',
    'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202004/msdhoni11.jpeg',
    'https://divyasandesh.in/wp-content/uploads/2023/07/HD-wallpaper-ms-dhoni-cricket-india-ms-dhoni-sports.jpg',
    'https://assets.telegraphindia.com/telegraph/2022/Apr/1650571255_ms-dhoni.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsL4c2b2KwZ-SXQlQ3ZSljXiZ35_eR2maF_-ZQqRT-sNDUTlG_StGgkzVu3Fe4-ltK5k&usqp=CAU',
    'https://ik.imagekit.io/j83rchiauw/A_List_Star/mahendra-singh-dhoni.png',
    'https://i.pinimg.com/550x/db/48/bd/db48bd5c939a9cdc42f4b3da615897d9.jpg',
    'https://img.republicworld.com/republic-prod/stories/images/16854981066476a8fac82d7.jpg',
    'https://www.iplcricketmatch.com/wp-content/uploads/2020/08/ms-dhoni-859x639.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3XZXB-CIBCSxfqi0L-gdInCJSGEtvoCmJtVft8Q93IFyo-7G4NWKXpg1EL3GArWu51PY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnOqcMB-pxTfLXxFekpC7hep33E8AHMNZJg&usqp=CAU',
    'https://pbs.twimg.com/profile_images/1655568245712203777/iLRFJB2Q_400x400.jpg'
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
