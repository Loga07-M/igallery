var pics = [
    {
        image: "galx.png",
        title: "Spiral Story",
        info: "Billions of tiny stars spinning together softly."
    },
    {
        image: "strs2.png",
        title: "Sparkle Family",
        info: "Many little stars shining side by side."
    },
    {
        image: "pl3.png",
        title: "Tiny Neighbours",
        info: "Colourful planets floating like marbles in the sky."
    },
    {
        image: "bl4.png",
        title: "Quiet Center",
        info: "Light and time swirl into a calm, dark heart."
    },
    {
        image: "dm6.png",
        title: "Hidden Threads",
        info: "Thin lines of matter quietly holding space together."
    }
];

var i = 0; 

var photo     = document.getElementById("photo");
var titleText = document.getElementById("title-text");
var infoText  = document.getElementById("info-text");
var countText = document.getElementById("count-text");

function show() {
    photo.src           = pics[i].image;
    titleText.innerHTML = pics[i].title;
    infoText.innerHTML  = pics[i].info;
    countText.innerHTML = (i + 1) + " / " + pics.length;
}
function next() {
    i++;
    if (i >= pics.length) {
        i = 0;
    }
    show();
}
function prev() {
    i--;
    if (i < 0) {
        i = pics.length - 1;
    }
    show();
}
show();
