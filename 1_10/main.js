const gameSelector = document.getElementById('game-Selestor');

const gameContainer = document.getElementById('game-container');

gameContainer.textContent="ゲームを選ぶとここに表示されます"

gameSelector.addEventListener("change",function(){

    gameContainer.innerHTML="";

    switch(gameSelector.value){

        case "none":

            gameContainer.textContent="ゲームを選ぶとここに表示されます"

            break;

        case "click-counter":

            ClickCounterGame();

            break;

            case "number-guess":

            NumberGuessGame();

            break;

            
            case "RPS":

            RPS()

            break;

    }

})



