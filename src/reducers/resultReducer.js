import { X_WINS, O_WINS, TIE, IN_PROGRESS, RESET_RESULT, START_GAME } from '../helpers/actionTypes';

const initialState = {
    gameStart: false,
    win: null,
    winCombo: [],
    tie: false,
    gameOver: false
};

export function resultReducer(state = initialState, action) {
    switch(action.type) {
        case START_GAME:
            return {
                gameStart: true,
                win: null,
                winCombo: [],
                tie: false,
                gameOver: false
            }
        case X_WINS:
            return {
                gameStart: true,
                win: 'X',
                tie: false,
                gameOver: true,
                winCombo: [...action.payload]
            }
        case O_WINS:
            return {
                gameStart: true,
                win: 'O',
                tie: false,
                gameOver: true,
                winCombo: [...action.payload]
            }
        case TIE:
            return {
                gameStart: true,
                win: null,
                tie: true,
                gameOver: true,
                winCombo: []
            }
        case RESET_RESULT:
            return {
                gameStart: false,
                win: null,
                tie: false,
                gameOver: false,
                winCombo: []
            }
        case IN_PROGRESS:
            return {
                gameStart: true,
                win: null,
                tie: false,
                gameOver: false,
                winCombo: []
            }
        default: return state;
    }
};