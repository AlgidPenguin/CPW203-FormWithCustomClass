class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// test code
/*let myGame = new VideoGame();
myGame.title = "Mario";
myGame.rating = "E";
myGame.isDigitalOnly = true;*/

window.onload = function() {
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addProduct;
}

/**
 * Clears errors in validation error list at the top.
 */
function clearAllErrors() {
    let errorList = document.getElementById("validation-errors");
    errorList.innerText = "";
}

function addProduct() {
    clearAllErrors();

    if(allValid()) {
        let game = getVideoGame();
        displayGame(game);
    }

    else{
        displayRatings();
    }
}

function displayRatings() {
    let ratingsElements = document.querySelectorAll(".rating-custom");
    for(let i = 0; i < ratingsElements.length; i++) {
        let currentElement = <HTMLElement>ratingsElements[i];
        currentElement.onclick = goToRatingsPage;
        //currentElement.innerHTML += " <a target='_blank' href='https://www.esrb.org/'>Click here for more info.</a>";
    }
}

function goToRatingsPage() {
    window.open("https://www.esrb.org/", "_blank");
}

/**
 * Gets all game data from the form
 * and returns it in a VideoGame object
 */
function getVideoGame():VideoGame {
    let game = new VideoGame();

    let titleInput = <HTMLInputElement>document.getElementById("title");
    game.title = titleInput.value;

    let priceInput= <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(priceInput.value);

    let ratingInput = <HTMLSelectElement>document.getElementById("rating");
    game.rating = ratingInput.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    
    /*if(digitalOnly.checked) {
        game.isDigitalOnly = true;
    }

    else{
        game.isDigitalOnly = false;
    }*/
    console.log(game);
    return game;
}

function displayGame(myGame:VideoGame):void {
    let displayDiv = document.getElementById("display");

    // Create heading with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = myGame.title;

    // Create paragraph with game details
    let gameInfo = document.createElement("p");
    let digitalDisplay = "";
    if(myGame.isDigitalOnly){
        digitalDisplay = "This game is digital only.";
    }
    else{
        digitalDisplay = "You can buy a physical copy in stores."
    }

    /*gameInfo.innerText = myGame.title + " has a rating of " 
                    + myGame.rating + ". It costs " + myGame.price + ". It is " + notDigitalDisplay
                    + " digital only.";*/

    gameInfo.innerText = `${myGame.title} has a rating of ${myGame.rating}. `+
                            `It costs $${myGame.price.toFixed(2)}. ${digitalDisplay}`;

    // Add heading in the <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> game info
    displayDiv.appendChild(gameInfo);
}

function getInputById(id:string):HTMLInputElement {
    return <HTMLInputElement>document.getElementById(id);
}

function allValid() {
    let isValid = true;

    let title = getInputById("title").value;
    if(title == "") {
        isValid = false;
        addErrorMessage("Title is required.");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required; must be a number.");
    }

    let rating = (<HTMLOptionElement>document.getElementById("rating")).value;
    if(rating == "") {
        isValid = false;
        addErrorWithCustomClass("Please choose a rating.", "rating-custom");
    }

    return isValid;
}

function addErrorMessage(errorMessage:string) {
    let validErrors = document.getElementById("validation-errors");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;

    validErrors.appendChild(errorItem);
}

function addErrorWithCustomClass(errorMessage:string, cssClass:string) {
    let validErrors = document.getElementById("validation-errors");
    let errorItem = document.createElement("li");
    errorItem.classList.add(cssClass);
    errorItem.innerText = errorMessage;

    validErrors.appendChild(errorItem);
}
