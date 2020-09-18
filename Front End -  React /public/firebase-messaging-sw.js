importScripts("http://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("http://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "90763504780",
});

var messaging = firebase.messaging();
