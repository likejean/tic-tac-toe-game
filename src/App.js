import React from 'react';
import './App.css';
import Boards from './components/Board/Board'

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 offset-md-3'>
                    <Boards/>
                </div>
            </div>

        </div>
    );
}

export default App;
