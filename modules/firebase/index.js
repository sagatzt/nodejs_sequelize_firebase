const firebase = require("firebase/app")
require("firebase/auth")

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.envmeasurementId
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let fbFunctions={}

fbFunctions.signup=(email,password)=>{
    return new Promise((resolved)=>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (userCredential) => {
          var user = userCredential.user
          await userCredential.user.sendEmailVerification()
          resolved(user)
        })
        .catch((error) => {
          var errorCode = error.code
          var errorMessage = error.message
          resolved(errorCode,errorMessage)
        })      
    })
}

fbFunctions.signin= (email,password)=>{
  return new Promise((resolved)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user
      resolved(user)
    })
    .catch((error) => {
      var errorCode = error.code
      var errorMessage = error.message
      resolved(errorCode,errorMessage)
    })
  })
}

fbFunctions.signout=()=>{
  return new Promise((resolved)=>{
    firebase.auth().signOut()
    .then(() => {
      resolved({response:'Usuario deslogueado'})
    }).catch((error) => {
      resolved(error)
    })
  })
}

fbFunctions.getCurrentUser=()=>{
  return new Promise((resolved)=>{
    var user = firebase.auth().currentUser;
      resolved(user)
  })
}

module.exports=fbFunctions