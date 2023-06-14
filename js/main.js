const contentBlock = document.querySelector('.result');

//pc games
const blizzardClass = document.querySelector('.blizzard');
const epicGamesClass = document.querySelector('.epic-games');
const riotGamesClass = document.querySelector('.riot-games');

const blizzardUrl = "games-pc-blizzard-entertainment";
const epicUrl = "games-pc-epic-games";
const riotUrl = "games-pc-riot-games";

//console games
const activisionGamesClass = document.querySelector('.activision');
const rockstarGamesClass = document.querySelector('.rockstar');
const ubisoftGamesClass = document.querySelector('.ubisoft');

const activisionUrl = "games-console-activision-blizzard";
const rockstarUrl = "games-console-rockstar";
const ubisoftUrl = "games-console-ubisoft";

// mobile games
const disneyGamesClass = document.querySelector('.disney');
const konamiGamesClass = document.querySelector('.konami');
const nianticGamesClass = document.querySelector('.niantic');

const disneyUrl = "games-mobile-disney-interactive";
const konamiUrl = "games-mobile-konami";
const nianticUrl = "games-mobile-niantic";

// merchandise
const funkoMerchClass = document.querySelector('.funko');
const razerMerchClass = document.querySelector('.razer');
const marvelMerchClass = document.querySelector('.marvel');

const funkoUrl = "games-merchandise-funko";
const razerUrl = "games-merchandise-razer";
const marvelUrl = "games-merchandise-marvel";

const baseUrl = "https://mbo-sd.nl/period3-fetch/";

const categoryEl = document.querySelector('.category');
const categoryType = categoryEl.dataset.category;

console.log(categoryType);

let card;

let fetchUrl = "";

function getPage() {
    switch (categoryType) {
        case 'blizzard':
           fetchUrl = blizzardUrl;
            break;
        case 'epic':
           fetchUrl = epicUrl;
            break;
        case 'riot':
           fetchUrl = riotUrl;
            break;
        case 'activision':
           fetchUrl = activisionUrl;
            break;
        case 'rockstar':
           fetchUrl = rockstarUrl;
            break;
        case 'ubisoft':
           fetchUrl = ubisoftUrl;
            break;
        case 'disney':
           fetchUrl = disneyUrl;
            break;
        case 'konami':
           fetchUrl = konamiUrl;
            break;
        case 'niantic':
           fetchUrl = nianticUrl;
            break;
        case 'funko':
           fetchUrl = funkoUrl;
            break;
        case 'razer':
           fetchUrl = razerUrl;
            break;
        case 'marvel':
           fetchUrl = marvelUrl;
            break;
    
        default:
            break;
    }
}

function getUrl() {
    fetch(baseUrl + fetchUrl)
        .then(myData => myData.json())
        .then(jsonData => createCards(jsonData));
}

function createCards(data) {
    for (let i = 0; i < data.length; i++) {
        const row = createRow();
        const colOne = createColumn(1);
        const colTen = createColumn(10);
        const colTwo = createColumn(1);

        if (fetchUrl == blizzardUrl || fetchUrl == epicUrl || fetchUrl == riotUrl) {
            card = createCard(data[i].img, data[i].title, data[i].description, data[i].platforms, data[i].price, data[i].releaseDate, data[i].genres);
        }
        else if (fetchUrl == activisionUrl || fetchUrl == rockstarUrl || fetchUrl == ubisoftUrl) {
            card = createCard(data[i].img, data[i].title, data[i].description, data[i].firstGame, data[i].playerCount, data[i].sales, data[i].genres);
        }
        else if (fetchUrl == disneyUrl || fetchUrl == konamiUrl || fetchUrl == nianticUrl) {
            card = createCard(data[i].img, data[i].title, data[i].description, data[i].releaseDate, data[i].activePlayers, data[i].genres, data[i].downloadFrom);
        }
        else if (fetchUrl == funkoUrl || fetchUrl == marvelUrl) {
            card = createCard(data[i].img, data[i].title, data[i].description, data[i].theme, data[i].grootte, data[i].price);
        }
        else if (fetchUrl == razerUrl ){
            card = createCard(data[i].img, data[i].title, data[i].description, data[i].stock, data[i].colors, data[i].price);
        }
        colTen.appendChild(card);
        row.append(colOne);
        row.append(colTen);
        row.append(colTwo);

        contentBlock.append(row);
    }
}

//creates a row with and extra class
function createRow(rowClass) {
    const row = document.createElement('div');
    row.classList.add('row', rowClass);
    return row;
}

//creates a column with a specific size
function createColumn(size) {
    const col = document.createElement('div');
    col.classList.add('col-sm-' + size);
    return col;
}

function createCard(imgUrl, cardTitle, cardDescription, listItemOne, listItemTwo, listItemThree, listItemFour) {
    const row = createRow("g-0");
    const colOne = createColumn(4);
    const colTwo = createColumn(5);
    const colThree = createColumn(3);

    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'mb-3');

    const cardImgElement = document.createElement('img');
    cardImgElement.classList.add('img-fluid', 'h-100', 'rounded-start')
    cardImgElement.src = imgUrl;

    const cardBodyElementPartOne = document.createElement('div');
    cardBodyElementPartOne.classList.add('card-body');

    const cardTitleElement = document.createElement('h5');
    cardTitleElement.classList.add('card-title');
    cardTitleElement.textContent = cardTitle;

    const cardTextElement = document.createElement('p');
    cardTextElement.classList.add('card-text');
    cardTextElement.textContent = cardDescription;


    const cardBodyElementPartTwo = document.createElement('div');
    cardBodyElementPartTwo.classList.add('card-body');

    const cardTitleElementTwo = document.createElement('h5');
    cardTitleElementTwo.classList.add('card-title');
    cardTitleElementTwo.textContent = "Details";

    const listGroupElement = document.createElement('ul');
    listGroupElement.classList.add('list-group');

    const listGroupItemElementOne = document.createElement('li');
    listGroupItemElementOne.classList.add('list-group-item', 'ps-0', 'border-0');
    listGroupItemElementOne.textContent = listItemOne;

    const listGroupItemElementTwo = document.createElement('li');
    listGroupItemElementTwo.classList.add('list-group-item', 'ps-0', 'border-0');
    listGroupItemElementTwo.textContent = listItemTwo;

    const listGroupItemElementThree = document.createElement('li');
    listGroupItemElementThree.classList.add('list-group-item', 'ps-0', 'border-0');
    listGroupItemElementThree.textContent = listItemThree;

    const listGroupItemElementFour = document.createElement('li');
    listGroupItemElementFour.classList.add('list-group-item', 'ps-0', 'border-0');
    listGroupItemElementFour.textContent = listItemFour;

    cardBodyElementPartOne.append(cardTitleElement);
    cardBodyElementPartOne.append(cardTextElement);

    listGroupElement.append(listGroupItemElementOne);
    listGroupElement.append(listGroupItemElementTwo);
    listGroupElement.append(listGroupItemElementThree);
    listGroupElement.append(listGroupItemElementFour);

    cardBodyElementPartTwo.append(cardTitleElementTwo);
    cardBodyElementPartTwo.append(listGroupElement);

    colOne.append(cardImgElement);
    colTwo.append(cardBodyElementPartOne);
    colThree.append(cardBodyElementPartTwo);

    row.append(colOne);
    row.append(colTwo);
    row.append(colThree);

    cardElement.append(row);

    return cardElement;
}

getPage();
getUrl();