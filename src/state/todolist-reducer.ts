import { FilterValuesType, TodoListType } from './../App';
import React from 'react'
import { AcUnitTwoTone } from '@material-ui/icons';
import { v1 } from 'uuid';

type RemoveToDoListAT = {
    type: "Remove-ToDoList"
    toDoListID: string
}

type AddToDoListAT = {
    type: "Add-ToDoList"
    title: string
}

type ChangeToDoListTitleAT = {
    type: "ChangeTitle-ToDoList"
    title: string
    toDoListID: string
}

type ChangeToDoListFilterAT = {
    type: "ChangeFilter -ToDoList"
    newFilterValue: FilterValuesType,
    toDoListID: string
}


type ActionType =  RemoveToDoListAT | AddToDoListAT | ChangeToDoListTitleAT | ChangeToDoListFilterAT

export const todolistReducer = (toDoLists: Array<TodoListType>, action: ActionType)  => {
    switch(action.type){
        case "Remove-ToDoList": 
            return toDoLists.filter( tl => tl.id !== action.toDoListID)
        case "Add-ToDoList": 
            const newToDoListID = v1();
            const newToDoList: TodoListType = {
            id: newToDoListID,
            title: action.title,
            filter: 'all',
        };
            return ([...toDoLists, newToDoList]);
        case "ChangeTitle-ToDoList":
            return toDoLists.map((tl) => tl.id === action.toDoListID ? { ...tl, title: action.title } : tl);
        case "ChangeFilter -ToDoList":
            return toDoLists.map((tl) =>tl.id === action.toDoListID ? { ...tl, filter: action.newFilterValue } : tl);
        default: 
            return toDoLists
    }
}

export const removeToDoListAc = (id: string): RemoveToDoListAT => {
    return {type:"Remove-ToDoList", toDoListID:id }
}