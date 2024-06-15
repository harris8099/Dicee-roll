let heading = document.querySelector("h1");
let player_1_dice = document.querySelector(".player-1 img");
let player_2_dice = document.querySelector(".player-2 img");

function random_int(){
    return Math.floor(Math.random() * 6 + 1);
}

function roll() {
    player_1 = random_int();
    player_2 = random_int();
    player_1_dice.setAttribute("src", `images/dice${player_1}.png`)
    player_2_dice.setAttribute("src", `images/dice${player_2}.png`)
    if (player_1 > player_2){
        heading.innerText = "Player 1 Wins!!"
    }
    else if (player_1 < player_2){
        heading.innerText = "Player 2 Wins!!"
    } 
    else{
        heading.innerText = "It's a Draw"
    }
}

