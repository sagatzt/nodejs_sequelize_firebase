// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
const firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.envmeasurementId
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let fbFunctions={}

fbFunctions.signup=(email,password)=>{
    return new Promise((resolved)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
          // Signed in
          var user = userCredential.user;
          await userCredential.user.sendEmailVerification()
          resolved(user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          resolved(errorCode,errorMessage)
        });        
    })
}

module.exports=fbFunctions