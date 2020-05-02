import {PLAYER_X, PLAYER_O, PLAYER_NAME, TURN, START_GAME} from '../helpers/actionTypes';


export function changePlayer1Name(e) {
    return {
        type: PLAYER_NAME,
        name: e.target.name,
        value: e.target.value
    }
};

export function changePlayer2Name(e) {
    return {
        type: PLAYER_NAME,
        name: e.target.name,
        value: e.target.value
    }
};

export function selectXPlayerAction(player) {
    return {
        type: PLAYER_X,
        player
    }
};

export function selectOPlayerAction(player) {
    return {
        type: PLAYER_O,
        player
    }
};

export function toggleTurnAction() {
    return {
        type: TURN
    }
};

export function startGame() {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: START_GAME
            });
            resolve(() => console.log(resolve));
        })
    }
};


