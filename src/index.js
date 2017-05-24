import React from 'react';
import { render } from 'react-dom';
import App from './components';
import Modernizr from './js/modernizr';
import $ from 'jquery';

window.$ = $;

//Importing Styles
import './scss/style.scss';
// import './css/reset.css';

const elem = document.querySelector('#app');

render (<App/>, elem);
