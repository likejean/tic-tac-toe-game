import React from 'react';
import Cross from './Cross/Cross';
import Zero from './Zero/Zero'

export default props => {
    return (
        <div className="cell">
            {props.seq % 2 ? <Cross /> : <Zero />}
        </div>
    )
}