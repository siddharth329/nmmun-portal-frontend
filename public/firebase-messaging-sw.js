importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyAqRWWtruK6-CkRPYM-kDm4D8J98qEQ3EY",
    authDomain: "pwa-push-notification-a4457.firebaseapp.com",
    projectId: "pwa-push-notification-a4457",
    storageBucket: "pwa-push-notification-a4457.appspot.com",
    messagingSenderId: "763379845267",
    appId: "1:763379845267:web:2a60c3d6c984d06d242566",
    measurementId: "G-04NL8R0K5G"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ON NOTIFICATION CLICK
self.addEventListener('notificationclick', event => {
    console.log(event)
    event.notification.close()
    event.waitUntil(
        self.clients.openWindow('https://portal.nmmun.com')
    )
})