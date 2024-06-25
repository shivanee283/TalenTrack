import firebase from 'firebase/app';
import 'firebase/messaging';


// Setup file for firebase cloud messaging


var firebaseConfig = {
    apiKey: "enter your API KEY",
    authDomain: "ms-teams-clone-d0fdb.firebaseapp.com",
    projectId: "ms-teams-clone-d0fdb",
    storageBucket: "ms-teams-clone-d0fdb.appspot.com",
    messagingSenderId: "907149617598",
    appId: "enter your API ID"
};
firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();

export const getToken = (setTokenFound) => {


    return messaging.getToken({ vapidKey: 'Mention your VAPID KEY' }).then((currentToken) => {
        if (currentToken) {
            console.log('current token for client: ', currentToken);
            setTokenFound(currentToken);

        } else {
            console.log('No registration token available. Request permission to generate one.');
            setTokenFound();
        }
    }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    })
}



export const onMessageListener = () => {
    console.log('x');
}
//   new Promise((resolve) => {

