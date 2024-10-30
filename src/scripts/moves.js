// Check if coordinates are within the board
export function isValidPosition(x, y) {
    return x >= 1 && x <= 8 && y >= 1 && y <= 8;
}

// Get possible moves for a piece
export function getPossibleMoves(piece, currentX, currentY, board) {
    switch(piece) {
        case 'wp':
            return getWhitePawnMoves(currentX, currentY, board);
        case 'bp':
            return getBlackPawnMoves(currentX, currentY, board);
        // Other pieces will be implemented later
        default:
            return [];
    }
}

function getWhitePawnMoves(x, y, board) {
    const moves = [];

    // Forward move
    if (isValidPosition(x, y + 1) && board[y + 1][x - 1] === '  ') {
        moves.push({x: x, y: y + 1});

        // Initial two-square move
        if (y === 2 && board[y + 2][x - 1] === '  ') {
            moves.push({x: x, y: y + 2});
        }
    }

    // Captures
    const capturePositions = [{x: x - 1, y: y + 1}, {x: x + 1, y: y + 1}];
    capturePositions.forEach(pos => {
        if (isValidPosition(pos.x, pos.y)) {
            const targetPiece = board[pos.y][pos.x - 1];
            if (targetPiece !== '  ' && targetPiece[0] === 'b') {
                moves.push(pos);
            }
        }
    });

    return moves;
}

function getBlackPawnMoves(x, y, board) {
    const moves = [];

    // Forward move
    if (isValidPosition(x, y - 1) && board[y - 1][x - 1] === '  ') {
        moves.push({x: x, y: y - 1});

        // Initial two-square move
        if (y === 7 && board[y - 2][x - 1] === '  ') {
            moves.push({x: x, y: y - 2});
        }
    }

    // Captures
    const capturePositions = [{x: x - 1, y: y - 1}, {x: x + 1, y: y - 1}];
    capturePositions.forEach(pos => {
        if (isValidPosition(pos.x, pos.y)) {
            const targetPiece = board[pos.y][pos.x - 1];
            if (targetPiece !== '  ' && targetPiece[0] === 'w') {
                moves.push(pos);
            }
        }
    });

    return moves;
}