let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const messageElement = document.getElementById('message');
const resetBtn = document.getElementById('resetBtn');

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetBtn.addEventListener('click', resetGame);

function handleCellClick(e) {
    const cell = e.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    if (checkWin()) {
        messageElement.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        highlightWinningCells();
        return;
    }

    if (checkDraw()) {
        messageElement.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function highlightWinningCells() {
    winningConditions.forEach(condition => {
        if (condition.every(index => board[index] === currentPlayer)) {
            condition.forEach(index => {
                cells[index].classList.add('winner');
            });
        }
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    messageElement.textContent = "Player X's turn";
    
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o', 'winner');
    });
}
