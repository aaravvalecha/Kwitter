
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

function addUser(){

    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}