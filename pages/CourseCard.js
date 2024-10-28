import React, { useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Head from 'next/head';

export default function CoursePage() {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Head>
        <title>Course Card</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-light p-3">
        <div className="course-card">
          <div>
            <img src="/images/course/violin_1.jpg" className="card-img" alt="樂譜" />
          </div>
          <div className="card-body">
            <div className="card-text position-relative">
              <div className="text">
                <h5 className="course-title">課程標題課程標題課程</h5>
                <h4 className="course-content">課程內容內容內容</h4>
              </div>
              <div className="btn-heart">
                {isFavorite ? (
                  <BsHeartFill className="favorite-icon filled" onClick={toggleFavorite} />
                ) : (
                  <BsHeart className="favorite-icon" onClick={toggleFavorite} />
                )}
              </div>
            </div>
            <div className="instructor-section">
              <div className="instructor-info">
                <img
                  src="/images/teacher/王馨平.jpg"
                  className="instructor-avatar"
                  alt="王老師"
                />
                <span>王老師</span>
              </div>
              <div className="price">NT $1260/堂</div>
            </div>
            <button className="sign-up-button">立即報名</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .bg-light {
          background-color: #f8f9fa;
        }
        .p-3 {
          padding: 1rem;
        }
        .course-card {
          max-width: 350px;
          border-radius: 8px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.3);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .card-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-body {
          padding: 15px;
        }
        .course-title {
          font-size: 18px;
          font-weight: 700;
        }
        .course-content {
          font-size: 16px;
          margin-bottom: 16px;
          font-weight: normal;
        }
        .card-text {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .instructor-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .instructor-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .instructor-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        .price {
          font-size: 1.1rem;
          color: #333;
        }
        .sign-up-button {
          width: 100%;
          background-color: #716657;
          border: none;
          color: white;
          padding: 0.75rem;
          font-size: 1rem;
          border-radius: 4px;
        }
        .sign-up-button:hover {
          background-color: #5A5246;
        }
        .favorite-icon {
          position: absolute;
          top: 0px;
          right: 0px;
          color: #716657;
          font-size: 1.5rem;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}