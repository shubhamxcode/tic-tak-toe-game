const button = document.querySelector('#restartButton');
const board = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');


let player="X"
let gameover=false

cells.forEach(cells => {
    cells.addEventListener('click',(s)=>{
        if (gameover || cells.textContent!=="") {
            return
        } 
        cells.textContent=player;
        if (game(player)) {
            console.log(`Congratulations! ${player} won the game.`);
            gameover=true
        }else{
            player=player==="X"?"O":"X"
        }
    })
    
});

function game(player){
    const winningcondition=[
    [0,1,2],[3,4,5][6,7,8],//for row 
    [0,3,6],[1,4,7],[2,5,8],//for col
    [0,4,8],[2,4,6]//for diagonal
]
for (const condition of winningcondition) {
    if (cells[condition[0]].textContent===player &&
        cells[condition[1]].textContent===player &&
        cells[condition[2]].textContent===player) {
        return
    }
}
return false
   
};