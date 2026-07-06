/* =========================================
   MUSIC
========================================= */

const bgMusic = document.getElementById("bgMusic");
const startButton = document.getElementById("startButton");
const playPause = document.getElementById("playPause");

if (startButton) {

    startButton.addEventListener("click", () => {

    });

}

    bgMusic.play();

    startButton.innerHTML = "♪ Now Playing";

    playPause.innerHTML = "⏸";

});

if (playPause) {

    playPause.addEventListener("click", () => {

        if(bgMusic.paused){

            bgMusic.play();

            playPause.innerHTML="⏸";

        }

        else{

            bgMusic.pause();

            playPause.innerHTML="▶";

        }

    });

}


/* =========================================
   ENVELOPE
========================================= */

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.classList.toggle("open");

    });

}

/* =========================================
   FLOATING PETALS
========================================= */

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration =
        (6 + Math.random()*5) + "s";

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,350);


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll("section").forEach((section)=>{

    section.classList.add("hidden");

    observer.observe(section);

});


/* =========================================
   BOUQUET
========================================= */

const bouquetWrapper = document.getElementById("bouquetWrapper");
const bouquetImage = document.getElementById("bouquetImage");
const bouquetMessage = document.querySelector(".bouquet-message");

if(bouquetWrapper){

    bouquetWrapper.addEventListener("click",()=>{

        const cover =
        bouquetWrapper.querySelector(".bouquet-cover");

        cover.style.display="none";

        bouquetImage.style.display="block";

        bouquetMessage.style.display="block";

    });

}


/* =========================================
   GIFTS
========================================= */

function openGift(boxId,imageId){

    const box=document.getElementById(boxId);

    const image=document.getElementById(imageId);

    const message=image.nextElementSibling;

    if(!box) return;

    box.addEventListener("click",()=>{

        const lid=box.querySelector(".gift-lid");

        lid.style.transform=
        "translateY(-70px) rotate(-8deg)";

        setTimeout(()=>{

            box.style.display="none";

            image.style.display="block";

            message.style.display="block";

        },500);

    });

}

openGift("gift1","snacksImage");

openGift("gift2","fairyImage");

openGift("gift3","perfumeImage");

openGift("gift4","earphonesImage");
