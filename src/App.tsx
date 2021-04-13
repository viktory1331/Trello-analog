import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { v1 } from 'uuid';
import { AddItemForm } from './AddItemForm';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValuesType = 'all' | 'active' | 'complited';

export type TodoListType = {
  id: string;
  title: string;
  filter: FilterValuesType;
};

export type TasksStateType = {
  [key: string]: Array<TaskType>;
};

function App() {
  const toDoListID_1 = v1();
  const toDoListID_2 = v1();

  const [toDoLists, setToDoLists] = useState<Array<TodoListType>>([
    //хранение нескольких тудулистов
    { id: toDoListID_1, title: 'what to learn', filter: 'all' },
    { id: toDoListID_2, title: 'what to buy', filter: 'all' },
  ]);

  let [tasks, setTask] = useState<TasksStateType>({
    [toDoListID_1]: [
      { id: v1(), title: 'HTML', isDone: true },
      { id: v1(), title: 'CSS', isDone: true },
      { id: v1(), title: 'React', isDone: false },
    ],
    [toDoListID_2]: [
      { id: v1(), title: 'Milk', isDone: true },
      { id: v1(), title: 'Beer', isDone: true },
      { id: v1(), title: 'Water', isDone: false },
    ],
  });

  function removeTask(taskID: string, toDoListID: string) {
    tasks[toDoListID] = tasks[toDoListID].filter((t) => t.id !== taskID);
    setTask({ ...tasks });
  }
  function changeToDoListFilter(
    newFilterValue: FilterValuesType,
    toDoListID: string
  ) {
    const updatedToDoLists = toDoLists.map((tl) =>
      tl.id === toDoListID ? { ...tl, filter: newFilterValue } : tl
    );
    setToDoLists(updatedToDoLists);
  }
  function getTasksForToDoList(toDoList: TodoListType): Array<TaskType> {
    switch (toDoList.filter) {
      case 'active':
        return tasks[toDoList.id].filter((t) => t.isDone === false);
      case 'complited':
        return tasks[toDoList.id].filter((t) => t.isDone === true);
      default:
        return tasks[toDoList.id];
    }
  }
  function addTask(title: string, toDoListID: string) {
    const newTask = {
      id: v1(),
      //title: title,
      title,
      isDone: false,
    };

    const updatedTasks = [newTask, ...tasks[toDoListID]];
    setTask({ ...tasks, [toDoListID]: updatedTasks });
  }
  function changeTaskStatus(
    taskID: string,
    newIsDoneValue: boolean,
    toDoListID: string
  ) {
    const updatedTasks = tasks[toDoListID].map((t) =>
      t.id === taskID ? { ...t, isDone: newIsDoneValue } : t
    );
    setTask({ ...tasks, [toDoListID]: updatedTasks });
  }

  function changeTaskTitle(taskID: string, title: string, toDoListID: string) {
    const updatedTasks = tasks[toDoListID].map((t) =>
      t.id === taskID ? { ...t, title } : t
    );
    setTask({ ...tasks, [toDoListID]: updatedTasks });
  }

  function addToDoList(title: string) {
    const newToDoListID = v1();
    const newToDoList: TodoListType = {
      id: newToDoListID,
      title,
      filter: 'all',
    };
    setToDoLists([...toDoLists, newToDoList]);
    setTask({ ...tasks, [newToDoListID]: [] });
  }

  function changeToDoListTitle(title: string, toDoListID: string) {
    const updatedToDoLists = toDoLists.map((tl) =>
      tl.id === toDoListID ? { ...tl, title } : tl
    );
    setToDoLists(updatedToDoLists);
  }

  function removeToDoList(toDoListID: string) {
    const updatedTasks = toDoLists.filter((tl) => tl.id !== toDoListID);
    setToDoLists(updatedTasks);
    delete tasks[toDoListID];
  }
  return (
    <div className="App">
      <AddItemForm addItem={addToDoList} />
      {toDoLists.map((tl) => {
        return (
          <ToDoList
            key={tl.id}
            id={tl.id}
            title={tl.title}
            tasks={getTasksForToDoList(tl)}
            removeTask={removeTask}
            changeToDoListFilter={changeToDoListFilter}
            changeTaskTitle={changeTaskTitle}
            toDoListFilter={tl.filter}
            changeToDoListTitle={changeToDoListTitle}
            addTask={addTask}
            changeTaskStatus={changeTaskStatus}
            removeToDoList={removeToDoList}
          />
        );
      })}
    </div>
  );
}

export default App;
