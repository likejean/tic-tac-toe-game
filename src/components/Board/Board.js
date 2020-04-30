import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import Square from './Square/Square';


export default connect(({board, players}) => ({board, players}))(props => {
    //Get this from redux...
    const {board, players} = props;

    return (
        <React.Fragment>
            <div id='board' className='mt-5 d-flex flex-wrap'>
                {board.map((symbol, id) => <Square key={id} cellIndex={id} symbol={symbol}/>)}
            </div>

            <div className="players-info mt-6">
                <div className="col">
                    <p>
                        <span className="badge badge-xl badge-pill badge-primary">
                            <strong>Player 1</strong>:
                        </span> {players.player1}
                    </p>
                    <p><span className="badge badge-xl badge-pill badge-danger">
                            <strong>Player 2</strong>:
                        </span> {players.player2}
                    </p>
                    <p>
                        <span className="badge badge-xl badge-pill badge-light">
                            <strong>Who's Turn</strong>:
                        </span>{players.turn === 'player1' ? 'Player 1' : 'Player 2'}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
});