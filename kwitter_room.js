// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB23L73FoMVcOMfy5FgQ0oo5vyzZO7RGo4",
      authDomain: "letschatwebapp-fbfb2.firebaseapp.com",
      projectId: "letschatwebapp-fbfb2",
      storageBucket: "letschatwebapp-fbfb2.appspot.com",
      messagingSenderId: "967349071924",
      appId: "1:967349071924:web:5cdccd512b259843f61a61"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) ' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location ="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem(room_name);
      window.location = ("index.html");
}
