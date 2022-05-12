import React, { useContext, useRef } from 'react';
import './style.css';
import img1 from '../../img/img1.jpg';
import { LOGIN } from '../../ROUTES';
import { AuthContext } from '../../context/AuthContext';

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    LOGIN(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

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
                type='email'
                name='email'
                placeholder='email'
              ></input>

              <input
                className='form--input form--password'
                type='password'
                name='password'
                placeholder='password'
              ></input>
              <button className='form--btn btn'>
                {isFetching ? 'Loading...' : 'Start Connecting'}
              </button>
            </form>
            <div className='link__container'>
              <a href='/signup' className='link form--link'>
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
