import { useEffect, useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos") || ""));
      console.log(localStorage.getItem("todos"));
    }
  }, []);

  const addToDoHandler = (title: string) => {
    setTodos((prevArray) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(prevArray.concat(new Todo(title)))
      );
      return prevArray.concat(new Todo(title));
    });
  };
  const removeToDo = (id: string): void => {
    setTodos((prevArray) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(prevArray.filter((todo) => todo.id !== id))
      );
      return prevArray.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="App">
      <NewTodo onAddTitle={addToDoHandler} />
      <Todos items={todos} removeToDo={removeToDo} />
    </div>
  );
}

export default App;
