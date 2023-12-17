firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in
        var email = user.email;
        // ...
    } else {
        // User is not signed in
        // ...
    }
});
firebase.auth().signInWithEmailAndPassword(email, password);
