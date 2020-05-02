import React from 'react';
import {connect} from 'react-redux';
import cross from '../../../assets/images/cross.png';
import zero from '../../../assets/images/zero.png';
import { checkGameResult } from "../../../actions/resultsAction";


export default connect(
    ({board, players, result}) => ({board, players, result}),
    dispatch => ({ checkGameResult: board => dispatch(checkGameResult(board))})
)
(props => {
    const {players, result, board, checkGameResult} = props;
    if (!(result.win || result.tie)) checkGameResult(board);

    return (
        <div className="players-info mt-6">
            <div className="col">
                <p>
                    <span className="badge badge-pill badge-primary">
                        <strong>{players.player1_name ? players.player1_name : 'Player 1'}</strong>:
                    </span> {players.player1 === 'X' &&
                <img style={{width: 50, marginLeft: 40}} src={cross} alt='cross'/>}
                </p>
                <p><span className="badge badge-pill badge-danger">
                            <strong>{players.player2_name ? players.player2_name : 'Player 2'}</strong>:
                        </span> {players.player2 === 'O' &&
                <img style={{width: 50, marginLeft: 40}} src={zero} alt='zero'/>}
                </p>
                {result.gameOver
                    ?
                    <div id='game-over' className='alert alert-info mt-2'>GAME OVER</div>
                    :   <p>
                            <span className="badge badge-xl badge-pill badge-light">
                                <strong>Who's Turn</strong>:
                            </span>
                        {players.turn === 'player1'
                            ?
                            <span className="badge badge-pill badge-primary">{players.player1_name ? players.player1_name : 'Player 1'}</span>
                            :
                            <span className="badge badge-pill badge-danger">{players.player2_name ? players.player2_name : 'Player 2'}</span>
                        }
                    </p>
                }

                {!result.tie && result.win === null
                    ?
                    null
                    :
                    result.tie
                        ?
                        <div className='alert alert-success mt-2'>It's DRAW</div>
                        :
                        result.win === 'X'
                            ?
                            <div className='alert alert-success mt-2'>{players.player1 === 'X' ?
                                <span className="badge badge-pill badge-primary">{players.player1_name ? players.player1_name : 'Player 1'}</span>
                                :
                                <span className="badge badge-pill badge-danger">{players.player2_name ? players.player2_name : 'Player 2'}</span>}
                                WINS!
                            </div>
                            :
                            <div className='alert alert-success mt-2'>{players.player2 === 'O' ?
                                <span className="badge badge-pill badge-danger">{players.player2_name ? players.player2_name : 'Player 2'}</span>
                                :
                                <span className="badge badge-pill badge-primary">{players.player1_name ? players.player1_name : 'Player 1'}</span>}
                                WINS!
                            </div>

                }
            </div>
        </div>
    )
});