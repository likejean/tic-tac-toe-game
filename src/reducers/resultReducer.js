import {X_WINS, O_WINS, TIE, IN_PROGRESS, RESET_RESULT} from '../helpers/actionTypes';

const initialState = {
    win: null,
    tie: false,
    gameOver: false
};

export function resultReducer(state = initialState, action) {
    switch(action.type) {
        case X_WINS:
            return {
                win: 'X',
                tie: false,
                gameOver: true
            }
        case O_WINS:
            return {
                win: 'O',
                tie: false,
                gameOver: true
            }
        case TIE:
            return {
                win: null,
                tie: true,
                gameOver: true
            }
        case RESET_RESULT:
            return {
                win: null,
                tie: false,
                gameOver: false
            }
        case IN_PROGRESS:
            return {
                win: null,
                tie: false,
                gameOver: false
            }
        default: return state;
    }
};