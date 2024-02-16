//jshint esversion: 6
import { getAuth,onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAC4I_1ZNttUNPFG8f-ORCZUudG9PBrvBc",
  authDomain: "miniproject-c0c32.firebaseapp.com",
  projectId: "miniproject-c0c32",
  storageBucket: "miniproject-c0c32.appspot.com",
  messagingSenderId: "589667851399",
  appId: "1:589667851399:web:24e3dc53062270d7782c22",
  measurementId: "G-DTH7SH4WJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

 window.onload=function(){
    var register = document.getElementById("register");
    var login = document.getElementById("Login-Form")
    register.addEventListener("submit", handler_reg);
    login.addEventListener("submit", handler_log);
}

function handler_reg(event){
  event.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value
   createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
   });
}

function handler_log(event) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace("index.html")

  }
});




