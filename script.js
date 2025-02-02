document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting me. I will reach you soon.");
    this.reset();
});
