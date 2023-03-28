/* https://console.firebase.google.com/project/scopa-314ed/database/scopa-314ed-default-rtdb/data/~2F */


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_-Ke-oYFYTfmg-IfizEE23NL1AAJKIrQ",
    authDomain: "scopa-314ed.firebaseapp.com",
    databaseURL: "https://scopa-314ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "scopa-314ed",
    storageBucket: "scopa-314ed.appspot.com",
    messagingSenderId: "181726694178",
    appId: "1:181726694178:web:9e706acf109f40afc1737b"
  };

 import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


 // Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
let ip="test"
setTimeout(function(){
    firebase.database().ref("servers/"+ip).set({
        chat:["hei","nei","kuk"],
        currentKortstokk:kortStokk,
        bord:bordKort,
        player1Hånd:player1Hand,
        player2Hånd:player2Hand,
        player3Hånd:player3Hand,
        player4Hånd:player4Hand,
        team1kort:4,
        team2kort:2,

    
       
      });
},10)

onValue(ref(database,"servers/"+ip+"/chat"), function(snapshot) {
    let chat = Object.values(snapshot.val())
    console.log(chat[chat.length-1])
})
