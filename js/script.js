function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight current page
    const currentPage = window.location.pathname;

    document.querySelectorAll("nav a").forEach(link => {
        if (link.href.includes(currentPage)) {
            link.style.color = "orange";
            link.style.fontWeight = "bold";
        }
    });

    // Search function (safe version)
    window.searchCards = function () {
        let inputBox = document.getElementById("searchBox");
        if (!inputBox) return;

        let input = inputBox.value.toLowerCase();
        let cards = document.getElementsByClassName("research-card");

        for (let i = 0; i < cards.length; i++) {
            let text = cards[i].innerText.toLowerCase();
            cards[i].style.display = text.includes(input) ? "block" : "none";
        }
    };

    // Animation observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".research-card");
    hiddenElements.forEach(el => observer.observe(el));

});
