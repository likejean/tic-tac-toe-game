import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import Square from './Square/Square';
import Summary from '../Board/Summary/Summary';
import Inputs from '../Board/Inputs/PlayerNames';
import {resetGame} from '../../actions/boardAction';
import {resetResult} from '../../actions/resultsAction';

export default connect(({board, result}) => ({board, result}),
    dispatch => (
        {
            resetGame: () => dispatch(resetGame()),
            resetResult: () => dispatch(resetResult())
        }
    )
)(props => {
    //Get this from redux...
    const {board, result, resetGame, resetResult} = props;

    return (
        <React.Fragment>
            <Inputs/>
            <div className="container">
                <div className="row">
                    <button type="button" onClick={() => resetGame().then(() => {resetResult();})} className="reset btn btn-outline-dark">RESET GAME</button>
                </div>
            </div>
            <div id='board' className='mt-5 d-flex flex-wrap'>
                {board.map((symbol, id) => <Square key={id} cellIndex={id} gameOver={result.gameOver}
                                                   symbol={symbol}/>)}
            </div>
            <Summary/>
        </React.Fragment>
    )
});