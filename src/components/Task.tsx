import React from "react";
import Todo from "../models/todo";
import classes from "./Task.module.css";
const Task: React.FC<{
  task: Todo;
  removeToDo: (id: string) => void;
}> = (props) => {
  const removeTaskHandler = () => {
    props.removeToDo(props.task.id);
  };
  return (
    <li onClick={removeTaskHandler} className={classes.item}>
      {props.task.title}
    </li>
  );
};

export default Task;
