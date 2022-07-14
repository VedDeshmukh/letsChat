
function login(){
    user_name = document.getElementById("login_input").value;
    localStorage.setItem("Username", user_name);
    window.location = "Kwitter_room.html";
}
