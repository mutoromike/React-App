import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { render } from 'react-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';

render(<AboutPage />, document.getElementById('root'));