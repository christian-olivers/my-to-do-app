import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import './TodoHeader.css';

function TodoHeader({searchValue, setSearchValue ,total, completed}) {
    return(
        <div className="TodoHeader">
            <p>Mis tareas</p>
            <TodoCounter />
            <TodoSearch />
        </div>
    );
}

export { TodoHeader };
