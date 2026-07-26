function trackApplication() {

    const enteredId =
        document.getElementById("applicationId")
        .value
        .trim()
        .toUpperCase();

    const savedId =
        localStorage.getItem("applicationId");

    const result =
        document.getElementById("applicationResult");

    const noResult =
        document.getElementById("noResult");


    if (
        enteredId !== "" &&
        enteredId === savedId
    ) {

        const service =
            localStorage.getItem("applicationService") || "—";

        const name =
            localStorage.getItem("applicationName") || "—";

        document.getElementById("resultId").textContent =
            savedId;
            document.getElementById("resultName").textContent =
            name;

        document.getElementById("resultDate").textContent =
            new Date().toLocaleDateString("en-IN");


        result.style.display = "block";
        noResult.style.display = "none";

    } else {

        result.style.display = "none";
        noResult.style.display = "block";

    }
}