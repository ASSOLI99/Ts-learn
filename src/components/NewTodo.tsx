import { useRef } from "react";
import classes from "./NewToDo.module.css";
const NewTodo: React.FC<{ onAddTitle: (title: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTitle = todoInputRef.current!.value;
    if (enteredTitle.trim().length === 0) {
      return;
    }
    props.onAddTitle(enteredTitle);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="title">Todo Title</label>
      <input type="text" id="title" ref={todoInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
