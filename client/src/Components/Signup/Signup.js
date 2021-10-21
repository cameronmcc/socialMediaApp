import React from 'react';

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
      <div className='container'>
        <div className='wrapper'>
          <div className='form__left'>
            <h2 className='form--logo'>Connect</h2>
            <h3 className='form--desc'>
              Connect with the ones you care about most with the Connect social
              App.
            </h3>
          </div>
          <form className='form__right' onSubmit={handleSignup}>
            <input
              className='form--username'
              type='text'
              name='username'
              placeholder='select a Username'
            ></input>
            <input
              className='form--email'
              type='email'
              name='email'
              placeholder='Email'
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
