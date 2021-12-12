// import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getMessaging, getToken} from 'firebase/messaging'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCXW9mB8xS0QD1iTieukDQKj_YqI-WmHJQ",
    authDomain: "nmmun-messaging.firebaseapp.com",
    projectId: "nmmun-messaging",
    storageBucket: "nmmun-messaging.appspot.com",
    messagingSenderId: "602606547934",
    appId: "1:602606547934:web:1ed1407dba2956ac48a34f",
    measurementId: "G-QQPCT9619X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const VAPID_KEY = 'BNzc6Ilgd6w49zg8gBhEvkeDmZzLCswNkhLYDkRJYnkjZ1EzWnGuhZtnRelmGs-rTOnTUhHAtoq4eFkCLBIdb_U';

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