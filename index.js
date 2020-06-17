// module gameboard
// - blanks, frame



const gameflow = (() => {
    
    // Initialize game. 
    const gamestart = () => {
        let x = Math.random();
        if (x < 0.5) {
            player1.turn = true;
        } else {
            player2.turn = true;
        }
    }

    const newTurn = (player1, player2, gameboard) => {
        const winnerCheck = (gameboard) => {
            if (false) {
                // see if player1 has won
                return
            } else if (false) {
                // see if player2 has won. 
                return
            } 
        }
        if (player1.turn === true) {
            player1.turn = false;
            player2.turn = true;
        } else {
            player1.turn = true;
            player2.turn = false;
        }
    }

    
})();


const playerFactory = (name) => {
    let score = 0;
    let turn = false;
    let move = (turn) => {
        if (turn === true) {
            console.log('hmmm') // alter game board
        }
    }
    return { name, score, move };
};

const player1 = playerFactory('Alice')
const player2 = playerFactory('Bob')

gameflow