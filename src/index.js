import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/home/Home';
import Title from './components/common/Title';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <Header />
      <Title />
      <Home />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
