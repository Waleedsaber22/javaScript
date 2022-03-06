import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Routes, Route } from 'react-router-dom';
import Signin from './components/SignIn';
import SignUp from './components/SignUp';



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


