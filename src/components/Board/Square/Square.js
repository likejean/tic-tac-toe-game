import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from "../../../actions/boardAction";
import {toggleTurnAction} from "../../../actions/playerAction";

function Square (props) {

    const { symbol, cellIndex, gameOver, drawSymbol, players, board, toggleTurnAction } = props;

    const disabled = symbol || gameOver ? 'disabled' : '';
    return (
        <div
            className={`cell ${disabled}`}
            onClick={() => drawSymbol(board, players, cellIndex).then(() => {toggleTurnAction();})}
        >
            {symbol ?
                !gameOver ?
                    (symbol === 'X'
                        ? <Cross />
                        : <Zero />)
                    : 'GAME OVER'
                : ''
            }
        </div>
    )
};

const mapStateToProps = ({ board, players }) => ({ board, players });

const mapDispatchToProps = dispatch => ({
    drawSymbol: (board, players, cellIndex) => {
        if (players[players.turn] === 'X') {
            return dispatch(drawXAction(cellIndex));
        }else{
            return dispatch(drawOAction(cellIndex))
        }
    },
    toggleTurnAction: () => dispatch(toggleTurnAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);



