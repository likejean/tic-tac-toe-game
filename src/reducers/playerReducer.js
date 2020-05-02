import { PLAYER_X, PLAYER_O, PLAYER_NAME, TURN } from '../helpers/actionTypes';

const initialState = {
    player1: 'X',
    player2: 'O',
    player1_name: '',
    player2_name: '',
    turn: 'player1'
}

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case PLAYER_NAME:
            return {
                ...state,
                [action.name]: action.value
            }
        case PLAYER_X:
            if (action.player === 'player1') {
                return {
                    ...state,
                    player1: 'X',
                    player2: 'O'
                }
            } else {
                return {
                    ...state,
                    player1: 'O',
                    player2: 'X'
                }
            }
        case PLAYER_O:
            if (action.player === 'player2') {
                return {
                    ...state,
                    player1: 'O',
                    player2: 'X'
                }
            } else {
                return {
                    ...state,
                    player1: 'X',
                    player2: 'O'
                }
            }
        case TURN:
            if (state.turn === 'player1') return {...state, turn: 'player2'};
            else return {...state, turn: 'player1'};

        default:
            return state;

    }
}