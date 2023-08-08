var firebaseConfig = {
  apiKey: "AIzaSyCjbeOtiYKh3Q00oaIqFhKTLdI37Y90bHs",
  authDomain: "project2-e97cf.firebaseapp.com",
  databaseURL: "https://project2-e97cf-default-rtdb.firebaseio.com",
  projectId: "project2-e97cf",
  storageBucket: "project2-e97cf.appspot.com",
  messagingSenderId: "1017471524386",
  appId: "1:1017471524386:web:cda0a5fea7bf20400a747b",
  measurementId: "G-VX44MR6HYF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


//ADD YOUR FIREBASE LINKS HERE
var username = localStorage.getItem("user_name")
document.getElementById("username").innerHTML = "Welcome "+username
function addRoom(){
  room_name = document.getElementById("room_name").value
  console.log(room_name)
  firebase.database().ref("/").child(room_name).update({   
    purpose:" adding_new_room" 
  })
  localStorage.setItem("room_name" , room_name)
window.location="kwitter_page.html"}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  
       Room_names = childKey;
      //Start code
console.log("room_name - " + Room_names)
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();


function redirectToRoomName (name){
  console.log(name)
  localStorage.setItem("room_name" , name)
  window.location = "kwitter_page.html"
}
function logout(){
  window.location = "index.html"
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
}

