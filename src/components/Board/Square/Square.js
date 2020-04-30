import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from "../../../actions/boardAction";
import {toggleTurnAction} from "../../../actions/playerAction";

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => ({
    drawSymbol: (players, cellIndex) => {
        if (players[players.turn] === 'X') {
            dispatch(drawXAction(cellIndex));
        }else {
           dispatch(drawOAction(cellIndex))
        }
        dispatch(toggleTurnAction());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(props => {
    const { symbol, cellIndex, drawSymbol, players } = props;
    const disabled = symbol ? 'disabled' : '';
    return (
        <div
            className={`cell ${disabled}`}
            onClick={() => drawSymbol(players, cellIndex)}
        >
            {symbol ?
                (symbol === 'X'
                    ? <Cross />
                    : <Zero />)
                : ''
            }
        </div>
    )
});