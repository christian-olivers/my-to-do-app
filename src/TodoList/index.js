import React from 'react';
import './TodoList.css';

function TodoList(props) {
    return (
        <section className='TodoList' aria-label="Seccion principal">
            <ul>
                {props.children}
            </ul>
        </section>
        
    );
}

export { TodoList };