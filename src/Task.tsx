import { Checkbox, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React, { ChangeEvent } from 'react';
import { EditableSpan } from './EditableSpan';
import { TaskType } from './Todolist';

type TaskPropsType = {
  task: TaskType;
  removeTask: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newIsDoneValue: boolean) => void;
  changeTaskTitle: (taskId: string, newValue: string) => void;
};

export const Task = React.memo(
  ({
    task,
    removeTask,
    changeTaskStatus,
    changeTaskTitle,
  }: TaskPropsType) => {
    console.log('Task Called');

   const onClickHandler = () => removeTask(task.id)

   const onChangeHandler= (e:ChangeEvent<HTMLInputElement>) => {
      let newIsDoneValue = e.currentTarget.checked;
      changeTaskStatus(task.id, newIsDoneValue)
   } 

   const onTitleChangeHandler = (newValue: string) => {
      changeTaskTitle(task.id, newValue)
   }

    return (
      <div key={task.id} className={task.isDone ? 'is-done' : ''}>
        <Checkbox
          checked={task.isDone}
          color="primary"
          onChange={onChangeHandler}
        />

        <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
          <Delete />
        </IconButton>
      </div>
    );
  }
);
