// ========================================
// FIREBASE CONFIGURATION
// ========================================

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTA_w5Qt1pbAGGs8Iro341-TY4yySp5Cs",
    authDomain: "engagement-rsvp-5fb6b.firebaseapp.com",
    databaseURL: "https://engagement-rsvp-5fb6b-default-rtdb.firebaseio.com",
    projectId: "engagement-rsvp-5fb6b",
    storageBucket: "engagement-rsvp-5fb6b.firebasestorage.app",
    messagingSenderId: "927695883503",
    appId: "1:927695883503:web:5f40a32f48f0782c45df1a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();

// ========================================
// RSVP SUBMISSION FUNCTION
// ========================================

function submitRSVPToFirebase(rsvpData) {
    return new Promise((resolve, reject) => {
        // Create a unique key for this RSVP
        const newRSVPRef = database.ref('rsvps').push();

        // Add timestamp
        rsvpData.submittedAt = new Date().toISOString();
        rsvpData.id = newRSVPRef.key;

        // Save to Firebase
        newRSVPRef.set(rsvpData)
            .then(() => {
                console.log('RSVP saved successfully!');
                resolve(rsvpData);
            })
            .catch((error) => {
                console.error('Error saving RSVP:', error);
                reject(error);
            });
    });
}

// ========================================
// FETCH ALL RSVPs (for admin page)
// ========================================

function getAllRSVPs() {
    return new Promise((resolve, reject) => {
        database.ref('rsvps').once('value')
            .then((snapshot) => {
                const rsvps = [];
                snapshot.forEach((childSnapshot) => {
                    rsvps.push(childSnapshot.val());
                });
                resolve(rsvps);
            })
            .catch((error) => {
                console.error('Error fetching RSVPs:', error);
                reject(error);
            });
    });
}
