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
      <form onSubmit={handleLogin}>
        <input type='text' name='username' placeholder='username'></input>
        <input type='password' name='password' placeholder='password'></input>
        <button>Login</button>
      </form>
    </>
  );
};
