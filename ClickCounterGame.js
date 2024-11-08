function NumberGuessGame(){

    const randomNumber = Math.floor(Math.random()*100)+1;

    let message = document.createElement("p");

    let input = document.createElement("input");

    input.type = "number";

    input.max = 100;

    input.min = 1;

    input.placeholder = "好きな数字"

    let button = document.createElement("button");

    button.textContent = "予想"

    button.addEventListener("click",function(){

        const userGuess = parseInt(input.value);

        if(userGuess === randomNumber){

            message.textContent = "正解"

        }else if(userGuess > randomNumber){

            message.textContent = "高いよ"

        }else{

            message.textContent = "小さい"
        }
    })

    message.textContent = "文字"

    gameContainer.appendChild(input);

    gameContainer.appendChild(button);

    gameContainer.appendChild(message);
    

}