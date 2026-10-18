
const themeBtn = document.getElementById("themeBtn");
const contactForm = document.getElementById("contactForm");
const message = document.getElementById("message");
const sendBtn = document.getElementById("sendBtn");

// Change between light and dark themes
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeBtn.textContent = isDark
        ? "Change to Light Theme"
        : "Change Theme";
});

// Handle contact form submission
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    formStatus.textContent = "Sending message...";

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            formStatus.textContent = "Thank you! Your message has been sent successfully.";
            contactForm.reset();
        } else {
            formStatus.textContent = "Oops! There was a problem submitting your form.";
        }
    } catch (error) {
        formStatus.textContent = "Oops! Network error. Please try again.";
    }
});
