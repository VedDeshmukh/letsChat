
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

  Welcome_person = localStorage.getItem("Username");
  document.getElementById("welcome_text").innerHTML = "Welcome " + Welcome_person;
  console.log(Welcome_person);

  function addRoom(){
  room = document.getElementById("room_input").value;
  firebase.database().ref("/").child(room).update({Purpose: "adding room name"});
  localStorage.setItem("Room_name", room);
  window.location = "kwitter_page.html";
  }

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - ", Room_names);
row = "<div class = 'room_name' id="+Room_names+"onclick = 'redirect()'>#" + Room_names + "</div><hr>";
document.getElementById("trending_rooms").innerHTML += row;
//End code
});});}
getData();

function redirect(room){
  console.log(room);
  localStorage.setItem("Room_name", room);
  window.location = "kwitter_page.html";
}

function logout(){
  window.location = "index.html";
  localStorage.removeItem("Username");
  localStorage.removeItem("Room_name");
}
