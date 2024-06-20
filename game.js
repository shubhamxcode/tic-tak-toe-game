const button = document.querySelector('#restartButton');
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');


let player="X"
let gameover=false
cells.forEach(cells=>{
    cells.addEventListener('click',(s)=>{
        if (gameover || cells.textContent!=="") {
            return
        } 
        cells.textContent=player;
        if (game(player)) {
            message()
            gameover = true;
        } else if (checkTie()) {
            message3()
        }else{
            player=player==="X"?"O":"X"
        }

    }) 
    
});

function game(player){
    const winningcondition=[ 
    [0,1,2],[3,4,5],[6,7,8],//for row
    [0,3,6],[1,4,7],[2,5,8],//for col
    [0,4,8],[2,4,6]//for diagonal
]
for(const condition of winningcondition) {
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
        cells[condition,[3]].textContent===player &&
        cells[condition,[6]].textContent===player) {
        return true
    }
    if (cells[condition,[1]].textContent===player &&
        cells[condition,[4]].textContent===player &&
        cells[condition,[7]].textContent===player) {
        return true
    }
    if (cells[condition,[2]].textContent===player &&
        cells[condition,[5]].textContent===player &&
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
}
return false
}
function message(){
    const mymessage=document.querySelector(".message")
    const yup=mymessage.textContent=`Congratulations! ${player} won the game.` 
}
function message3(){
    const mymessage=document.querySelector(".message")
    const yup=mymessage.textContent=`Opps Its A Game Tie` 
}

function checkTie(){
    return Array.from(cells).every((cell, index) => {
        return cells[index].textContent != "" // Access the cell using its index
    })
}

cells.forEach(cells => {
    button.addEventListener('click',function(R){
        cells.textContent=""
    })
});
