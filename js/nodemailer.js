document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject)
    });

    if (response.ok) {
        alert("Email sent successfully!");
        this.reset();
    } else {
        alert("Error sending email. Please try again.");
    }
});