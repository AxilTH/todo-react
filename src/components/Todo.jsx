import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
import TodoInfo from "./TodoInfo"
import TodoList from "./TodoList"

const Todo = () => {
  const tasks = [
    { id: "task-1", title: "Задача 1", isDone: false },
    { id: "task-2", title: "Задача 2", isDone: true },
  ];

  const deleteAllTasks = () => {
    console.log('Delete all tasks');
  };

  const deleteTask = (taskId) => {
    console.log(`Удаляем задачу с id: ${taskId}`);
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача с id: ${taskId} отмечена как ${isDone}`);
  };

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`);
  }

  const addTask = () => {
    console.log('Задача добавлена!');
  }

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm addTask={addTask}/>
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