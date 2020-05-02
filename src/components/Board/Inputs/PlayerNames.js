import React from 'react';
import {connect} from 'react-redux';
import './style.css';
import {changePlayer1Name, changePlayer2Name} from "../../../actions/playerAction";


export default connect(
    ({result, board, players}) => ({result, board, players}),
    dispatch => (
        {
            changePlayer1Name: e => dispatch(changePlayer1Name(e)),
            changePlayer2Name: e => dispatch(changePlayer2Name(e))
        }
    ))(props => {
    const {players: {player1_name, player2_name}, changePlayer1Name, changePlayer2Name} = props;
    return (
        <React.Fragment>
            <div className='container inputs'>
                <div className='row'>
                    <div className="col-6 input-group input-group-md mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Player 1</span>
                        </div>
                        <input
                            type="text"
                            name='player1_name'
                            value={player1_name}
                            className="form-control"
                            onChange={changePlayer1Name}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                    <div className="col-6 input-group input-group-md mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Player 2</span>
                        </div>
                        <input
                            type="text"
                            name='player2_name'
                            value={player2_name}
                            className="form-control"
                            onChange={changePlayer2Name}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
});