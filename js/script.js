function loginAlert() {
     window.location.href="login.html";
}

function registerAlert() {
    window.location.href="register.html";
    
            
        }


function performService() {

    const searchInput=document.getElementById("searchServiceInput");
    const searchTerm=searchInput.value.trim().toLowerCase();
    if(searchTerm==="")
    {
        alert("Please enter the service");
        return;
    }
    window.location.href="services.html?services="+encodeURIComponent(searchTerm);
}


function applyService(serviceName) {

    window.location.href="apply.html?services="+encodeURIComponent(serviceName);
}


function viewServices() {

    window.location.href="services.html";

}


function showAnnouncement() {

    alert(
        "More citizen services and announcements will be available here."
    );

}
function logoutUser()
{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out successfully");
    window.location.href="index.html";
}
const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");
const userName = document.getElementById("userName");

const isLoggedIn = localStorage.getItem("isLoggedIn");
const loggedInUser = localStorage.getItem("loggedInUser");

if (isLoggedIn === "true") {

    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";

    if (userName && loggedInUser) {
        userName.textContent = "Welcome, " + loggedInUser;
    }

} else {

    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
}
