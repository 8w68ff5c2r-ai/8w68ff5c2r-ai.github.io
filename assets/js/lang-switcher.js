// Remember a manually chosen language so the homepage never overrides it.
document.querySelectorAll(".lang-switcher a[data-lang]").forEach(function (link) {
    link.addEventListener("click", function () {
        try { localStorage.setItem("lang", link.dataset.lang); } catch (e) {}
    });
});
