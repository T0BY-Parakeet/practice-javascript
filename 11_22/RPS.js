function RPS(){
    
    const choices = ["グー","チョキ","パー"];

    let select = document.createElement("select");

    choices.forEach(choice => {
        
        let option = document.createElement("option");

        option.value = choice;

        option.textContent = choice;

        option.id = choice

        select.appendChild(option);

    });

    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")

    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton);



    let image = document.createElement("img");

    image.alt = "Choice";

    image.style.width = "200px";

    image.style.height = "200px";


    let enemyimage = document.createElement("img");

    enemyimage.alt = "Choice";

    enemyimage.style.width = "200px";

    enemyimage.style.height = "200px";

    choiceButton.addEventListener("click",function(){

        switch(select.value){

            case "グー":
    
                image.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png"
    
                break;
    
            case "チョキ":
    
                image.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s800/janken_choki.png"
    
                break;
    
            case "パー":
    
                image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png"
    
                break;
    
            default:
    
                break;

        }

        let enemyHand = choices[Math.floor(Math.random() * choices.length)];

        switch(enemyHand){

            case "グー":
    
                enemyimage.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png"
    
                break;
    
            case "チョキ":
    
                enemyimage.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSYYvy3_ZU5FYb8Jug1Gssh483SEIn8hSwWO33rp-7j9m5AFsn9Fyis9oT1DKvykpCEMV6bJGMAaTtABep-1qqr9ZPtiI_aQQsJVWNL6H_i-b6I3O_1-dgwmavPoEI9HHMsuHHPQCHj90/s800/janken_choki.png"
    
                break;
    
            case "パー":
    
                enemyimage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQhsfUvWhhVJej7FEqYsQbe0EwLCOHYxKU4KnrF026nnfJkiM3yQO2NFmnnX0nD4P2IdCmg8qFQpZMW8vtbs-K7sLpoCqXwO0fkTT7UL5VkM-E2MOUNXpikYfspDKaxidAehqcuQoIrcM/s800/janken_pa.png"
    
                break;
    
            default:
    
                break;
        }

    })

    gameContainer.appendChild(image);

    gameContainer.appendChild(enemyimage);
    
}

    // let select = document.createElement("select");

    // let option = document.createElement("option");

    // const gu = "gu";

    // option.textContent = "gu";

    // select.appendChild(option);

    // const tyoki = "tyoki";

    // option.textContent = "tyoki";

    // select.appendChild(option);

    // const pa = "pa";

    // option.textContent = "pa";

    // select.appendChild(option);

    // gameContainer.appendChild(select);