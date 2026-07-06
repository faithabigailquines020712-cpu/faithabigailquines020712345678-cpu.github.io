
/* =========================================
   MUSIC CONTROL
========================================= */

const bgMusic = document.getElementById("bgMusic");
const startButton = document.getElementById("startButton");
const playPause = document.getElementById("playPause");

// Start music button (hero)

if (startButton) {

    startButton.addEventListener("click", () => {

        bgMusic.play();

        startButton.innerText = "♪ Playing...";

        playPause.innerText = "⏸";

    });

}

// Floating player button

if (playPause) {

    playPause.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();

            playPause.innerText = "⏸";

        } else {

            bgMusic.pause();

            playPause.innerText = "▶";

        }

    });

}

/* =========================================
   ENVELOPE OPEN
========================================= */

const envelope = document.getElementById("envelope");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}

/* =========================================
   FLOATING PETALS
========================================= */

const petals = document.getElementById("petals");

function createPetal() {

    if (!petals) return;

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    petals.appendChild(petal);

    setTimeout(() => petal.remove(), 11000);

}

setInterval(createPetal, 400);

/* =========================================
   SCROLL ANIMATION
========================================= */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, { threshold: 0.15 });

sections.forEach((section) => {

    section.classList.add("hidden");

    observer.observe(section);

});

/* =========================================
   BOUQUET
========================================= */

const bouquetWrapper = document.getElementById("bouquetWrapper");
const bouquetImage = document.getElementById("bouquetImage");
const bouquetMessage = document.querySelector(".bouquet-message");

if (bouquetWrapper) {

    bouquetWrapper.addEventListener("click", () => {

        const cover = bouquetWrapper.querySelector(".bouquet-cover");

        if (cover) cover.style.display = "none";

        if (bouquetImage) bouquetImage.style.display = "block";

        if (bouquetMessage) bouquetMessage.style.display = "block";

    });

}

/* =========================================
   GIFTS
========================================= */

function openGift(boxId, imageId) {

    const box = document.getElementById(boxId);
    const image = document.getElementById(imageId);

    if (!box || !image) return;

    const message = image.nextElementSibling;

    box.addEventListener("click", () => {

        const lid = box.querySelector(".gift-lid");

        if (lid) {

            lid.style.transform = "translateY(-70px) rotate(-10deg)";

        }

        setTimeout(() => {

            box.style.display = "none";

            image.style.display = "block";

            if (message) message.style.display = "block";

        }, 500);

    });

}

openGift("gift1", "snacksImage");
openGift("gift2", "fairyImage");
openGift("gift3", "perfumeImage");
openGift("gift4", "earphonesImage");
