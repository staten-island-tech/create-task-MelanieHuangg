import {items} from "./items.js"

const DOMSelectors = {
    rodents: document.getElementById("rodents-btn"),
    insects: document.getElementById("insects-btn"),
    reptiles: document.getElementById("reptiles-btn"),
    birds: document.getElementById("birds-btn"),
    amphibians: document.getElementById("amphibians-btn"),
    container: document.getElementById("container")
};

const createCards = {
    create: function (items) {
        this.removeCards();
        items.forEach((item) => this.insertCard(item));
    },

    filterByCategory: function (category) {
        this.removeCards();
        items
            .filter((item) => item.category.includes(category))
            .forEach((item) => this.insertCard(item));
    },

    insertCard: function (item) {
        DOMSelectors.container.insertAdjacentHTML(
            "beforeend",
            `
            <div class="inner">
                <h2 class="cardname">${item.name}</h2>
                <p><img class="picture" src=${item.imgURL}></p>
                <h3>Favorite Food: <br> ${item.info}</h3>
            </div>
            `
        );
    },

    removeCards: function () {
        let cards = document.querySelectorAll(".inner");
        cards.forEach((card) => {
            card.remove();
        });
    },
};

createCards.create(items);

DOMSelectors.rodents.addEventListener("click", function () {
    createCards.filterByCategory("rodents");
});

DOMSelectors.insects.addEventListener("click", function () {
    createCards.filterByCategory("insects");
});

DOMSelectors.reptiles.addEventListener("click", function () {
    createCards.filterByCategory("reptiles");
});

DOMSelectors.birds.addEventListener("click", function () {
    createCards.filterByCategory("birds");
});

DOMSelectors.amphibians.addEventListener("click", function () {
    createCards.filterByCategory("amphibians");
});


// const createCards = {
//     create: function () {
//         items.forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
    
//     },

//     filterRodents: function () {
//         items
//         .filter((items) => items.category.includes("rodents"))
//         .forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
//     },

//     filterInsects: function () {
//         items
//         .filter((items) => items.category.includes("insects"))
//         .forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
//     },

//     filterReptiles: function () {
//         items
//         .filter((items) => items.category.includes("reptiles"))
//         .forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
//     },

//     filterBirds: function () {
//         items
//         .filter((items) => items.category.includes("birds"))
//         .forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
//     },

//     filterAmphibians: function () {
//         items
//         .filter((items) => items.category.includes("amphibians"))
//         .forEach((items) => {
//             DOMSelectors.container.insertAdjacentHTML(
//                 "beforeend",
//                 `
//                 <div class="inner">
//                 <h2 class="cardname">${items.name}</h2>
//                 <p><img class="picture" src=${items.imgURL}></p>
//                 <h3>Info: ${items.info}</h3>
//                 </div>
//                 `
//             );
//         });
//     },
    
//     removeCards: function () {
//         let card = document.querySelectorAll(".inner")
//         card.forEach(card => {
//             card.remove()
//         });
//     },

// };

// createCards.create(items);


// DOMSelectors.rodents.addEventListener("click", function () {
//     createCards.removeCards(items)
//     createCards.filterRodents(items)
// });

// DOMSelectors.insects.addEventListener("click", function () {
//     createCards.removeCards(items)
//     createCards.filterInsects(items)
// });

// DOMSelectors.reptiles.addEventListener("click", function () {
//     createCards.removeCards(items)
//     createCards.filterReptiles(items)
// });

// DOMSelectors.birds.addEventListener("click", function () {
//     createCards.removeCards(items)
//     createCards.filterBirds(items)
// });


// DOMSelectors.amphibians.addEventListener("click", function () {
//     createCards.removeCards(items)
//     createCards.filterAmphibians(items)
// });