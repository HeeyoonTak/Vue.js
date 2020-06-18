import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCqz1vrI_JABxFiq9CRrzwyK0tQHHNRpaY",
    authDomain: "takiyoon1003.firebaseapp.com",
    databaseURL: "https://takiyoon1003.firebaseio.com",
    projectId: "takiyoon1003",
    storageBucket: "takiyoon1003.appspot.com",
    messagingSenderId: "505508353800",
    appId: "1:505508353800:web:723ec1dcb92b98d739bebd",
    measurementId: "G-7M0MQ76509"
  };

var firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
