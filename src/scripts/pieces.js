// Piece types and their corresponding images
export const pieceMap = {
    'wr': '<img src="../assets/pieces/Chess_rlt60.png" alt="White Rook">',
    'wn': '<img src="../assets/pieces/Chess_nlt60.png" alt="White Knight">',
    'wb': '<img src="../assets/pieces/Chess_blt60.png" alt="White Bishop">',
    'wq': '<img src="../assets/pieces/Chess_qlt60.png" alt="White Queen">',
    'wk': '<img src="../assets/pieces/Chess_klt60.png" alt="White King">',
    'wp': '<img src="../assets/pieces/Chess_plt60.png" alt="White Pawn">',
    'br': '<img src="../assets/pieces/Chess_rdt60.png" alt="Black Rook">',
    'bn': '<img src="../assets/pieces/Chess_ndt60.png" alt="Black Knight">',
    'bb': '<img src="../assets/pieces/Chess_bdt60.png" alt="Black Bishop">',
    'bq': '<img src="../assets/pieces/Chess_qdt60.png" alt="Black Queen">',
    'bk': '<img src="../assets/pieces/Chess_kdt60.png" alt="Black King">',
    'bp': '<img src="../assets/pieces/Chess_pdt60.png" alt="Black Pawn">',
    '  ': '',
};

// Initial board setup
export const initialSetup = [
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['wr', 'wn', 'wb', 'wk', 'wq', 'wb', 'wn', 'wr'],
    ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['  ', '  ', '  ', '  ', '  ', '  ', '  ', '  '],
    ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
    ['br', 'bn', 'bb', 'bk', 'bq', 'bb', 'bn', 'br']
];

// Get piece color (returns 'w', 'b', or null for empty squares)
export function getPieceColor(piece) {
    if (piece === '  ') return null;
    return piece[0];
}

// Get piece type (returns 'p', 'r', 'n', 'b', 'q', 'k', or null for empty squares)
export function getPieceType(piece) {
    if (piece === '  ') return null;
    return piece[1];
}