// import './App.css';
import React from "react";
import {TodoProvider} from '../TodoContext';
import { AppUI } from './AppUI';

// const deafaultTodos = [
//   {text: 'cortar cebolla', completed: true},
//   {text: 'Tomar el curso', completed: false},
//   {text: 'Llorar con la llorona', completed: false},
// ];

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
