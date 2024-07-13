// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBdn8ZyteVic1nTMAZBYR1eCGwXHktkroE",
    authDomain: "bnccfinal-f51ac.firebaseapp.com",
    databaseURL: "https://bnccfinal-f51ac-default-rtdb.firebaseio.com",
    projectId: "bnccfinal-f51ac",
    storageBucket: "bnccfinal-f51ac.appspot.com",
    messagingSenderId: "350835882985",
    appId: "1:350835882985:web:5adda1da493976b10e2978"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function validateForm() {
    const form = document.getElementById('registration-form');
    const email = form.querySelector('input[type="email"]').value;
    const name = form.querySelector('input[type="text"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    return email !== '' && name !== '' && phone !== '';
}

function submitForm(event) {
    event.preventDefault(); 

    if (validateForm()) {
        const form = document.getElementById('registration-form');
        const email = form.querySelector('input[type="email"]').value;
        const name = form.querySelector('input[type="text"]').value;
        const phone = form.querySelector('input[type="tel"]').value;
        const eventSelection = form.querySelector('.selected').textContent;
        const data = {
            email: email,
            name: name,
            phone: phone,
            event: eventSelection
        };
        sendDataToFirebase(data);
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function sendDataToFirebase(data) {
    set(ref(database, 'participants/' + data.name), {
        email: data.email,
        name: data.name,
        phone: data.phone,
        event: data.event
    }).then(() => {
        alert('Your data has been successfully saved!');
    }).catch((error) => {
        alert('Something went wrong T-T');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submitbtn');
    submitBtn.addEventListener('click', submitForm);
});

