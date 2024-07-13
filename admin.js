// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const auth = firebase.auth();

// Admin login
document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('notices-management').style.display = 'block';
            loadNotices();
        })
        .catch((error) => {
            console.error('Error logging in:', error);
        });
});

// Load notices for admin
function loadNotices() {
    const adminNoticesList = document.getElementById('admin-notices-list');
    
    database.ref('notices').on('value', (snapshot) => {
        adminNoticesList.innerHTML = ''; // Clear existing notices
        snapshot.forEach((childSnapshot) => {
            const noticeKey = childSnapshot.key;
            const notice = childSnapshot.val();
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${notice}</span>
                <button onclick="deleteNotice('${noticeKey}')">Delete</button>
            `;
            adminNoticesList.appendChild(li);
        });
    });
}

// Add new notice
document.getElementById('add-notice-btn').addEventListener('click', () => {
    const newNotice = document.getElementById('new-notice').value;
    if (newNotice) {
        database.ref('notices').push(newNotice);
        document.getElementById('new-notice').value = '';
    }
});

// Delete notice
function deleteNotice(noticeKey) {
    database.ref('notices').child(noticeKey).remove();
}
