import { PLAYER_X, PLAYER_O, TURN } from '../helpers/actionTypes';

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


