/*
This code adds an event listener to the DOMContentLoaded event which waits for the entire
HTML document to load before running the code. It then creates a number of constants that will 
be used throughout the code, such as the game board squares, the result display, and the current 
player display
*/

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    /*
    A 2D array called winningArrays is created which contains all the possible ways to win the game.
    */
    const winningArrays = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]

    /*
    The checkBoard() function is defined which loops through each winning array
    and checks if it has been filled by player one or player two. If a winning
    combination is found, it updates the result display with the corresponding
    message (Player One Wins or Player Two Wins).
    */
    function checkBoard() {
        for (let y = 0; y < winningArrays.length; y++) {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]

            // check if all the squares in the winning combination have the same class
            if (
                square1.classList.contains('player-one') &&
                square2.classList.contains('player-one') &&
                square3.classList.contains('player-one') &&
                square4.classList.contains('player-one')
            ) {
                // update the result display and add the 'gold' class to each square
                result.textContent = 'Player One Wins!'
                winningArrays[y].forEach((index) => {
                    squares[index].classList.remove('player-one')
                    squares[index].classList.add('gold')
                })
                alert("Game Over, Player One Wins!")
                return
            } else if (
                square1.classList.contains('player-two') &&
                square2.classList.contains('player-two') &&
                square3.classList.contains('player-two') &&
                square4.classList.contains('player-two')
            ) {
                // update the result display and add the 'gold' class to each square
                result.textContent = 'Player Two Wins!'
                winningArrays[y].forEach((index) => {
                    squares[index].classList.remove('player-two')
                    squares[index].classList.add('gold')
                })
                alert("Game Over, Player Two Wins!")
                return
            }
        }
    }

    /* Show available cells */
    function showAvailableCells() {
        for (let i = 0; i < squares.length; i++) {
            if (squares[i + 7] && squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
                squares[i].classList.add('available');
            }
        }
    }

    /* Reset available cells */
    function resetAvailableCells() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].classList.remove('available');
        }
    }

    /*
    A for loop is then used to iterate through each game board square. If a square is clicked, it will
    then execute the code inside the onclick function. The game then checks to see if the square below
    the one clicked is taken. If not, it adds the class of either player one or player two to the square
    (depending on which player is currently playing), then toggles the current player and updates the
    current player display. Finally, the checkBoard() function is called to see if a winning combination
    has been found.
    */
    for (let i = 0; i < squares.length; i++) {
        // show available cells for the current click
        showAvailableCells();
        squares[i].onclick = () => {
            //if the square below your current square is taken, you can go ontop of it
            if (squares[i + 7].classList.contains('taken') && !squares[i].classList.contains('taken')) {
                if (currentPlayer == 1) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-one')
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                    resetAvailableCells();
                    showAvailableCells();
                } else if (currentPlayer == 2) {
                    squares[i].classList.add('taken')
                    squares[i].classList.add('player-two')
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                    resetAvailableCells();
                    showAvailableCells();
                }
            } else alert("You can't go here. Please choose a valid cell.")
            checkBoard()
        }
    }

})