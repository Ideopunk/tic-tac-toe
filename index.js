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

// player templates
const playerFactory = (name) => {
    let score = 0;
    let turn = false;
    return { name, score, turn };
};

// create two players
const player1 = playerFactory('Alice')
const player2 = playerFactory('Bob')

console.log(player1.name)
console.log(player1.score)
console.log(player1.turn)

const gameflow = (function(player1, player2, gameboard){
    
    // Initialize game. 
    const gamestart = () => {
        console.log('gamestart')
        console.log(player1, player2)
        let x = Math.random();
        if (x < 0.5) {
            player1.turn = true;
        } else {
            player2.turn = true;
        }
    }

    function tie() {
        alert("it's a tie!")
    }

    function winner(player) {
        alert(player + " wins!")
    }

    // see if there's a winner
    const linecheck = () => {
        console.log('linecheck')
        let line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let totalFilled = 0;
        for (let i = 0; i < line.length; i++) {
            let check = []
            for (let j = 0; j < 3; j++) {
                if (gameboard[i][j].value != null) {
                    check.push(gameboard[i][j].value)
                    totalFilled++;
                }
            }
            if (check[0] === check[1] === check[2]) {
                winner(latestplayer);
            }
        }
        if (totalFilled === 24) {
            tie();
        }
    }

    // turn control over to other player
    const newTurn = () => {
        console.log('newTurn')
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

    // player turn
    const turn = () => {
        console.log('turn')
        console.log(player1, player2, gameboard)
        // playmove
        linecheck;
        newTurn(player1, player2, gameboard);
    }
    return {gamestart, turn}
})(player1, player2, gameboard);

gameflow.gamestart();
gameflow.turn();