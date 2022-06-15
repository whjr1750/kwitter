
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBYcgaYw1GMk1iArjEQs_3v7N5U2HmFqus",
      authDomain: "practice-activity-94-72469.firebaseapp.com",
      databaseURL: "https://practice-activity-94-72469-default-rtdb.firebaseio.com",
      projectId: "practice-activity-94-72469",
      storageBucket: "practice-activity-94-72469.appspot.com",
      messagingSenderId: "236235633201",
      appId: "1:236235633201:web:6a633d44260546ceff1b10"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name +" !";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                Key:"room"
          });
          localStorage.setItem("Room_Name",room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room_name-"+Room_names);
      //Start code
      row = "<div class='anyclass' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();


function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}