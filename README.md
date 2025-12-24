# Ex.07 Design of Interactive Image Gallery
## Date:24/12/2025

## AIM:
To design a web application for an inteactive image gallery for a minimum five images with next and previous buttons.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM:

```

gall.html

<html>
<head>
    <meta charset="UTF-8">
    <title>Universe Gallery</title>
    <link rel="stylesheet" href="gall.css">
</head>
<body>
    <div class="box">
        <h1 class="heading">Beauty of Universe</h1>
        <p class="small-text">Galaxy · Stars · Planets · Black hole . Dark matter</p>

        <div class="image-area">
            <img src="galx.png" id="photo" alt="universe picture">

            <p class="title" id="title-text">Spiral Story</p>
            <p class="info" id="info-text">
                Billions of tiny stars spinning together softly.
            </p>
        </div>

        <div class="buttons">
            <button onclick="prev()">Previous</button>
            <button onclick="next()">Next</button>
        </div>

        <p class="count" id="count-text">1 / 6</p>
    </div>

    <footer class="footer">
        &copy; LOGA SRI M · 25012855
    </footer>

    <script src="gall.js"></script>
</body>
</html>

```

```

gall.css

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: Arial, sans-serif;
    background: url("bg.png") no-repeat center center fixed;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    color: white;
}
.box {
    width: 90%;
    max-width: 600px;
    margin-left:460px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 15px;
    margin-top:68px;
}
.heading {
    font-size: 32px;
    margin-bottom: 4px;
    margin-top:5px;
}
.small-text {
    font-size: 12px;
    margin-bottom: 15px;
    color: #cdd4ff;
}
.image-area img {
    margin-top:20px;
    width: 100%;
    max-width:400px;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid #ffd4ec;
}
.title {
    margin-top: 10px;
    font-size: 22px;
    font-weight: bold;
}
.info {
    margin-top: 4px;
    font-size: 14px;
}
.buttons {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    gap: 15px;
}
.buttons button {
    width: 120px;
    padding: 8px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    background-color: #ffd4ec;
    color: #2b1022;
}
.count {
    margin-top: 10px;
    font-size: 13px;
    color: #cdd4ff;
}
.footer {
    margin-left:75px;
    font-size: 13px;
    padding: 8px;
    color: #e5e7ff;
}
```

```

gall.js

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

```



## OUTPUT:

![alt text](<Screenshot (59).png>)

![alt text](<Screenshot (60).png>)

![alt text](<Screenshot (61).png>)

![alt text](<Screenshot (62).png>)

![alt text](<Screenshot (63).png>)


## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
