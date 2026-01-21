/* =========================
   NAVBAR TOGGLE
========================= */
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    if (nav) nav.classList.toggle("show");
}

/* =========================
   IMAGE SLIDER
========================= */
let index = 0;
const slides = document.querySelector(".slides");

if (slides) {
    const totalSlides = slides.children.length;

    function moveSlide(step) {
        index += step;

        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => moveSlide(1), 3000);
    window.moveSlide = moveSlide;
}

/* =========================
   LOCATION DETECTION
========================= */
const locationBox = document.getElementById("location");

if (locationBox && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;

            const res = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
            );
            const data = await res.json();

            const city =
                data.address.city ||
                data.address.town ||
                data.address.village ||
                "Your City";

            locationBox.innerText = "📍 " + city;
        } catch {
            locationBox.innerText = "📍 Location found";
        }
    });
} else if (locationBox) {
    locationBox.innerText = "📍 Location off";
}

/* =========================
   PAGE LOADER
========================= */
window.onload = function () {
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");

        if (loader && content) {
            loader.style.display = "none";
            content.style.display = "block";
        }
    }, 1500);
};

/* =========================
   SEARCH (TEMP)
========================= */
function showLoading() {
    alert("Searching...");
}

/* =========================
   LOGIN / LOGOUT BUTTON
========================= */
const authBtn = document.getElementById("authBtn");
const loggedIn = localStorage.getItem("loggedIn");

if (authBtn && loggedIn) {
    authBtn.innerText = "Logout";
    authBtn.onclick = () => {
        localStorage.removeItem("loggedIn");
        location.reload();
    };
}
