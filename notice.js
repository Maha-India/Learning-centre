// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCfTiC7rlmqQp1ZB07uTj5ra6giiYanto",
    authDomain: "tripti-tution.firebaseapp.com",
    databaseURL: "https://tripti-tution-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "tripti-tution",
    storageBucket: "tripti-tution.appspot.com",
    messagingSenderId: "521198073840",
    appId: "1:521198073840:web:45e721c99dfaa8ecee8f35",
    measurementId: "G-8ZP4M7RJ1Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Fetch notices from Firebase RTDB
const noticesList = document.getElementById('notices-list');

firebase.database().ref('notices').on('value', (snapshot) => {
    noticesList.innerHTML = ''; // Clear existing notices
    snapshot.forEach((childSnapshot) => {
        const notice = childSnapshot.val();
        const li = document.createElement('li');
        li.textContent = notice;
        noticesList.appendChild(li);
    });
});
