import axios from 'axios'
import React from 'react'

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.1/',
   withCredentials: true,
   headers: {
      'API-KEY': '664b36ce-5bbb-4afc-9ef0-ebea28b98d90'
   }
})

type TodolistType = {
   id: string
   addedDate: string
   order: number
   title: string
}

type CommonResponseType<T> = {
   resultCode: number,
   messages: Array<string>,
   fieldsErrors: Array<string>,
   data: T
}


export const todoApi = {
   getToDoLists() {
      return instance
         .get<CommonResponseType<{ item: TodolistType }>>('todo-lists')
   },
   createToDo(title: string) {
      return instance
         .post<CommonResponseType<{ item: TodolistType }>>(
            'todo-lists',
            { title: 'React' },
         )
   },
   deleteToDo(todolistId: string) {
      return instance
         .delete<CommonResponseType<{}>>(
            `todo-lists/${todolistId}`,
         )
   },
   updateToDoTitle(todolistId: string, title: string) {
      return axios
         .put<CommonResponseType<{}>>(
            `todo-lists/${todolistId}`,
            { title: 'REDUX' },
         )
   }
}