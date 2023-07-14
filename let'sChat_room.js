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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
   });});}
getData();
213

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
pupose:"adding room name"
    });
console.log(room_name);
    localStorage.setItem("room_name", room_name);
    window.location = "let'sChat_room.html";
}

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location ="let'sChat_room.html";
    }
    