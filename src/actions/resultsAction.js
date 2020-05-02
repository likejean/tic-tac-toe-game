import { X_WINS, O_WINS, TIE, RESET_RESULT } from '../helpers/actionTypes';
import  { checkVictory, winsOptions } from '../helpers/checkWins';

export function checkGameResult(board) {

    if(checkVictory(winsOptions, board, 'X').win) {
        return {
            type: X_WINS,
            payload: checkVictory(winsOptions, board, 'X').combo
        }
    }else if(checkVictory(winsOptions, board, 'O').win) {
        return {
            type: O_WINS,
            payload: checkVictory(winsOptions, board, 'O').combo
        }
    }else{
        const checkBlankCells = board.filter(symbol => symbol === '');
        if (checkBlankCells.length === 0){
            return {
                type: TIE
            }
        }
        else {
            return {
                type: 'VOID'
            }
        }
    }
};

export function resetResult() {
    return {
        type: RESET_RESULT
    }
}


