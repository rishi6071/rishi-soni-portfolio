(() => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCZbf3OxcM_BBJQiuxMIfqPWWGPHV0gy-w",
    authDomain: "rishisoni-portfolio.firebaseapp.com",
    projectId: "rishisoni-portfolio",
    storageBucket: "rishisoni-portfolio.appspot.com",
    messagingSenderId: "383790404423",
    appId: "1:383790404423:web:0c65445d8d803da020f262"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // For Current Copyright Year in Footer
  document.querySelector('#copyright_year').innerText = new Date().getFullYear();
})()