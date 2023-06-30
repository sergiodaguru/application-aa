import "./App.css"
import React, { useState } from 'react';
import { configuration } from './config.js';

  const cors=require("cors");
  const corsOptions ={
      origin:'*',
      credentials:true,            //access-control-allow-credentials:true
      optionSuccessStatus:200,
  }



export default function LogComponent() {

  const [counter, setCounter] = useState(0);
  const intervalIDRef = React.useRef(null);
  const msg = configuration.seed;
  React.use(cors(corsOptions));

  const message = "Test " +  msg + " Message " + counter;
  const url = "https://application-aa-server.cloud-refresh-ephem-42lwq-59ac7c5b6a0c144b63d34c29d8ad6aa7-0000.us-south.containers.appdomain.cloud"+"/message?content="+message;

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'https://application-aa-server.cloud-refresh-ephem-42lwq-59ac7c5b6a0c144b63d34c29d8ad6aa7-0000.us-south.containers.appdomain.cloud");
  headers.append('Access-Control-Allow-Credentials', 'true');

  headers.append('GET', 'POST', 'OPTIONS');
  //increase counter
  console.log("url:"+url)
  const start_log = () => {
  intervalIDRef.current = setInterval(() => {
    console.log(message);
    fetch(url, {mode:'cors',headers: headers})
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
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
      <div className="counter">
      <h1>{ configuration.appl } v4</h1>
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
