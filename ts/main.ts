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

function addProduct() {
    if(allValid()) {
        let game = getVideoGame();
        displayGame(game);
    }
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
        digitalDisplay = "You can come buy a physical copy."
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




// Validate!!!*****************************************
function allValid() {
    return true;
}