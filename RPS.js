function RPS(){
    
    const choices = ["グー","チョキ","パー","無敵"];

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

    let select = document.createElement("select");

    choices.forEach(choice => {
        
        let option = document.createElement("option");

        option.value = choice;

        option.textContent = choice;

        select.appendChild(option);

    });

    gameContainer.appendChild(select);

    let image = document.createElement("img");

    image.alt = "Choice";

    image.style.width = "1000px";

    image.style.height = "100px"

    image.src ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png"

    gameContainer.appendChild(image);
    
}