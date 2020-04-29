import React from 'react';
import cross from '../../../../assets/images/cross.png'
import './style.css';
export default props => {
    return (
        <div className='cross symbol text-center'>
            <img className='cross' src={cross} alt='cross'/>
        </div>
    )
}