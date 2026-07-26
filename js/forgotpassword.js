document
    .getElementById("forgotForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("forgotEmail").value.trim();

        const savedUser =
            JSON.parse(localStorage.getItem("citizenUser"));

        if (!savedUser) {
            alert("No registered account found.");
            return;
        }

        if (email !== savedUser.email) {
            alert("Email address not found.");
            return;
        }

        alert("Account verified successfully!");

        window.location.href = "resetpassword.html";
    });