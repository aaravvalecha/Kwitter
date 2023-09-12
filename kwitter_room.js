
var firebaseConfig = {
      apiKey: "AIzaSyAoUuRYvmvyOx7wT7k5jScQ1CBvaw1doMc",
      authDomain: "practise-activity-66ade.firebaseapp.com",
      databaseURL: "https://practise-activity-66ade-default-rtdb.firebaseio.com",
      projectId: "practise-activity-66ade",
      storageBucket: "practise-activity-66ade.appspot.com",
      messagingSenderId: "10295400979",
      appId: "1:10295400979:web:2ca5505e9088a678603de6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";
function addroom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      
      window.location="index.html";
}