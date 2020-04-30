import React from 'react';
import {connect} from 'react-redux';
import cross from '../../../assets/images/cross.png';
import zero from '../../../assets/images/zero.png';

export default connect(({players, result}) => ({players, result}))(props => {
    const {players, result} = props;
    console.log('RESULT', result)
    const winnerResult = () => {
        if (!result.tie && result.win === null) return null;
        else {
            if (result.tie) {
                return <div className='alert alert-success mt-2'>It's DRAW</div>
            } else {
                if (result.win === 'X') {
                    const player = players.player1 === 'X' ?
                        <span className="badge badge-pill badge-primary">Player 1</span>
                        :
                        <span className="badge badge-pill badge-danger">Player 2</span>;
                    return <div className='alert alert-success mt-2'>{player} WINS!</div>
                } else if (result.win === 'O') {
                    const player = players.player2 === 'O' ?
                        <span className="badge badge-pill badge-danger">Player 2</span>
                        :
                        <span className="badge badge-pill badge-primary">Player 1</span>;
                    return <div className='alert alert-success mt-2'>{player} WINS!</div>
                }
            }
        }
    }

    return (
        <div className="players-info mt-6">

            <div className="col">
                <p>
                    <span className="badge badge-pill badge-primary">
                        <strong>Player 1</strong>:
                    </span> {players.player1 === 'X' &&
                <img style={{width: 50, marginLeft: 40}} src={cross} alt='cross'/>}
                </p>
                <p><span className="badge badge-pill badge-danger">
                            <strong>Player 2</strong>:
                        </span> {players.player2 === 'O' &&
                <img style={{width: 50, marginLeft: 40}} src={zero} alt='zero'/>}
                </p>
                <p>
                    <span className="badge badge-xl badge-pill badge-light">
                        <strong>Who's Turn</strong>:
                    </span>{players.turn === 'player1'
                    ?
                    <span className="badge badge-pill badge-primary">Player 1</span>
                    :
                    <span className="badge badge-pill badge-danger">Player 2</span>
                }
                </p>
                {winnerResult()}
            </div>
        </div>
    )
})