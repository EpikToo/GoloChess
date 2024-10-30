// Game state
class GameState {
    constructor() {
        this.playerColor = Math.random() < 0.5 ? 'w' : 'b';
        this.isPlayerTurn = this.playerColor === 'w';
        this.selectedPiece = null;
        this.selectedCoords = null;
        this.gameBoard = null;
    }

    toggleTurn() {
        this.isPlayerTurn = !this.isPlayerTurn;
    }

    setSelectedPiece(piece, coords) {
        this.selectedPiece = piece;
        this.selectedCoords = coords;
    }

    clearSelection() {
        this.selectedPiece = null;
        this.selectedCoords = null;
    }

    isValidMove(fromX, fromY, toX, toY) {
        // This will be implemented later with the moves logic
        return true;
    }
}

export const gameState = new GameState();