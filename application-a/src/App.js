import "./App.css"
import React, { useState } from 'react';
import { configuration } from './config.js';

export default function LogComponent() {

  const [counter, setCounter] = useState(0);
    const intervalIDRef = React.useRef(null);


  //increase counter
  const start_log = () => {
  intervalIDRef.current = setInterval(() => {
    console.log("Test " + { configuration.seed } + " Message " + counter);
    setCounter(count => count + 1);
        }, 3000);
  };

 //decrease counter
 const end_log = () => {
 if (intervalIDRef != null)
   clearInterval(intervalIDRef.current);
 };

  //reset counter
  const reset = () =>{
    setCounter(0);
  };

  return (
  <script src="%PUBLIC_URL%/environment.js"></script>
    <div className="counter">
      <h1>React Counter</h1>
      <p>Test { configuration.seed } message </p>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={start_log}>Start logging</button>
        <button className="control__btn" onClick={end_log}>Stop logging</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
