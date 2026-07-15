
let currentImage = 0;

const cards = document.querySelectorAll(".parc-card");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close-btn");

const title = document.getElementById("modal-title");
const locationEl = document.getElementById("location");
const image = document.getElementById("modal-image");
const ages = document.getElementById("modal-ages");
const equipment = document.getElementById("modal-equipment");

const shadeAM = document.getElementById("modal-shade-am");
const shadePM = document.getElementById("modal-shade-pm");
const condition = document.getElementById("modal-condition");
const cleanliness = document.getElementById("modal-cleanliness");

const note = document.getElementById("modal-note");
const favorite = document.getElementById("modal-favorite");


const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const filterLabels = {
  tots: "Tots els parcs",
  "ombra-am": "Parcs amb ombra al matí",
  "ombra-pm": "Parcs amb ombra a la tarda",
  petits: "Parcs pels més petits",
  vallats: "Parcs vallats",
  amplis: "Parcs amplis"
};

function updateImage(park) {
    image.src = park.images[currentImage];
}

nextBtn.addEventListener("click", () => {

    const park = currentPark;

    currentImage++;

    if (currentImage >= park.images.length) {
        currentImage = 0;
    }

    updateImage(park);
});

prevBtn.addEventListener("click", () => {
    const park = currentPark;

    currentImage--;

    if (currentImage < 0) {
        currentImage = park.images.length - 1;
    }

    updateImage(park);
});

// LOOP through ALL cards
cards.forEach(card => {

    card.addEventListener("click", () => {

        // 1. read which park was clicked
        const id = card.dataset.id;

        // 2. get its data
        const park = parks[id];

        currentPark = park;
        currentImage = 0;

        // 3. fill modal
        title.textContent = park.title;
        currentImage = 0;
        image.src = park.images[currentImage];


        locationEl.textContent = "On és?";
        locationEl.href = park.location;
        locationEl.target = "_blank";
        locationEl.rel = "noopener noreferrer";

        ages.innerHTML = `<strong>Ideal per a infants de:</strong><br>${park.ageLabel}`;


        equipment.innerHTML = "";

            park.equipment.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            equipment.appendChild(li);
            });

        shadeAM.innerHTML = createDots(park.shadeAM);
        shadePM.innerHTML = createDots(park.shadePM);
        condition.innerHTML = createDots(park.condition);
        cleanliness.innerHTML = createDots(park.cleanliness);

        note.textContent = park.note;
        favorite.textContent = park.favorite;

        modal.classList.remove("hidden");
        history.pushState({ modalOpen: true }, "");
        });

});

window.addEventListener("popstate", () => {
    if (!modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
    }
});

// close modal
closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});

document.addEventListener("keydown",(event) => { 
    if (event.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
    }
});







