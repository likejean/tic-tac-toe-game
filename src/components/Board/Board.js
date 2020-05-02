import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import Square from './Square/Square';
import Summary from '../Board/Summary/Summary';
import Inputs from '../Board/Inputs/PlayerNames';
import { resetGame } from '../../actions/boardAction';
import { resetResult } from '../../actions/resultsAction';
import { startGame } from "../../actions/playerAction";

export default connect(({board, result}) => ({board, result}),
    dispatch => (
        {
            startGame: () => dispatch(startGame()),
            resetGame: () => dispatch(resetGame()),
            resetResult: () => dispatch(resetResult())
        }
    )
)(props => {
    //Get this from redux...
    const {board, result, resetGame, resetResult, startGame} = props;

    return (
        <React.Fragment>
            <Inputs/>
            <div className="container">
                <div className="row">
                    <button disabled={result.gameStart} type="button" onClick={() => startGame()} className="start btn btn-outline-dark">START GAME</button>
                    <button type="button" onClick={() => resetGame().then(() => {resetResult();})} className="reset btn btn-outline-dark">RESET GAME</button>
                </div>
            </div>
            <div id='board' style={result.gameStart ? {border: "1px solid black", backgroundColor: '#FAF7F7'} : {border: "1px solid lightgrey", backgroundColor: 'white'}} className='mt-5 d-flex flex-wrap'>
                {board.map((symbol, id) =>
                    <Square
                        key={id}
                        cellIndex={id}
                        gameOver={result.gameOver}
                        symbol={symbol}
                    />)
                }
            </div>
            <Summary/>
        </React.Fragment>
    )
});