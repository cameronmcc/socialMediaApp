import React from 'react';
import './style.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__wrapper'>
        <div className='profile__top'>
          <h2 className='profile--item'>Your Profile</h2>
          <img className=' profile--pic' src='bio.png' alt='bio.png' />
          <div className='profile--item profile--top--heading'>
            Cameron McCloskey
          </div>
        </div>
        <div className='profile__middle'>
          About me:
          <div className='about--me'>
            Full Stack React/MERN developer in Los Angeles. Coding/learning
            every day 🤩
          </div>
        </div>
        <div className='profile__bottom'></div>
      </div>
    </div>
  );
};

export default Profile;
