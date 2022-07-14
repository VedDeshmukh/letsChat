// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC8Y1lX745ZWTx3Gh_S_FWoRa7NPmgWwAk",
    authDomain: "letschat-2a5ec.firebaseapp.com",
    databaseURL: "https://letschat-2a5ec-default-rtdb.firebaseio.com",
    projectId: "letschat-2a5ec",
    storageBucket: "letschat-2a5ec.appspot.com",
    messagingSenderId: "269385587433",
    appId: "1:269385587433:web:dce1a1dbb6016514bf6e78"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


User_name = localStorage.getItem("Username");
room_name = localStorage.getItem("Room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
User_name = message_data["name"];
chat = message_data["message"];
like = message_data["likes"];
tick_name = "<h4>" + User_name + "<img src = 'tick.png'> </h4>";
message_display = "<h4>" + chat + "</h4>";
like_display = "<h4>" + like + "<button class = 'btn btn-success' id =" + firebase_message_id + " value =" + like + "onclick='like(this.id)'>";
thumbs_up = "<span class = 'glyphicon glyphicon-thumbs-up'> Like" + like + "</span> </button> <hr>";
rows = tick_name + message_display + like_display + thumbs_up;
document.getElementById("rows").innerHTML += rows;
//End code
      } });  }); }
getData();

function send(){
      chat = document.getElementById("Message").value;
      firebase.database().ref(room_name).push({
            name: User_name, 
            message: chat,
            like: 0
      })
    document.getElementById("Message").innerHTML = "";
    };

function like(message_id){
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      likess = document.getElementById(button_id).value;
      updated_likes = Number(like) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
      like : updated_likes
      })};
