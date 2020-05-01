export const winsOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


export const checkVictory = (wins, board, symbol) => {
    for (let i = 0; i < wins.length; i++){
        if (board[wins[i][0]] === symbol && board[wins[i][1]] === symbol && board[wins[i][2]] === symbol) return true;
    }
    return false;
};