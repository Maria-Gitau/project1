// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBipxHO1BMP5CGd0HXPH1Bm3acF0BAWnvo",
    authDomain: "project-2e508.firebaseapp.com",
    databaseURL: "https://project-2e508.firebaseio.com",
    projectId: "project-2e508",
    storageBucket: "project-2e508.appspot.com",
    messagingSenderId: "867383610204",
    appId: "1:867383610204:web:814db47b24c83dfc180f99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref('messages');


document.getElementById('nameform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');

    saveMessage(firstname, lastname);
}


function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(firstname, lastname) {
    console.log(123);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname: lastname
    });

}