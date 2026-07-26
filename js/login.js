document
    .getElementById("loginForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail")
            .value
            .trim();

        const password =
            document.getElementById("loginPassword")
            .value;


        // Get registered user
        const savedUser =
            JSON.parse(
                localStorage.getItem("citizenUser")
            );


        // No account
        if (!savedUser) {

            alert(
                "No account found.\n\nPlease register first."
            );

            return;
        }


        // Check login details
        if (
            email === savedUser.email &&  password === savedUser.password
        ) {

            localStorage.setItem(
                "isLoggedIn",
                "true"
            );


            localStorage.setItem(
                "loggedInUser",
                savedUser.name
            );


            alert(
                "Login successful!\n\n" +
                "Welcome, " +
                savedUser.name + "!"
            );


            window.location.href =
                "index.html";

        } else {

            alert(
                "Invalid email or password."
            );

        }

    });


function forgotPassword() {

    alert(
        "Password reset feature will be available soon."
    );

}