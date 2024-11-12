document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section h2");

    sections.forEach(section => {
        section.addEventListener("click", () => {
            section.nextElementSibling.classList.toggle("hidden");
        });
    });
});
