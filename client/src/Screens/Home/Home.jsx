import React from 'react';
import Feed from '../../Components/Feed/Feed';
import Navbar from '../../Components/Navbar/Navbar';
import Profile from '../../Components/Profile/Profile';
import './style.css';

const Home = () => {
  return (
    <>
      <container className='container'>
        <Navbar />
        <div className='home__container'>
          <div className='feed__container'>
            <Feed />
          </div>
          <div className='profile--container'>
            <Profile />
          </div>
        </div>
      </container>
    </>
  );
};

export default Home;
