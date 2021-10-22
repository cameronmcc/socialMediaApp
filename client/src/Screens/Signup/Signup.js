import React from 'react';
import './style.css';
import img1 from '../../img/img1.jpg';

export const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    fetch(
      `http://localhost:5000/create?username=${username}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.username.value = '';
    e.target.password.value = '';
  };
  return (
    <>
      <div className='signup__container'>
        <div className='wrapper'>
          <div className='form__column form__left'>
            <h2 className='form--logo'>Connect</h2>
            <div className='img__container'>
              <img className='form--img' src={img1} alt='img1' />
            </div>
            <p className='desc form--desc'>
              Connect with the ones you care about most with the Connect social
              App.
            </p>
          </div>
          <div className='form__column form__container'>
            <form className='form--element' onSubmit={handleSignup}>
              <h2 className='form--title'>Sign Up</h2>
              <input
                className='form--input form--username'
                type='text'
                name='username'
                placeholder='select a Username'
              ></input>
              <input
                className='form--input form--email'
                type='email'
                name='email'
                placeholder='Email'
              ></input>
              <input
                className='form--input form--password'
                type='password'
                name='password'
                placeholder='password'
              ></input>
              <input
                className='form--input form--password2'
                type='password'
                name='password2'
                placeholder='re-type password'
              ></input>
              <button className='form--btn btn'>Start Connecting</button>
            </form>
            <div className='link__container'>
              <a href='/login' className='link form--link'>
                Login page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
