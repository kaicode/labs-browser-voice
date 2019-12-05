<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAXCTa0k5GiFkfd6Wxcn3osFKPt_MLzhFA",
    authDomain: "kai-snomed-browser.firebaseapp.com",
    databaseURL: "https://kai-snomed-browser.firebaseio.com",
    projectId: "kai-snomed-browser",
    storageBucket: "kai-snomed-browser.appspot.com",
    messagingSenderId: "291147815323",
    appId: "1:291147815323:web:6edf244a37d1492a1f293e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();

  var commandRef = firebase.database().ref('users/123/command');
  commandRef.on('value', function(snapshot) {
    console.log(snapshot.val());
  });

</script>
