import { pieceMap, initialSetup, getPieceColor, getPieceName } from './pieces.js';

class ChessBoard {
    constructor() {
        this.boardElement = document.getElementById('board_grid');
        this.coordinateDisplay = document.getElementById('coordinateDisplay');
        this.selectedCell = null;
        this.currentPlayer = 'w'; // Le joueur blanc commence
        this.board = this.deepCopyBoard(initialSetup);
        this.setupBoard();
    }

    deepCopyBoard(board) {
        return board.map(row => [...row]);
    }

    setupBoard() {
        this.boardElement.innerHTML = '';

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const cell = document.createElement('div');
                cell.className = `cell ${(row + col) % 2 === 0 ? 'white' : 'black'}`;
                cell.dataset.row = row;
                cell.dataset.col = col;

                // Ajouter la pièce si elle existe
                const piece = this.board[row][col];
                if (piece !== '  ') {
                    const pieceElement = this.createPieceElement(piece);
                    cell.appendChild(pieceElement);
                }

                cell.addEventListener('click', (e) => this.handleCellClick(e));
                this.boardElement.appendChild(cell);
            }
        }
    }

    createPieceElement(piece) {
        const img = document.createElement('img');
        img.src = pieceMap[piece];
        img.alt = `${piece[0] === 'w' ? 'White' : 'Black'} ${getPieceName(piece[1])}`;
        img.className = 'chess-piece';
        return img;
    }

    handleCellClick(event) {
        const cell = event.currentTarget;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        const piece = this.board[row][col];

        this.coordinateDisplay.textContent = `Clicked: ${String.fromCharCode(65 + col)}${8 - row}`;

        if (!this.selectedCell && piece !== '  ') {
            if (getPieceColor(piece) === this.currentPlayer) {
                this.selectedCell = cell;
                cell.classList.add('selected');
            }
        }
        else if (this.selectedCell) {
            this.movePiece(
                parseInt(this.selectedCell.dataset.row),
                parseInt(this.selectedCell.dataset.col),
                row,
                col
            );

            this.selectedCell.classList.remove('selected');
            this.selectedCell = null;
        }
    }

    movePiece(fromRow, fromCol, toRow, toCol) {
        const piece = this.board[fromRow][fromCol];

        if (this.isValidMove(fromRow, fromCol, toRow, toCol)) {
            this.board[toRow][toCol] = piece;
            this.board[fromRow][fromCol] = '  ';
            this.currentPlayer = this.currentPlayer === 'w' ? 'b' : 'w';
            this.setupBoard();
        }
    }

    isValidMove(fromRow, fromCol, toRow, toCol) {
        const piece = this.board[fromRow][fromCol];
        const targetPiece = this.board[toRow][toCol];

        if (targetPiece !== '  ' && getPieceColor(targetPiece) === getPieceColor(piece)) {
            return false;
        }

        return true;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ChessBoard();
});