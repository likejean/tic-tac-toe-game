import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import Square from './Square/Square';
import Summary from '../Board/Summary/Summary';

export default connect(({ board, result }) => ({ board, result }))(props => {
    //Get this from redux...
    const { board, result } = props;

    return (
        <React.Fragment>
            <div id='board' className='mt-5 d-flex flex-wrap'>
                {board.map((symbol, id) => <Square key={id} cellIndex={id} gameOver={result.gameOver} symbol={symbol}/>)}
            </div>
            <Summary/>
        </React.Fragment>
    )
});