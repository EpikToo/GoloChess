import { pieceMap, initialSetup } from './pieces.js';
import { getPossibleMoves } from './moves.js';
import { gameState } from './game.js';

const board = document.getElementById('board_grid');
const coordinateDisplay = document.getElementById('coordinateDisplay');
let selectedSquare = null;

function initBoard() {
    for (let y = 8; y >= 1; y--) {
        for (let x = 1; x <= 8; x++) {
            const piece = initialSetup[y][x - 1];
            const square = createSquare(piece);
            square.className = 'square ' + ((y + x) % 2 === 0 ? 'white' : 'black');
            square.addEventListener('click', () => onSquareClick(x, y, piece, square));
            board.appendChild(square);
        }
    }
    
    coordinateDisplay.textContent = `Player Color: ${gameState.playerColor}`;
    console.log("Player color is: " + gameState.playerColor);
}

function createSquare(piece) {
    const square = document.createElement('div');
    square.className = 'square';
    square.innerHTML = pieceMap[piece];
    return square;
}

function onSquareClick(x, y, piece, squareElement) {
    const coord = `x: ${x}, y: ${y}`;
    console.log(`Player Color: ${gameState.playerColor}, Case: ${coord}, Piece: ${piece}`);
    coordinateDisplay.textContent = `Player Color: ${gameState.playerColor}, Case: ${coord}, Piece: ${piece}`;

    if (!gameState.selectedPiece) {
        handlePieceSelection(x, y, piece, squareElement);
    } else if (coord === gameState.selectedCoords && piece === gameState.selectedPiece) {
        handleDeselection(squareElement);
    } else {
        handleMove(x, y);
    }
}

function handlePieceSelection(x, y, piece, squareElement) {
    if (gameState.isPlayerTurn && piece[0] === gameState.playerColor) {
        if (selectedSquare) {
            selectedSquare.classList.remove('selected');
        }
        squareElement.classList.add('selected');
        selectedSquare = squareElement;
        gameState.setSelectedPiece(piece, `x: ${x}, y: ${y}`);
    }
}

function handleDeselection(squareElement) {
    squareElement.classList.remove('selected');
    selectedSquare = null;
    gameState.clearSelection();
}

function handleMove(toX, toY) {
    // This will be implemented to handle the actual piece movement
    // It will use getPossibleMoves to validate the move
    console.log("Move attempted");
}

initBoard();