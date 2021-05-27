import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { todoApi } from '../api/todolist-api';

export default {
  title: 'API',
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todoApi.getToDoLists().then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    let title = 'vue';
    todoApi.createToDo(title).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = '4ef70866-db00-4c2e-8eb0-4b167ac01e8c';
    todoApi.deleteToDo(todolistId).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = '4e9d9791-61b1-4d86-8010-cd3d1ef7b494';
    let title = 'VUE';
    todoApi.updateToDoTitle(todolistId, title).then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};
