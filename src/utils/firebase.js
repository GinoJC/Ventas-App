import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCMmM4rKpReifK7LVBjQ0iBauJXSVnk2uU",
    authDomain: "ventas-app-9c30d.firebaseapp.com",
    databaseURL: "https://ventas-app-9c30d.firebaseio.com",
    projectId: "ventas-app-9c30d",
    storageBucket: "ventas-app-9c30d.appspot.com",
    messagingSenderId: "765564552703",
    appId: "1:765564552703:web:8d7b09df1176180fad53ca"
};

export default firebase.initializeApp(firebaseConfig);