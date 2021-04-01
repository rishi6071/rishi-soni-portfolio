// Reference Collection
let contactInfo = "";
(() => {
    contactInfo = firebase.database().ref("usersQueries");
})()

// On Submission of Contact Form
document.querySelector('#msgeForm').addEventListener('submit', (event) => {

    // Avoiding Reloading of Page
    event.preventDefault();

    // User Typed Values
    let name = document.querySelector('#nam').value;
    let email = document.querySelector('#mail').value;
    let subject = document.querySelector('#sub').value;
    let message = document.querySelector('#msge').value;

    console.log(name, email, subject, message);
    saveContactInfo(email, name, subject, message);
});;

// Saving Data to Firebase
const saveContactInfo = (email, name, subject, message) => {

    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        email: email,
        name: name,
        subject: subject,
        message: message
    });
}