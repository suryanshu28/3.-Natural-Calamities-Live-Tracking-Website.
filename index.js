//jshint esversion: 6

import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-database.js";

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}





////////------- FIREBASE-------///////////


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
const database = getDatabase(app);
const db = getDatabase();

const contactInfo = ref(db, 'Infos');

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace("login.html")

  }
});

const URl = new URL(window.location.href);
console.log(URL)

////////------- ContactForm -------///////////
document.querySelector(".contactForm").addEventListener('submit',submitCon)

function submitCon(e) {
  e.preventDefault()
  let email = document.querySelector(".ContactEmail").value;
  let message = document.querySelector(".ContactMessage").value;
  saveContactInfo(email,message);
  document.querySelector(".contactForm").reset()
}

function saveContactInfo(email,message) {
  const newContactInfo = push(contactInfo); 
  set(newContactInfo, {
      email: email,
      message : message
  });
}

// function writeUserData(userId,message, email,) {


//   set(ref(db, 'ContInfo/'), {
//     email: email,
//     message : message
//   });
// }
