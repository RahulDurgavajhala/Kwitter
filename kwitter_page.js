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

  var username = localStorage.getItem("user_name")
 var room_name = localStorage.getItem("room_name")
  function send(){
    msg = document.getElementById("msg").value 
    firebase.database().ref(room_name).push({
        like:0 , name:username , message:msg 
    })
    document.getElementById("msg").value = ""
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data) 
name =  message_data['name']
message =  message_data['message']
like =  message_data['like']
name_with_tag = "<h4>" +name+ "<img class='user_tick' src='tick.png'> </h4>"
msg_with_tag = "<h4>" +message+ "</h4>"
like_button = "<button class='btn btn-warning' id ="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>"
span_with_tag  = "<span class='glyphicon glyphicon-thumbs-up'> like: "+like+" </span></button><hr>"
row = name_with_tag + msg_with_tag + like_button + span_with_tag ; 
document.getElementById("output").innerHTML += row
//End code
 } });  }); }
getData();
function logout(){
    window.location = "index.html"
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
  }
  function updatelike(message_id){
    console.log("clicked on like button - " + message_id)
    button_id = message_id
    likes = document.getElementById(button_id).value
    update_like  = Number(likes) + 1
    firebase.database().ref(room_name).child(message_id).update({
      like: update_like
    })
  }

