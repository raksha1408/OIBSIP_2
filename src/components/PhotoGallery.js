import React from 'react';

const PhotoGallery = () => {
  const imageUrls = [
    'https://www.theeducationmagazine.com/wp-content/uploads/2020/03/10-2.jpg',
    'https://www.forbesindia.com/media/images/2023/Jul/img_212677_3.jpg',
    'https://www.lifegram.org/wp-content/uploads/2021/10/quotes-by-Abdul-Kalam-.jpg',
    'https://www.secretsofuniverse.in/wp-content/uploads/2020/07/1-1-1024x538.png',
    'https://www.dqindia.com/wp-content/uploads/2015/07/Abdul-Kalam.jpg',
    'https://www.mindsquotes.com/wp-content/uploads/2022/08/positive-thinking-motivational-student-apj-abdul-kalam-quotes-1.jpg',
    'https://thequotesmaster.com/wp/wp-content/uploads/2015/07/Motivational-inspiring-quotes-from-ABJ-Abdhul-kalam.jpg',
    'https://www.india.com/wp-content/uploads/2016/10/712.jpg',
    'https://www.theeducationmagazine.com/wp-content/uploads/2020/03/7-5.jpg',
    'https://i.pinimg.com/736x/c3/f8/df/c3f8df9c01e29f1cd7caa3d6afe3f5aa.jpg',
    'https://www.wordsaregod.com/product_images/apj_abdul_kalam_inspirational_quote2.png',
    'https://img6.fresherslive.com/latestnews/2023/05/apj-abdul-kalam-quotes-for-success-645a2238a93ea1274215-900.webp',
    'https://statustown.com/wp-content/uploads/quotesimages/apj-abdul-kalam-5503.jpg',
    'https://cdn.feedingtrends.com/article-images/3_09f4dbd7b7.jpg',
    'https://www.scrolldroll.com/wp-content/uploads/2020/01/APJ-Abdul-Kalam-Quotes-10.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfrFY0z5T-XrjoIG6mgmB-TUISKLhW3QEG_w&usqp=CAU'
    // Your image URLs here
  ];

  return (
    <div>
      <h2>Famous Quotes and Sayings by Dr. Kalam</h2>
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
