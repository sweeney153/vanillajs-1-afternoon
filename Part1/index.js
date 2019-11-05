const board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = '0';
        clickedElement.innerText = 'X';
        board[clickedId] = 'X'; 
    } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
        board[clickedId] = '0';
    }
    console.log(board); 
    
const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft= board[6];
const bottomCenter = board[7];
const bottomRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert (`${topLeft} wins!`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
        alert (`${topLeft} wins!`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        alert (`${topLeft} wins!`);
        return;
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomLeft) {
        alert (`${topLeft} wins!`);
        return;
    }
    if (bottomRight !== undefined && bottomRight === middleRight && bottomRight === topRight) {
        alert (`${bottomRight} wins!`);
        return;
    }
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight === bottomLeft) {
        alert (`${bottomRight} wins!`);
        return;
    } 
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
        alert (`${bottomLeft} wins!`);
        return;
    }   
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert (`${middleLeft} wins!`);
        return;
    }

let boardFull = true;
    for(let i=0; i<=8; i++){
        if (board[i] === undefined) {
            boardFull = false;
        }
    }
        if (boardFull === true) {
            alert('Tie!')
        }  
}    


