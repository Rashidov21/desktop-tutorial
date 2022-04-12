import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
const firebaseConfig = {
    apiKey: "AIzaSyBfePZU1LMCmrwxFqLYXiQF_n132SdZhC4",
    authDomain: "fruitsbase.firebaseapp.com",
    databaseURL: "https://fruitsbase-default-rtdb.firebaseio.com",
    projectId: "fruitsbase",
    storageBucket: "fruitsbase.appspot.com",
    messagingSenderId: "445383361070",
    appId: "1:445383361070:web:4210d09aabe8622619d5bf",
    measurementId: "G-QCV1XJRVHR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, get, child, remove, }
from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
const db = getDatabase(app)

function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}
// writeUserData(3, "Xalimjon", 'john@gmail.com', '../images/noimg.png')

function getData(id) {
    get(
        ref(db, `users/${id}`)
    ).then(
        data => {
            console.log(data.val())
        }
    )
}
// getData(2) // Nozimjon