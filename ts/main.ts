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
    //TODO: Display video game below the form
}


// Validate!!!*****************************************
function allValid() {
    return true;
}