import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {

    const onClickButton = () => {
        props.setOpenModal(!props.openModal);
    }

    return(
        <button
        className='CreateTodoButton'
        onClick={ onClickButton }
        >
            <span id='p' className={`TextButtton ${props.openModal && 'TextButtton--rotate'}`}>+</span>
        </button>
    );
}

export { CreateTodoButton };