const parks = {
 "horta-vermella": {
    title: "Parc de l'Horta Vermella",

    petits: true,
    vallats: true,
    amplis: true,

    location: "https://maps.app.goo.gl/17wU1b2Y91HoDkSk9",

    images: ["img/parc1.jpg",
        "img/parc1-1.jpg",   
        "img/parc1-2.jpg",
        "img/parc1-3.jpg"],

    ageMin:2,
    ageMax:12,
    ageLabel: "2 a 12 anys",

    equipment: [
        "Gronxador",
        "Gronxador per a petits",
        "Tobogans de diferents mides",
        "Estructura multijoc",
        "Sorrera",
        "Caseta de fusta",
        "Estructura de cordes",
        "Balencins"
    ],

    shadeAM: 4,
    shadePM: 4,

    condition: 4,

    cleanliness: 4,

    note: "A l'estiu hi ha abelles a la zona de la sorrera",

    favorite: "Hi ha molta ombra i permet diferents tipus de joc."
},

"sant-jaume": {
    title: "Parc de Sant Jaume (Santa Anna)",

    petits: true,
    vallats: true,
    amplis: true,

    location: "https://maps.app.goo.gl/We4ScPPrZcHfsQ2N6",

    images: ["img/parc2.jpg",
        "img/parc2-1.jpg"],

    ageMin: 2,
    ageMax: 8,
    ageLabel: "2 a 8 anys",

    equipment: [
        "Gronxador",
        "Gronxador per a petits",
        "Tobogans",
        "Sorrera",
        "Caseta de fusta",
        "Balencí",
        "Estructura multijoc (vaixell pirata)",
    ],

    shadeAM: 2,
    shadePM: 2,

    condition: 4,

    cleanliness: 4,

    note: "Hi ha molt poca ombra, millor evitar les hores de sol intens.",

    favorite: "Està situat a una zona molt tranquila i agradable amb poc trànsit de cotxes."
},

"rambla-del-mèder": {
    title: "Parc de la Rambla del Mèder",

    petits: true,
    vallats: false,
    amplis: false,

    location: "https://maps.app.goo.gl/H9253fuhS2zjnB3H9",

    images: ["img/parc3.jpg"],

    ageMin: 0,
    ageMax: 3,
    ageLabel: "0 a 3 anys",

    equipment: [
        "Gronxador per a petits",
        "Tobogan petit",
        "Balencí"
    ],

    shadeAM: 1,
    shadePM: 1,

    condition: 4,

    cleanliness: 4,

    note: "Hi ha molt poca ombra.",

    favorite: "És un parc de pas, ideal per aturar-se un moment amb els més petits i que puguin jugar una estona."
},

"sínia": {
    title: "Parc de la Sínia", 

    petits: true,
    vallats: false,
    amplis: true,
    
    location:"https://maps.app.goo.gl/ndp8RWxVQP1GArCH8",

    images: ["img/parc4.jpg",
        "img/parc4-1.jpg"],

    ageMin: 0,
    ageMax: 8,
    ageLabel: "0 a 3 anys i de 4 a 8 anys",

    equipment: [
        "Gronxador",
        "Gronxador per a petits",
        "Tobogans de diferents mides",
        "Estructura multijoc",
        "Caseta",
        "Estructura de cordes",
        "Balencí"
    ],
    
    shadeAM: 2,
    shadePM: 2,
    condition: 4,

    cleanliness: 2,

    note: "No hi ha valla i està aprop d'un carrer amb molt trànsit de cotxes.",

    favorite: "Hi ha dos espais diferenciats, un per a petits i un per a grans, amb diferents tipus de joc."
},

"divina-pastora": {
    title: "Parc de la Divina Pastora",  

    petits: false,
    vallats: true,
    amplis: true,

    location: "https://maps.app.goo.gl/XicUXq33qdiQfVyx6",

    images: ["img/parc5.jpg",
             "img/parc5-1.jpg"
    ],

    ageMin: 4,
    ageMax: 8,
    ageLabel: "4 a 8 anys",

    equipment: [
        "Estructura multijoc",
        "Tobogan",
        "Estructura de cordes",
        "Balencí",
        "Sorrera"
    ],
    
    shadeAM: 5,
    shadePM: 2,
    condition: 4,

    cleanliness: 4,

    note: "La zona de la sorrera està bastant deixada. És una zona amb molt transit de cotxes.",

    favorite: "Al matí hi ha molta ombra i és molt agradable, sobretot a l'estiu."
},

"somoto": {
    title: "Parc del Somoto",

    petits: false,
    vallats: false,
    amplis: true,

    location: "https://maps.app.goo.gl/ff79wAnu3yDMKFATA",

    images: ["img/parc6.jpg",
             "img/parc6-1.jpg",
             "img/parc6-2.jpg"
    ], 

    ageMin: 4,
    ageMax: 12,
    ageLabel: "4 a 12 anys",

    equipment: [
        "Gronxadors",
        "Estructura multijoc",
        "Tobogan",
        "Taula de ping-pong",
        "Sortidor d'aigua",
    ],

    shadeAM: 1,
    shadePM: 2,
    condition: 4,
    cleanliness: 2,

    note: "No hi ha gairebé ombra a la zona de jocs, millor evitar les hores de sol intens.",
    favorite: "El parc està situat en una zona molt gran i sense cotxes. Permet diferents tipus de joc i activitats."

    },

    "atlàntida": {
    title: "Parc Musical de l'Atlàntida",

    petits: true,
    vallats: false,
    amplis: false,

    location: "https://maps.app.goo.gl/XJ2s8HmWdFWXmvzT7",

    images: ["img/parc7.jpg",
             "img/parc7-1.jpg",
    ],

    ageMin: 0,
    ageMax: 99,
    ageLabel: "totes les edats",
    equipment: [
        "Diferents xilòfons",
        "Tambors",
    ],

    shadeAM: 0,
    shadePM: 1,
    condition: 2,
    cleanliness: 5,

    note: "És una pena, els instruments han estat mal tractats i la majoria no es poden tocar bé.",
    favorite: "Tothom pot passar una bona estona tocant els instruments i experimentant amb els diferents sons.",

     },

    "pep-ventura": {
    title: "Parc del Passeig Pep Ventura",

    petits: true,
    vallats: false,
    amplis: true,

    location: "https://maps.app.goo.gl/SZusFqx3xKF1RnM76",

    images: ["img/parc8.jpg",
             "img/parc8-1.jpg",
             "img/parc8-2.jpg",
             "img/parc8-3.jpg",
             "img/parc8-4.jpg",
             "img/parc8-5.jpg",
             "img/parc8-6.jpg"
    ],

    ageMin: 2,
    ageMax: 12,
    ageLabel: "2 a 12 anys",

    equipment: [
        "Tirolina",
        "Gronxadors",
        "Gronxadors per a petits",
        "Tobogan",
        "Estructura multijoc",
        "Balencins",
        "Estructures de cordes",
    ],

    shadeAM: 4,
    shadePM: 2,
    condition: 4,
    cleanliness: 3,

    note: "El parc és just al costat del riu, en alguns trams hi ha valla però no a tots. Cal anar amb compte amb els més petits.",
    favorite: "El parc és enorme i permet diferents tipus de joc. Tothom trobarà alguna cosa que li agradi."

    }

};

