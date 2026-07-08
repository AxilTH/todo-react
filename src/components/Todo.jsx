import { useState } from "react";
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const [tasks, setTasks] = useState([
    { id: "task-1", title: "Задача 1", isDone: false },
    { id: "task-2", title: "Задача 2", isDone: true },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure that you want to delete all tasks?');

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks((tasks) => tasks.map((task) => task.id === taskId ? {...task, isDone} : task));
  };

  const filterTasks = (query) => {
    console.log('Поиск:', query);
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm 
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm onSearchInput={filterTasks}/>
      <TodoInfo
        total={tasks.length}
        done={tasks.filter((task) => task.isDone).length}
        onDeleteAllButtonClick={deleteAllTasks}
      />
      <TodoList 
        tasks={tasks} 
        onDeleteTaskButtonClick={deleteTask}
        onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
  )
};

export default Todo;