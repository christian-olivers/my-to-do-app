import React from 'react';
import './TodoSearch.css';
import {TodoContext} from '../TodoContext';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    const onSerchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <input placeholder="Encuentra tu tarea" 
            onChange = {onSerchValueChange}
            value={searchValue}
        ></input>
    );
}

export { TodoSearch };