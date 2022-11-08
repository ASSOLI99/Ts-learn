import React from "react";
import Todo from "../models/todo";
import Task from "./Task";
import classes from "./Todos.module.css";
const Todos: React.FC<{ items: Todo[]; removeToDo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Task key={item.id} removeToDo={props.removeToDo} task={item} />
      ))}
    </ul>
  );
};

export default Todos;
