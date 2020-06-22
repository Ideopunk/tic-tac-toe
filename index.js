// module gameboard
let gameboard = []
let positions = ['tl', 'tm', 'tr', 'cl', 'cm', 'cr', 'bl', 'bm', 'br']

for (let i = 0; i < positions.length; i++) {
    gameboard.push({
        value: '',
        id: positions[i]
    })
}


// player templates
const playerFactory = (name, symb) => {
    let score = 0;
    let turn = false;
    return { name, score, turn, symb };
};

// create two players
const player1 = playerFactory('Alice', 'X')
const player2 = playerFactory('Bob', 'O')

// all the things that happen in the game
const gameflow = (function(player1, player2, gameboard){
    
    // Initialize game. 
    const gamestart = () => {
        let x = Math.random();
        if (x < 0.5) {
            player1.turn = true;
        } else {
            player2.turn = true;
        }
    }

    const gameend = () => {
        console.log('gameend')
        for (let i = 0; i < gameboard.length; i++) {
            gameboard[i].value = ''
            let cell = document.querySelector(`#${gameboard[i].id}`)
            console.log(cell.textContent)
            cell.textContent = ''
        }
    }

    function tie() {
        alert("it's a tie!")
        gameend()
    }

    function winner(player) {
        alert(player.name + " wins!")
        player.score++;
        gameend()
    }

    // see if there's a winner
    const linecheck = () => {
        let line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        let totalFilled = 0;

        // go through each line to check for win condition
        for (let i = 0; i < line.length; i++) {
            let check = []

            // go through each cell in line to see if filled
            for (let j = 0; j < 3; j++) {
                let currCell = line[i][j]
                if (gameboard[currCell].value != '') {
                    check[j] = (gameboard[currCell].value)
                    totalFilled++;
                }
            }

            // if they're all filled and all the same, game is over
            if (check[0] !== undefined && check[0] === check[1] && check[0] === check[2]) {
                if (player1.turn === true) {
                    winner(player1)
                    console.log('winner player 1')
                } else {
                    winner(player2)
                    console.log('winner player 2')
                }
            }
        }

        // if checked so many times and not done, board is full
        if (totalFilled === 24) {
            tie();
        }
    }

    const boardUpdate = function(event) {
        let cell = event.path[0]
        
        // don't fill in cells already filled in
        if (cell.textContent !== '') {
            return;
        }

        // choose symbol based on player
        let symbol = '';
        if (player1.turn === true) {
            symbol = player1.symb
        } else {
            symbol = player2.symb
        }

        // fill in cell
        cell.textContent = symbol;
        
        // update gameboard array too
        for (let i = 0; i < gameboard.length; i++) {
            if (gameboard[i].id === cell.id) {
                gameboard[i].value = symbol;
            }
        }
        turn();        
    }

    // create dom-interaction
    const gameMove = (player, lastPlayer) => {
        let a = player.symb;
        let lastA = lastPlayer.symb;
        let ttts = document.querySelectorAll(".cell")
        ttts.forEach(ttt => {
            ttt.removeEventListener('click', boardUpdate);
            ttt.addEventListener('click', boardUpdate);
        })
    }

    // turn control over to other player
    const newTurn = () => {
        // linecheck()
        if (player1.turn === true) {
            player1.turn = false;
            player2.turn = true;
            gameMove(player2, player1)
        } else {
            player1.turn = true;
            player2.turn = false;
            gameMove(player1, player2)
        }
    }

    // player turn
    const turn = () => {
        linecheck();
        newTurn(player1, player2, gameboard);
    }
    return {gamestart, turn}
})(player1, player2, gameboard);

gameflow.gamestart();
gameflow.turn();