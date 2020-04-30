import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from "../../../actions/boardAction";
import {toggleTurnAction} from "../../../actions/playerAction";
import {checkGameResult} from "../../../actions/resultsAction";



function Square (props) {

    const { symbol, cellIndex, drawSymbol, players, board } = props;
    console.log('board',board)
    const disabled = symbol ? 'disabled' : '';
    return (
        <div
            className={`cell ${disabled}`}
            onClick={() => drawSymbol(board, players, cellIndex)}
        >
            {symbol ?
                (symbol === 'X'
                    ? <Cross />
                    : <Zero />)
                : ''
            }
        </div>
    )
};

const mapStateToProps = ({ board, players }) => ({ board, players });

const mapDispatchToProps = dispatch => ({
    drawSymbol: (board, players, cellIndex) => {
        if (players[players.turn] === 'X') {
            dispatch(drawXAction(cellIndex));
        }else {
            dispatch(drawOAction(cellIndex))
        }
        // const check = board.filter(symbol => symbol === "");
        // if(check.length === 1)
        console.log('mapping',board)
        dispatch(checkGameResult(board));
        dispatch(toggleTurnAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Square);



