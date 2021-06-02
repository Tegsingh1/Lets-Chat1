var firebaseConfig = {
  apiKey: "AIzaSyBba2DWZE4tx97-VAyaQ6bk4oTMtIxp-tc",
  authDomain: "lets-chat-7978b.firebaseapp.com",
  databaseURL: "https://lets-chat-7978b-default-rtdb.firebaseio.com",
  projectId: "lets-chat-7978b",
  storageBucket: "lets-chat-7978b.appspot.com",
  messagingSenderId: "298127924253",
  appId: "1:298127924253:web:d643d1eba6e93000be3af4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name  = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome "+user_name;

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
  
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });});}
getData();


  function addRoom()
  {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name",room_name);

    window.location = "Chat_page.html";
  }

  function logout()
  {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }

  function redirectToRoomName(name)
  {
    localStorage.setItem("room_name", name);

    window.location="Chat_page.html";
  }