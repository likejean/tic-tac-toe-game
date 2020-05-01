import React from 'react';
import {connect} from 'react-redux';
import './style.css';


export default connect()(() => {
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
                            id='player1'
                            className="form-control"
                            onChange={e => {
                                {
                                    {}
                                }
                            }}
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
                            id='player2'
                            className="form-control"
                            onChange={e => {
                                {}
                            }}
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
});