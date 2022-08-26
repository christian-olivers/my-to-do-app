import React from 'react';
import { TodoItem } from '../TodoItem';
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoHeader } from "../TodoHeader";
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { LoadinTodos } from '../LoadinTodos';
import { ErrorTodos } from '../ErrorTodos';
import { StartTodos } from '../StartTodos';
import { TodoFooter } from '../TodoFooter';
import { NoFoundTodo } from '../NoFoundTodo';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal,
        searchValue,
    } = React.useContext(TodoContext)
    
    return (
        <React.Fragment>
            {/* <TodoContext.Consumer> 
             { ({searchValue, setSearchValue, totalTodos, completedTodos }) => ( */}
                <TodoHeader 
                // searchValue = {searchValue}
                // setSearchValue = {setSearchValue}
                // total = {totalTodos}
                // completed = {completedTodos}
                />
            {/* )} 
            </TodoContext.Consumer>  */}
            <TodoList>
                { error && <ErrorTodos/>}
                { loading && <LoadinTodos/>}
                {(!loading && !searchedTodos.length &&searchValue.length < 1) && <StartTodos/>}
                {(searchedTodos.length <= 0 && searchValue.length >= 1) && <NoFoundTodo/>}
                { searchedTodos.map(todo =>  
                    <TodoItem  
                    key={ todo.text } 
                    text={ todo.text } 
                    completed={ todo.completed }
                    onComplete = { () => completeTodo(todo.text) }
                    onDelete = { () => deleteTodo(todo.text) }
                    />
                )}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            
            <CreateTodoButton 
                setOpenModal={ setOpenModal }
                openModal = { openModal }
            />
            <TodoFooter/>
        </React.Fragment>
    );
}

export { AppUI }