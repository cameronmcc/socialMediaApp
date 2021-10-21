import React from 'react';

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
      <div className='container'>
        <div className='wrapper'>
          <div className='form__left'>
            <h2 className='form--logo'>Login</h2>
            <h3 className='form--desc'>Welcome back! Login to Connect</h3>
          </div>
          <form className='form__right' onSubmit={handleLogin}>
            <input
              className='form--username'
              type='text'
              name='username'
              placeholder='username'
            ></input>
            <input
              className='form--password'
              type='password'
              name='password'
              placeholder='password'
            ></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
};
