import React from "react";

import Header from './Components/Header';
import TodoItem from './Components/TodoItem';
import Button from './Components/Button';
import CounterComponent  from "./Components/CounterCompnent";

import "./style.css";

const App = () => {
  return (
    <div className = "todo-container">
        <CounterComponent/>
        <Header text = "Tadoww"/>
        <TodoItem text = "Eat"/>
        <TodoItem completed = {true} text = "Code"/>
        <TodoItem text  = "Play"/>
        <TodoItem text = "Repeat"/>
        <TodoItem text = "Again"/>
        <Button />
    </div>
  );
};

export default App;