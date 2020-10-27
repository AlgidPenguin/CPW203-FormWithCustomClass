var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addProduct;
};
function clearAllErrors() {
    var errorList = document.getElementById("validation-errors");
    errorList.innerText = "";
}
function addProduct() {
    clearAllErrors();
    if (allValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
    else {
        displayRatings();
    }
}
function displayRatings() {
    var ratingsElements = document.querySelectorAll(".rating-custom");
    for (var i = 0; i < ratingsElements.length; i++) {
        var currentElement = ratingsElements[i];
        currentElement.onclick = goToRatingsPage;
    }
}
function goToRatingsPage() {
    window.open("https://www.esrb.org/", "_blank");
}
function getVideoGame() {
    var game = new VideoGame();
    var titleInput = document.getElementById("title");
    game.title = titleInput.value;
    var priceInput = document.getElementById("price");
    game.price = parseFloat(priceInput.value);
    var ratingInput = document.getElementById("rating");
    game.rating = ratingInput.value;
    var digitalOnly = document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    console.log(game);
    return game;
}
function displayGame(myGame) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;
    var gameInfo = document.createElement("p");
    var digitalDisplay = "";
    if (myGame.isDigitalOnly) {
        digitalDisplay = "This game is digital only.";
    }
    else {
        digitalDisplay = "You can buy a physical copy in stores.";
    }
    gameInfo.innerText = myGame.title + " has a rating of " + myGame.rating + ". " +
        ("It costs $" + myGame.price.toFixed(2) + ". " + digitalDisplay);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getInputById(id) {
    return document.getElementById(id);
}
function allValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required.");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required; must be a number.");
    }
    var rating = document.getElementById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorWithCustomClass("Please choose a rating.", "rating-custom");
    }
    return isValid;
}
function addErrorMessage(errorMessage) {
    var validErrors = document.getElementById("validation-errors");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    validErrors.appendChild(errorItem);
}
function addErrorWithCustomClass(errorMessage, cssClass) {
    var validErrors = document.getElementById("validation-errors");
    var errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errorMessage;
    validErrors.appendChild(errorItem);
}
