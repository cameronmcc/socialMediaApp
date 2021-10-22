import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './style.css';

const Home = () => {
  return (
    <>
      <container className='container'>
        <Navbar />
        <h1>Home page</h1>
      </container>
    </>
  );
};

export default Home;
