
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCCfTiC7rlmqQp1ZB07uTj5ra6giiYanto",
    authDomain: "tripti-tution.firebaseapp.com",
    databaseURL: "https://tripti-tution-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tripti-tution",
    storageBucket: "tripti-tution.appspot.com",
    messagingSenderId: "521198073840",
    appId: "1:521198073840:web:45e721c99dfaa8ecee8f35",
    measurementId: "G-8ZP4M7RJ1Q"
  };

  // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getDatabase();
        // Fetch notices from Firebase RTDB
        document.addEventListener('DOMContentLoaded', function() {
            const noticesList = document.getElementById('notice-list');
            const noticeref = ref(db, 'notices');
            onValue(noticeref, (snapshot) => {
                noticesList.innerHTML = ''; // Clear existing notices
                snapshot.forEach((childSnapshot) => {
                    const notice = childSnapshot.val();
            const hr = document.createElement('hr');
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = notice;
            li.appendChild(a);
            noticesList.appendChild(hr);
            noticesList.appendChild(li);
                });
            });
        });