document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("nav");
    const btn = document.createElement("button");
    btn.textContent = "Menu";
    btn.classList.add("mobile-menu-toggle");
    nav.insertBefore(btn, nav.firstChild);

    btn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
});
