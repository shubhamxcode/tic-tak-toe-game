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
        player=player==="X"?"O":"X"
    })
});