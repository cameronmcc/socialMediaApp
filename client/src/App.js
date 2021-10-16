import React from 'react';
import './App.css';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';

function App() {
  // const [data1, setData1] = React.useState(null);

  // fetch('http://localhost:5000')
  //   .then((res) => res.json())
  //   .then((data) => setData1(data));
  return (
    <>
      <div className='App'>
        <Login />
        <Signup />
      </div>
    </>
  );
}

export default App;
