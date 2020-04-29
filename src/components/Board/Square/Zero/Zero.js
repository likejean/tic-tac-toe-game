import React from 'react';
import zero from "../../../../assets/images/zero.png";
import './style.css';
export default props => {
    return (
        <div className='zero symbol text-center'>
            <img className='zero' src={zero} alt='zero'/>
        </div>
    )
}