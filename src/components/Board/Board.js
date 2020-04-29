import React from 'react';
import './style.css';
import Square from './Square/Square';

export default props => {
    //Get this from redux...
    const board = [...Array(9).keys()].map(i => i + 1);
    return (
        <div id='board' className='mt-5 d-flex flex-wrap'>
            {board.map((el,id) => <Square key={id} seq={el}/>)}
        </div>
    )
}