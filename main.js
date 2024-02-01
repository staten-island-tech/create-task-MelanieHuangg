import "../style.css"

const DOMSelectors = {
    rodents: document.getElementById("rodents-btn"),
    insects: document.getElementById("insects-btn"),
    reptiles: document.getElementById("reptiles-btn"),
    birds: document.getElementById("birds-btn"),
    amphibians: document.getElementById("amphibians-btn"),
    container: document.getElementById("container")
};

const items = [

    {
        name: "Sugar Gliders",
        imgURL: "https://www.directparrots.co.uk/cdn/shop/files/Sugar-Glider_470x509_crop_top.png?v=1698871644",
        info: "",
        category: "rodents",
    },

    {
        name: "Wallaroos",
        imgURL: "",
        info: "",
        category: "rodents",
    },

    {
        name: "Coati",
        imgURL: "",
        info: "",
        category: "rodents",
    },

    {
        name: "Praying Mantises",
        imgURL: "",
        info: "",
        category: "insects",
    },

    {
        name: "Scorpions",
        imgURL: "",
        info: "",
        category: "insects",
    },

    {
        name: "Bearded Dragons",
        imgURL: "",
        info: "",
        category: "reptiles",
    },

    {
        name: "Burmese Pythons",
        imgURL: "",
        info: "",
        category: "reptiles",
    },

    {
        name: "Ornate Box Turtles",
        imgURL: "",
        info: "",
        category: "reptiles",
    },

    {
        name: "Cockatoos",
        imgURL: " ",
        info: " ",
        category: "birds",
    },

    {
        name: "Lories",
        imgURL: " ",
        info: " ",
        category: "birds",
    },

    {
        name: "Toucans",
        imgURL: " ",
        info: " ",
        category: "birds",
    },

    {
        name: "Fire-bellied Toads",
        imgURL: " ",
        info: " ",
        category: "amphibians",
    },

    {
        name: "Dwarf Clawed Frogs",
        imgURL: " ",
        info: " ",
        category: "amphibians",
    },

    {
        name: "Northern Leopard Frogs",
        imgURL: " ",
        info: " ",
        category: "amphibians",
    },
]


const createCards = {
    create: function () {
        items.forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    
    },

    filterRodents: function () {
        items
        .filter((items) => items.category.includes("rodents"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    },

    filterInsects: function () {
        items
        .filter((items) => items.category.includes("insects"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    },

    filterReptiles: function () {
        items
        .filter((items) => items.category.includes("reptiles"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    },

    filterBirds: function () {
        items
        .filter((items) => items.category.includes("birds"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    },

    filterAmphibians: function () {
        items
        .filter((items) => items.category.includes("amphibians"))
        .forEach((items) => {
            DOMSelectors.container.insertAdjacentHTML(
                "beforeend",
                `
                <div class="inner">
                <h2>${items.name}</h2>
                <p><img class="picture" src=${items.imgURL}></p>
                <h3>Info: ${items.info}</h3>
                </div>
                `
            );
        });
    },
    
    removeCards: function () {
        let card = document.querySelectorAll(".inner")
        card.forEach(card => {
            card.remove()
        });
    },

};

createCards.create(items);


DOMSelectors.rodents.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterRodents(items)
});

DOMSelectors.insects.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterInsects(items)
});

DOMSelectors.reptiles.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterReptiles(items)
});

DOMSelectors.birds.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterBirds(items)
});


DOMSelectors.amphibians.addEventListener("click", function () {
    createCards.removeCards(items)
    createCards.filterAmphibians(items)
});