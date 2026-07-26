document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("registerName")
            .value
            .trim();

        const mobile =
            document.getElementById("registerMobile")
            .value
            .trim();

        const email =
            document.getElementById("registerEmail")
            .value
            .trim();

        const password =
            document.getElementById("registerPassword")
            .value;

        const confirmPassword =
            document.getElementById("confirmPassword")
            .value;


        // Check mobile number
        if (!/^[0-9]{10}$/.test(mobile)) {alert("Please enter a valid 10-digit mobile number.");

            return;
        }


        // Check password
        if (password.length < 6) {

            alert("Password must contain at least 6 characters.");

            return;
        }


        // Check confirm password
        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        // Save user data
        const user = {

            name: name,

            mobile: mobile,

            email: email,

            password: password

        };


        localStorage.setItem(
            "citizenUser",
            JSON.stringify(user)
        );


        alert(
            "Account created successfully!\n\n" +
            "You can now login to your account."
        );


        window.location.href = "login.html";

    });