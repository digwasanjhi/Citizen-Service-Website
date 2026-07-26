function filterServices() {

    let input = document
        .getElementById("serviceSearch")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".full-service-card");

    cards.forEach(function(card) {

        let name = card.getAttribute("data-name");

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


function filterCategory(category, button) {

    let cards = document.querySelectorAll(".full-service-card");
    let buttons = document.querySelectorAll(".category");

    buttons.forEach(function(btn) {
        btn.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(function(card) {

        let cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}


function applyService(serviceName) {

    window.location.href =
        "apply.html?service=" +
        encodeURIComponent(serviceName);

}