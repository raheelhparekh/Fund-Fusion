
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAcb9BPaDJlDKNZIASSb6iUEunbISZR7FQ",
    authDomain: "login-80eb8.firebaseapp.com",
    projectId: "login-80eb8",
    storageBucket: "login-80eb8.appspot.com",
    messagingSenderId: "328280556218",
    appId: "1:328280556218:web:f5bf725a6af05814c03883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {


    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating account");
            console.log("Creating User");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
})