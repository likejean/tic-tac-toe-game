import { DRAW_X, DRAW_O } from '../helpers/actionTypes';


const initialState = [...Array(9).keys()].map(() => '');

export function boardReducer(state = initialState, action) {
   switch(action.type) {
       case DRAW_X:
           const stateByX = [...state];
           stateByX[action.cellIndex] = stateByX[action.cellIndex] ? stateByX[action.cellIndex] : 'X';
           return stateByX;
       case DRAW_O:
           const stateByO = [...state];
           stateByO[action.cellIndex] = stateByO[action.cellIndex] ? stateByO[action.cellIndex] : 'O';
           return stateByO;
       default:
           return state;
   }
}