import React from 'react';
import ReactDOM from 'react-dom/client';
import titleScroll from './utils/title-scroll.js';
import 'normalize.css';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

titleScroll();
gsap.registerPlugin(ScrollTrigger);
