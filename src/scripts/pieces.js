export const pieceMap = {
    'wr': '/assets/pieces/ChessWR.png',
    'wn': '/assets/pieces/ChessWN.png',
    'wb': '/assets/pieces/ChessWB.png',
    'wq': '/assets/pieces/ChessWQ.png',
    'wk': '/assets/pieces/ChessWK.png',
    'wp': '/assets/pieces/ChessWP.png',
    'br': '/assets/pieces/ChessBR.png',
    'bn': '/assets/pieces/ChessBN.png',
    'bb': '/assets/pieces/ChessBB.png',
    'bq': '/assets/pieces/ChessBQ.png',
    'bk': '/assets/pieces/ChessBK.png',
    'bp': '/assets/pieces/ChessBP.png'
};

export const initialSetup = [
    ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr']
];

export function getPieceColor(piece) {
    if (piece === '  ') return null;
    return piece[0];
}

export function getPieceType(piece) {
    if (piece === '  ') return null;
    return piece[1];
}

export function getPieceName(type) {
    const names = {
        'r': 'Rook',
        'n': 'Knight',
        'b': 'Bishop',
        'q': 'Queen',
        'k': 'King',
        'p': 'Pawn'
    };
    return names[type] || '';
}