importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


firebase.initializeApp({
    // EDITME:
    apiKey: 'AIzaSyCiYPGtOngHtF8OPE6lm7zbPOnViL2JPj4',
    authDomain: 'sherxan-ab285.firebaseapp.com',
    projectId: 'sherxan-ab285',
    storageBucket: '629962222848',
    messagingSenderId: 'sherxan-ab285.firebasestorage.app',
    appId: '1:629962222848:web:927ff807f43ae2033497e5',
    measurementId: 'FIREBASE_MEASUREMENT_ID',
});

const messaging = firebase.messaging();

try {
    messaging.setBackgroundMessageHandler(function (payload) {
        let data = payload?.notification;
        const notificationTitle = data?.title;
        const notificationOptions = {
            body: data?.body,
            icon: './logo.png' || 0,
            image: data?.image
        };

        return self.registration.showNotification(notificationTitle,
            notificationOptions);
    });

} catch (error) {
    console.log("This is an error ->", error);
}
