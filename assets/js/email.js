function sendMail(contactForm) {
    emailjs.send("asylumMail", "mailAsylum", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                window.alert("Message Sent");
            },
            function (error) {
                window.alert("Message Failed To Send");
            }
        );
    return false;  // To block from loading a new page
}