function createDots(value) {
    const max = 5;
    let html = "";

    for(let i = 1; i <= max; i++) {
        if (i <= value) {
            html += "●";
        } else {
            html += "○";
        }
    }

    return html;
}

function showAll() {
  cards.forEach(card => {
    card.style.display = "block";
  });
}

let activeFilter = "tots";

function applyFilter() {

    let visibleCount = 0;
    const visibleCards = [];

    cards.forEach(card => {

        const id = card.dataset.id;
        const park = parks[id];

        let show = true;

        if (activeFilter === "tots") {
            show = true;
        }
        else if (activeFilter === "ombra-am") {
            show = park.shadeAM >= 4;
        }
        else if (activeFilter === "ombra-pm") {
            show = park.shadePM >= 4;
        }
        else if (activeFilter === "petits") {
            show = park.petits;
        }
        else if (activeFilter === "vallats") {
            show = park.vallats;
        }
        else if (activeFilter === "amplis") {
            show = park.amplis;
        }

        if (show) {

            visibleCount++;

            visibleCards.push(card);

            card.style.display = "block";

            card.classList.remove("animate");
            void card.offsetWidth;
            card.classList.add("animate");

        } else {

            card.style.display = "none";

        }

    });

    visibleCards.sort((cardA, cardB) => {

    const parkA = parks[cardA.dataset.id];
    const parkB = parks[cardB.dataset.id];

    if (parkA.ageMin !== parkB.ageMin) {
        return parkA.ageMin - parkB.ageMin;
    }

    return parkA.ageMax - parkB.ageMax;

});

    

    // Sort only for the "petits" filter
    if (activeFilter === "petits") {

        const container = document.getElementById("parcs");

        const visibleCards = [...cards].filter(card =>
            card.style.display !== "none"
        );

        visibleCards.sort((a, b) => {

            const parkA = parks[a.dataset.id];
            const parkB = parks[b.dataset.id];

            if (parkA.ageMin !== parkB.ageMin) {
                return parkA.ageMin - parkB.ageMin;
            }

            return parkA.ageMax - parkB.ageMax;

        });


        visibleCards.forEach(card => {
        container.appendChild(card);
        });

    }

    updateParkCount(visibleCount);

}


function updateParkCount(count) {

    document.getElementById("filter-name").textContent =
        filterLabels[activeFilter];

    const resultText = count === 1 ? "resultat" : "resultats";

    document.getElementById("count").textContent =
        `${count} ${resultText}`;

    const counter = document.getElementById("park-count");

    counter.classList.remove("pop");
    void counter.offsetWidth;
    counter.classList.add("pop");
}



function setActiveButton(button) {
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

document.querySelectorAll("[data-filter]").forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.filter;
    applyFilter();
    setActiveButton(btn);
  });
});

const flowers = document.querySelectorAll(".flower");

flowers.forEach(flower => {

    flower.draggable = false;

    flower.addEventListener("dragstart", e => e.preventDefault());

    flower.addEventListener("pointerdown", (e) => {

        e.preventDefault();

        flower.setPointerCapture(e.pointerId);

        const startX = e.clientX - flower.offsetLeft;
        const startY = e.clientY - flower.offsetTop;

        function move(e) {
            flower.style.left = `${e.clientX - startX}px`;
            flower.style.top = `${e.clientY - startY}px`;
        }

        function up(e) {
            flower.releasePointerCapture(e.pointerId);
            flower.removeEventListener("pointermove", move);
            flower.removeEventListener("pointerup", up);
        }

        flower.addEventListener("pointermove", move);
        flower.addEventListener("pointerup", up);

    });

});

