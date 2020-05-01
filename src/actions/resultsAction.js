import { X_WINS, O_WINS, TIE } from '../helpers/actionTypes';
import  { checkVictory, winsOptions } from '../helpers/checkWins';

export function checkGameResult(board) {

    if(checkVictory(winsOptions, board, 'X')) {
        return {
            type: X_WINS
        }
    }else if(checkVictory(winsOptions, board, 'O')) {
        return {
            type: O_WINS
        }
    }else{
        const checkBlanks = board.filter(symbol => symbol === '');
        if (checkBlanks.length === 0){
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
}


