var firebaseConfig = {
    apiKey: "AIzaSyBOWS5kkMVSP9GvviRxvdhSKKfpVvP4vtU",
    authDomain: "elementalchats.firebaseapp.com",
    databaseURL: "https://elementalchats-default-rtdb.firebaseio.com",
    projectId: "elementalchats",
    storageBucket: "elementalchats.appspot.com",
    messagingSenderId: "285475375423",
    appId: "1:285475375423:web:75889f374d036a2815eb8a",
    measurementId: "G-6W9K0T445H"
  };

  firebase.initializeApp(firebaseConfig);
  
function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location="let'sChat_room.html";
    
}