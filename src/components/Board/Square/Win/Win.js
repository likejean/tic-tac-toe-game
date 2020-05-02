import React from 'react';
import zeroWin from '../../../../assets/images/o_win.png';
import crossWin from '../../../../assets/images/x_win.png';
import './style.css';
export default props => {
    const { winner } = props;
    return (
        <div className='cross symbol text-center'>
            <img className='cross' src={ winner ==='X' ? crossWin : zeroWin} alt='cross'/>
        </div>
    )
}