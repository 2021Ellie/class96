
//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyC1rVjATd9KRj2262B0t1LGotn9wnGMISM",
      authDomain: "kwitter-19542.firebaseapp.com",
      databaseURL: "https://kwitter-19542-default-rtdb.firebaseio.com",
      projectId: "kwitter-19542",
      storageBucket: "kwitter-19542.appspot.com",
      messagingSenderId: "1025194240115",
      appId: "1:1025194240115:web:7dd4b691bc5e8073fe2206"
    };
    
    // Initialize Firebase
    const app = initializeApp(config);


user_name= localStorage.getItem("user_name");





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
