import React from 'react';
import { TodoContext } from '../TodoContext';
import './NoFoundTodo.css'

function NoFoundTodo() {
    const { searchValue } = React.useContext(TodoContext)

    return(
        <div className='ContentNoFound'>
            <p>No se encontraron reultados para</p>
            <p>"{ searchValue }".</p>
        </div>
    );
}

export { NoFoundTodo };