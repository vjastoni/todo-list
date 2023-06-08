import { Fragment, useState } from 'react';
import './App.css';
import AddTask from '../components/add-task/add-task';
import Task from '../components/list/task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const AddTaskHandler = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTaskHandler = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const completeTaskHandler = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <Fragment>
      <div className="container">
        <AddTask onAdd={AddTaskHandler} onChange={handleChange} />
        <div>
          {todoList.map((task) => {
            return (
              <Task
                onComplete={completeTaskHandler}
                deleteTaskHandler={deleteTaskHandler}
                key={task.id}
                taskName={task.taskName}
                id={task.id}
                completed={task.completed}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
