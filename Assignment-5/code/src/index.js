import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Postview from './Postview';
import reportWebVitals from './reportWebVitals';
import Lastpage from "./Lastpage"
import Firstview from './Firstview';


ReactDOM.render(
  <React.StrictMode>
    {/* <Postview /> */}
    <Firstview/>
    {/* <Lastpage/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
