// module gameboard
let gameboard = ['', '', '', '', '', '', '', '', ''];


// player templates
const playerFactory = (name, symb) => {
    let score = 0;
    let turn = false;
    return { name, score, turn, symb };
};

// create two players
const player1 = playerFactory('Alice', 'x')
const player2 = playerFactory('Bob', 'o')

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

    const gameMove = (player) => {
        let a = player.symb;
        let ttts = document.querySelectorAll(".cell")
        ttts.forEach(ttt => {
            // remove old event listeners?
            ttt.addEventListener('click', () => {
                console.log(ttt.childNodes)
                // 
            })
        })
    }

    // turn control over to other player
    const newTurn = () => {
        console.log('newTurn')
        if (player1.turn === true) {
            player1.turn = false;
            player2.turn = true;
            gameMove(player2)
        } else {
            player1.turn = true;
            player2.turn = false;
            gameMove(player1)
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