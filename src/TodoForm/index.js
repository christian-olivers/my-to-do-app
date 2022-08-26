import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';


function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit} className="TodoForm">
            <label className='FormTitleTodo' tabIndex={0}>Escribe tu nueva Tarea</label>
            <textarea  className='FormTextArea'
                value={newTodoValue}
                onChange={onChange}
                placeholder='sacar al perro a las 6:00'
            ></textarea>
            <div className='ButtonContent'>
                <button
                    onClick={onCancel}
                    type="button"
                    className='FormButtonAction CancelButton'
                >Cancelar</button>
                <button 
                    type="submit"
                    className='FormButtonAction addButton'
                >Agregar</button>
            </div>
        </form>
    );
};

export { TodoForm };