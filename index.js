// module gameboard
let gameboard = [{  
        x: 0, 
        y: 0,
        value: ''      
    },{
        x: 1,
        y: 0,
        value: ''
    },{
        x: 2,
        y:0,
        value: ''
    },{
        x: 0,
        y: 1,
        value: ''
    },{
        x: 1,
        y: 1,
        value: ''
    },{
        x: 2,
        y: 1,
        value: ''
    },{
        x: 0,
        y: 2,
        value: ''
    },{
        x: 1,
        y: 2,
        value: ''
    },{
        x: 2,
        y: 2,
        value: ''
    }

];
// - blanks, frame
console.log(gameboard[2])

function linecheck() {
    let line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    for (let i = 0; i < line.length; i++) {
        let check = []
        for (let j = 0; j < 3; j++) {
            if (diag[i][j] != null) {
                check.push(diag[i][j])
            }
        }
        if (check[0] === check[1] === check[2]) {
            winner(latestplayer)
        }
    }
}


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


const gameflow = ((player1, player2) => {
    
    // Initialize game. 
    const gamestart = () => {
        let x = Math.random();
        if (x < 0.5) {
            player1.turn = true;
        } else {
            player2.turn = true;
        }
    }

    const aTurn = (player1, player2, gameboard)
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