import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero';
import Win from './Win/Win';
import styled from "styled-components";
import OriginalReactTooltip from "react-tooltip";
import { connect } from 'react-redux';
import { drawXAction, drawOAction } from "../../../actions/boardAction";
import {toggleTurnAction} from "../../../actions/playerAction";

export const ReactTooltip = styled(OriginalReactTooltip).attrs({
    className: "custom-tooltip",
})`
    &.custom-tooltip {
        background-color: grey;
        color: white;
        font-size: 25px;  
        border-radius: 15px;      
    }
`;

function Square (props) {

    const { symbol, cellIndex, gameOver, drawSymbol, players, board, result: {win, winCombo, gameStart}, toggleTurnAction } = props;

    const disabled = symbol || gameOver ? 'disabled' : '';
    return (
        <React.Fragment>
            <div
                className={`cell ${disabled}`}
                data-tip="CLICK 'START GAME'"
                onClick={gameStart
                    ? () => drawSymbol(board, players, cellIndex).then(() => {toggleTurnAction();})
                    : e => e.preventDefault()
                }
            >
                {symbol && gameStart ?
                    !gameOver ?
                        (symbol === 'X'
                            ? <Cross />
                            : <Zero />)
                        : winCombo.map(elem => elem === cellIndex ? <Win key={elem} winner={win} /> : null)
                    : ''
                }
            </div>
            {!gameStart && <ReactTooltip data-background-color='red' />}
        </React.Fragment>
    )
};

const mapStateToProps = ({ board, players, result }) => ({ board, players, result });

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



