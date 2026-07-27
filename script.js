// Display a welcome message in the browser console
console.log("Welcome to Manasa's Portfolio!");

// Contact form message
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for contacting me! I will get back to you soon.");
        form.reset();
    });
}