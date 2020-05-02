import { DRAW_X, DRAW_O, RESET_GAME } from "../helpers/actionTypes";

export function drawXAction(cellIndex) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: DRAW_X,
                cellIndex
            });
            resolve(() => console.log(resolve));
        })
    }
};

export function drawOAction(cellIndex) {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: DRAW_O,
                cellIndex
            });
            resolve(() => console.log(resolve));
        })
    }
};

export function resetGame() {
    return dispatch => {
        return new Promise(resolve => {
            dispatch({
                type: RESET_GAME
            });
            resolve(() => console.log(resolve));
        })
    }
};

