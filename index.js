// module gameboard
let gameboard = []
let positions = ['tl', 'tm', 'tr', 'cl', 'cm', 'cr', 'bl', 'bm', 'br']

for (let i = 0; i < positions.length; i++) {
    gameboard.push({
        value: '',
        id: positions[i]
    })
}
console.log(gameboard)


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
        console.log('gamestart')
        console.log(player1, player2)
        let x = Math.random();
        if (x < 0.5) {
            player1.turn = true;
            console.log(player1.name + ` goes first!`)
        } else {
            player2.turn = true;
            console.log(player2.name + ` goes first!`)
        }
    }

    function tie() {
        alert("it's a tie!")
    }

    function winner(player) {
        alert(player + " wins!")
    }

    // this needs revision
    // see if there's a winner
    // const linecheck = () => {
    //     console.log('linecheck')
    //     let line = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    //     let totalFilled = 0;
    //     for (let i = 0; i < line.length; i++) {
    //         let check = []
    //         for (let j = 0; j < 3; j++) {
    //             console.log(gameboard[i][j])
    //             if (gameboard[i][j].value != null) {
    //                 check.push(gameboard[i][j].value)
    //                 totalFilled++;
    //             }
    //         }
    //         if (check[0] === check[1] === check[2]) {
    //             winner(latestplayer);
    //         }
    //     }
    //     if (totalFilled === 24) {
    //         tie();
    //     }
    // }

    const boardUpdate = function(event) {
        let cell = event.path[0]
        let symbol = ''
        if (player1.turn === true) {
            symbol = player1.symb
            cell.textContent = symbol;
        } else {
            symbol = player2.symb
            cell.textContent = symbol;
        }
        for (let i = 0; i < gameboard.length; i++) {
            if (gameboard[i].id === cell.id) {
                gameboard[i].value = symbol;
            }
        }
        newTurn();        
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
        console.log('newTurn')
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
        console.log('turn')
        console.log(player1, player2, gameboard)
        // linecheck();
        newTurn(player1, player2, gameboard);
    }
    return {gamestart, turn}
})(player1, player2, gameboard);

gameflow.gamestart();
gameflow.turn();