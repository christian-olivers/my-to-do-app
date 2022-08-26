
// ¿Cuándo se recomienda emplear React Context?
// Estado global
// Tema
// Configuración de la app
// Autenticación de usuario
// Configuración de usuario
// Lenguaje preferido
// Colección de servicios

import React from 'react';
import {useState} from 'react';
import { useLocalStorage } from './useLocalStoraje';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error, 
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = React.useState(false); 
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    
    let searchedTodos = [];

    if( !(searchValue.length >= 1)) {
    searchedTodos = todos;
    } else {
        searchedTodos = todos.filter( todo  => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newItem = [...todos];
        newItem.push({
            completed: false,
            text
        });
        saveTodos(newItem);
        // alert('funciona')
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        if(!todos[todoIndex].completed){
            todos[todoIndex].completed= true;
        }else {
            todos[todoIndex].completed= false;
        }
        saveTodos(newItem);
        // alert('funciona')
    };
    
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newItem = [...todos];
        newItem.splice( todoIndex, 1); //eliminar el elemento del arrrglo
        saveTodos(newItem);
        // alert('funciona')
    };

    return(
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider};