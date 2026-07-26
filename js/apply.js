const params = new URLSearchParams(window.location.search);

const selectedService = params.get("service");

const serviceField = document.getElementById("service");


// Selected service automatically fill
if (selectedService) {
    serviceField.value = selectedService;
}


// Submit application
document
    .getElementById("applicationForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const service = serviceField.value;

        const name =
            document.getElementById("name").value.trim();

        const mobile =
            document.getElementById("mobile").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const dob =document.getElementById("dob").value;

        const address =
            document.getElementById("address").value.trim();


        // Get previous applications
        let applications =
            JSON.parse(
                localStorage.getItem("applications")
            ) || [];


        // Check if same service already submitted
        const alreadyApplied =
            applications.find(function(application) {

                return application.service === service;

            });


        if (alreadyApplied) {

            const openExisting =
                confirm(
                    "You have already submitted an application for " +
                    service +
                    ".\n\n" +
                    "Application ID: " +
                    alreadyApplied.id +
                    "\n\n" +
                    "Do you want to view your applications?"
                );


            if (openExisting) {
                window.location.href =
                    "myapplication.html";
            }

            return;
        }


        // Generate Application ID
        const applicationId =
            "APP" +
            Math.floor(
                100000 +
                Math.random() * 900000
            );


        // Create application object
        const newApplication = {

            id: applicationId,

            service: service,

            name: name,

            mobile: mobile,

            email: email,

            dob: dob,

            address: address,

            status: "Submitted",

            date:
                new Date().toLocaleDateString("en-IN")

        };


        // Add new application
        applications.push(newApplication);


        // Save all applications
        localStorage.setItem(
            "applications",
            JSON.stringify(applications)
        );


        // Keep latest application data
        // for Track page compatibility
        localStorage.setItem(
            "applicationId",
            applicationId
        );

        localStorage.setItem(
            "applicationService",
            service
        );

        localStorage.setItem(
            "applicationName",
            name
        );

        localStorage.setItem(
            "applicationStatus",
            "Submitted"
        );


        alert(
            "Application submitted successfully!\n\n" +
            "Your Application ID: " +
            applicationId
        );


        // Go to My Applications
        window.location.href =
            "myapplication.html";

    });