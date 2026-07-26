document
    .getElementById("resetForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const newPassword =
            document.getElementById("newPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters.");
            return;
        }

        const savedUser =
            JSON.parse(localStorage.getItem("citizenUser"));

        if (!savedUser) {
            alert("Account not found.");
            return;
        }
          savedUser.password = newPassword;

        localStorage.setItem(
            "citizenUser",
            JSON.stringify(savedUser)
        );

        alert("Password reset successfully!");

        window.location.href = "login.html";
    });