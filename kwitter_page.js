// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCUyrSbURIHZ3sdJ5q6u_UqmXRsBOTMpZc",
      authDomain: "kwitter-4a25e.firebaseapp.com",
      projectId: "kwitter-4a25e",
      storageBucket: "kwitter-4a25e.appspot.com",
      messagingSenderId: "840942965002",
      appId: "1:840942965002:web:058833d3a218e935fa6af3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    room_name = localStorage.getItem("roomname");
    user_name = localStorage.getItem("username");

    console.log("room name " + room_name);
    console.log("user name " + user_name);
    
    function logout() {
      localStorage.removeItem("Username");
      localStorage.removeItem(room_name);
      window.location = ("index.html");   
    }

    function send() {
          msg = document.getElementById("msg").value;
          console.log("Message "+msg);
          firebase.database().ref(room_name).push({
                username: user_name,
                message: msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
