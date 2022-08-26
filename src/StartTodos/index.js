import React from 'react';
import './StartTodos.css';

function StartTodos() {
    return(
        <div className='ContentStart'>
            <p> <span className='callAction'> Vamos!! </span> <br/> Crea tu primer tarea</p>
            <i className="ArrowLeftDown"></i>
        </div>
    );
}

export { StartTodos };