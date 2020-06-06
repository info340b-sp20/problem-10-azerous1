import React from 'react';
import ReactDOM from 'react-dom';
import firebase, { database } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'; //using FA 4.7 atm

import App from './App'; //so our app styling is applied second

//import and configure firebase here
var firebaseConfig = {
    apiKey: "AIzaSyAPwbTp7OV_1BXTNroH13OgMfRu-Pp4_6E",
    authDomain: "info340-set10-awesome.firebaseapp.com",
    databaseURL: "https://info340-set10-awesome.firebaseio.com",
    projectId: "info340-set10-awesome",
    storageBucket: "info340-set10-awesome.appspot.com",
    messagingSenderId: "538261763503",
    appId: "1:538261763503:web:4cf103c3bf7a6a7ae1ab5a",
    measurementId: "G-86280Y6QF5"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

