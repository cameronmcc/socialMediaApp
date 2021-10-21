import React from 'react';
import './style.css';
import img1 from '../../img/img1.jpg';

export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    fetch(
      `http://localhost:5000/login?username=${username}&password=${password}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));

    e.target.username.value = '';
    e.target.password.value = '';
  };
  return (
    <>
      <div className='container signup__container'>
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
            <form className='form--element' onSubmit={handleLogin}>
              <h2 className='form--title'>Welcome back! Log in</h2>
              <input
                className='form--input form--username'
                type='text'
                name='username'
                placeholder='Username'
              ></input>

              <input
                className='form--input form--password'
                type='password'
                name='password'
                placeholder='password'
              ></input>
              <button className='form--btn btn'>Start Connecting</button>
            </form>
            <div className='link__container'>
              <a href='/signup' className='link login--link'>
                Don't have an account? sign up here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
