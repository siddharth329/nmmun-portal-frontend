// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging, getToken} from 'firebase/messaging'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqRWWtruK6-CkRPYM-kDm4D8J98qEQ3EY",
    authDomain: "pwa-push-notification-a4457.firebaseapp.com",
    projectId: "pwa-push-notification-a4457",
    storageBucket: "pwa-push-notification-a4457.appspot.com",
    messagingSenderId: "763379845267",
    appId: "1:763379845267:web:2a60c3d6c984d06d242566",
    measurementId: "G-04NL8R0K5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const VAPID_KEY = 'BJG0c9_66q8QD5pvsv6HJSGP3FwsHGEYAHKq-67JcQXDsq5-T8E9CNWudU1D62gvomrY3JtxaM6p45-4m5F6H3c';

export const generateTokenForMessaging = (func) => {
    const messaging = getMessaging();
    getToken(messaging, {vapidKey: VAPID_KEY}).then((currentToken) => {
        if (currentToken) {
            console.log(currentToken)

            const storedToken = localStorage.getItem('FIREBASE_MESSAGING_TOKEN')
            if (storedToken !== currentToken) {
                localStorage.setItem('FIREBASE_MESSAGING_TOKEN', currentToken);
                //TODO: send token to server for subscription
            }
        } else {
            console.log('No registration token available. Request permission to generate one.');
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
}