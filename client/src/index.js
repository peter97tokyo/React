import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// react-router-dom (중급88)
/*
라우팅이란, 호출되는 url에 따라 페이지 이동을 설정하는 것이다. react에서 view는 component를 사용한다. 
react에서 라우팅을 지원하는 패키지는 여러개 있지만 웹 개발을 위한 패키지로 적합한 react-router-dom을 설치한다.
react-router-dom 은 {BrowserRouter, Route, Link}를 지원한다. Route와 Link를 사용하기 위해서는 <BrowserRouter> 
태그로 감싸 사용해야 한다. 
 */
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
