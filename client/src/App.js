import React from 'react';
import './App.css';
import { Login } from './Components/Login/Login';
import { Signup } from './Components/Signup/Signup';

function App() {
  // const [data1, setData1] = React.useState(null);

  // fetch('http://localhost:5000')
  //   .then((res) => res.json())
  //   .then((data) => setData1(data));
  return (
    <>
      <div className='container'>
        <Signup />
        <Login />
      </div>
    </>
  );
}

export default App;
