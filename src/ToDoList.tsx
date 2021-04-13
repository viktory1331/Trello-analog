import { Button, Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { AddItemForm } from './AddItemForm';
import { FilterValuesType, TaskType } from './App';
import { EditableSpan } from './EditableSpan';

type ToDoListPropsType = {
  id: string;
  title: string;
  toDoListFilter: FilterValuesType;
  tasks: Array<TaskType>;
  removeTask: (taskID: string, toDoListID: string) => void;
  changeToDoListFilter: (
    newFilterValue: FilterValuesType,
    toDoListID: string
  ) => void;
  addTask: (title: string, toDoListID: string) => void;
  changeTaskStatus: (
    taskID: string,
    newIsDoneValue: boolean,
    toDoListID: string
  ) => void;
  changeTaskTitle: (taskID: string, title: string, toDoListID: string) => void;
  changeToDoListTitle: (title: string, toDoListID: string) => void;
  removeToDoList: (toDoListID: string) => void;
};

function ToDoList(props: ToDoListPropsType) {
  //
  const tasks = props.tasks.map((t) => {
    const removeTask = () => props.removeTask(t.id, props.id);
    const changeStatus = (e: ChangeEvent<HTMLInputElement>) =>
      props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);
    const changeTaskTitle = (title: string) =>
      props.changeTaskTitle(t.id, title, props.id);
    return (
      <li key={t.id}>
        <Checkbox
          color={'primary'}
          checked={t.isDone}
          onChange={changeStatus}
        />
        <EditableSpan title={t.title} changeTitle={changeTaskTitle} />
        <IconButton onClick={removeTask}>
          <Delete />
        </IconButton>
      </li>
    );
  });
  const setAllFilterValue = () => props.changeToDoListFilter('all', props.id);
  const setActiveFilterValue = () =>
    props.changeToDoListFilter('active', props.id);
  const setCompletedFilterValue = () =>
    props.changeToDoListFilter('complited', props.id);
  const removeToDoList = () => props.removeToDoList(props.id);
  const addTask = (title: string) => props.addTask(title, props.id);
  const changeToDoListTitle = (title: string) =>
    props.changeToDoListTitle(title, props.id);

  const allBtnClass = props.toDoListFilter === 'all' ? 'active-filter' : '';
  const actBtnClass = props.toDoListFilter === 'active' ? 'active-filter' : '';
  const cmplBtnClass =
    props.toDoListFilter === 'complited' ? 'active-filter' : '';

  return (
    <div>
      <div>
        <h3>
          <EditableSpan title={props.title} changeTitle={changeToDoListTitle} />
          <IconButton onClick={removeToDoList}>
            <Delete />
          </IconButton>
        </h3>
        <AddItemForm addItem={addTask} />
        <ul style={{ listStyle: 'none', padding: '0px' }}>{tasks}</ul>
        <div>
          <Button
            style={{ marginRight: '5px' }}
            size={'small'}
            color={'primary'}
            variant={props.toDoListFilter === 'all' ? 'outlined' : 'contained'}
            onClick={setAllFilterValue}
          >
            All
          </Button>
          <Button
            style={{ marginRight: '5px' }}
            size={'small'}
            color={'primary'}
            variant={
              props.toDoListFilter === 'active' ? 'outlined' : 'contained'
            }
            onClick={setActiveFilterValue}
          >
            Active
          </Button>
          <Button
            style={{ marginRight: '5px' }}
            size={'small'}
            color={'primary'}
            variant={
              props.toDoListFilter === 'complited' ? 'outlined' : 'contained'
            }
            onClick={setCompletedFilterValue}
          >
            Complited
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
