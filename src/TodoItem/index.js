import React from 'react';
import { CheckBox } from '../CheckBox';
import { DelateItem } from "../DelateItem";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem" aria-label='tarea'>
            <span className='TodoItem-Check' onClick= {props.onComplete}>
                <CheckBox completed={props.completed} />
                
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {props.text} </p>
            <span className='TodoItem-Close' onClick={props.onDelete}>
                <DelateItem/>
            </span>
        </li>
    );
}

export { TodoItem };