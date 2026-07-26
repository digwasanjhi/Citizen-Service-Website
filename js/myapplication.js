const applicationsList =
    document.getElementById("applicationsList");

const emptyApplications =
    document.getElementById("emptyApplications");


// Get all saved applications
const applications =
    JSON.parse(
        localStorage.getItem("applications")
    ) || [];


// If applications exist
if (applications.length > 0) {

    applicationsList.style.display = "flex";
    emptyApplications.style.display = "none";


    applications.forEach(function(application) {

        const card =
            document.createElement("div");

        card.className = "application-card";


        card.innerHTML = `
            <div class="application-card-top">

                <div>
                    <div class="application-id">APPLICATION ID
                    </div>

                    <h2>
                        ${application.service}
                    </h2>
                </div>

                <div class="status-badge">
                    ${application.status}
                </div>

            </div>


            <div class="application-info">

                <div>
                    <span>Application ID</span>
                    <strong>
                        ${application.id}
                    </strong>
                </div>

                <div>
                    <span>Applicant Name</span>
                    <strong>
                        ${application.name}
                    </strong>
                </div>

                <div>
                    <span>Service</span>
                    <strong>
                        ${application.service}
                    </strong>
                </div>

                <div>
                    <span>Submitted On</span>
                    <strong>
                        ${application.date}
                    </strong>
                </div>

            </div>


            <button
                class="track-btn"
                onclick="trackMyApplication('${application.id}')"
            >
                Track Status →
            </button>
        `;


        applicationsList.appendChild(card);

    });


} else {

    applicationsList.style.display = "none";

    emptyApplications.style.display = "block";

}



// Track selected application
function trackMyApplication(applicationId) {

    window.location.href =
        "track.html";


}