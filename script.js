const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});