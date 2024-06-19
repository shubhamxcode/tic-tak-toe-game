const button = document.querySelector('#restartButton');
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');


let player="X"
let gameover=false
let player2="O"
cells.forEach(cell=>{
    cell.addEventListener('click',(s)=>{
        if (gameover || cell.textContent!=="") {
            return
        } 
        cell.textContent=player;
        if (game(player)) {
            message()
            gameover = true;
        } else {
            player = player === "X" ? "O" : "X";
        }
        if (game(player2)) {
            message2()
            gameover = true;
        } else {
            player2= player2 === "0" ? "X" : "O";
        }
    })
    
});

function game(player){
    const winningcondition=[ 
    [0,1,2],[3,4,5],[6,7,8],//for row
    [0,3,6],[1,4,7],[2,5,8],//for col
    [0,4,8],[2,4,6]//for diagonal
]
for (const condition of winningcondition) {
    if (cells[condition,[0]].textContent===player &&
        cells[condition,[1]].textContent===player &&
        cells[condition,[2]].textContent===player) {
        return true
    }
    if (cells[condition,[3]].textContent===player &&
        cells[condition,[4]].textContent===player &&
        cells[condition,[5]].textContent===player) {
        return true
    }
    if (cells[condition,[6]].textContent===player &&
        cells[condition,[7]].textContent===player &&
        cells[condition,[8]].textContent===player) {
        return true
    }
    if (cells[condition,[0]].textContent===player &&
        cells[condition,[4]].textContent===player &&
        cells[condition,[8]].textContent===player) {
        return true
    }
    if (cells[condition,[2]].textContent===player &&
        cells[condition,[4]].textContent===player &&
        cells[condition,[6]].textContent===player) {
        return true
    }
    if (cells[condition,[0]].textContent===player2 &&
        cells[condition,[1]].textContent===player2 &&
        cells[condition,[2]].textContent===player2) {
        return true
    }
    if (cells[condition,[3]].textContent===player2 &&
        cells[condition,[4]].textContent===player2 &&
        cells[condition,[5]].textContent===player2) {
        return true
    }
    if (cells[condition,[6]].textContent===player2 &&
        cells[condition,[7]].textContent===player2 &&
        cells[condition,[8]].textContent===player2) {
        return true
    }
    if (cells[condition,[0]].textContent===player2 &&
        cells[condition,[3]].textContent===player2 &&
        cells[condition,[6]].textContent===player2) {
        return true
    }
    if (cells[condition,[1]].textContent===player2 &&
        cells[condition,[4]].textContent===player2 &&
        cells[condition,[7]].textContent===player2) {
        return true
    }
    if (cells[condition,[2]].textContent===player2 &&
        cells[condition,[5]].textContent===player2 &&
        cells[condition,[8]].textContent===player2) {
        return true
    }
    if (cells[condition,[0]].textContent===player2 &&
        cells[condition,[4]].textContent===player2 &&
        cells[condition,[8]].textContent===player2) {
        return true
    }
    if (cells[condition,[2]].textContent===player2 &&
        cells[condition,[4]].textContent===player2 &&
        cells[condition,[6]].textContent===player2) {
        return true
    }
}
return false
}

function message(){
    const mymessage=document.querySelector(".message")
    const yup=mymessage.textContent=`Congratulations! ${player} won the game.` 
}
function message2(){
    const mymessage=document.querySelector(".message")
    const yup=mymessage.textContent=`Congratulations! ${player2} won the game.` 
}