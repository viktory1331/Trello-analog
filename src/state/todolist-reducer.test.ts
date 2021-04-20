import React from 'react'
import { todolistReducer, removeToDoListAc } from './todolist-reducer';
import {v1} from 'uuid';
import { FilterValuesType, TodoListType } from '../App';


test('correct todolist should be removed', () => {
   let todolistId1 = v1();
   let todolistId2 = v1();

   const startState: Array<TodoListType> = [
       {id: todolistId1, title: "What to learn", filter: "all"},
       {id: todolistId2, title: "What to buy", filter: "all"}
   ]

   const endState = todolistReducer(startState, removeToDoListAc(todolistId1))

   expect(endState.length).toBe(1);
   expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
 
    let newTodolistTitle = "New Todolist";
 
    const startState: Array<TodoListType>  = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
 
    const endState = todolistReducer(startState, { type: "Add-ToDoList", title: newTodolistTitle})
 
    expect(endState.length).toBe(3);
    expect(endState[2].title).toBe(newTodolistTitle);
 });

 test('correct todolist should change its name', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
 
    let newTodolistTitle = "New Todolist";
 
    const startState:Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = {
        type: "ChangeTitle-ToDoList" as const,
        toDoListID: todolistId2,
        title: newTodolistTitle
    };
 
    const endState = todolistReducer(startState, action);
 
    expect(endState[0].title).toBe("What to learn");
    expect(endState[1].title).toBe(newTodolistTitle);
});

test('correct filter of todolist should be changed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();


    let  newFilter: FilterValuesType = "complited" ;
 
    const startState: Array<TodoListType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
 
    const action = {
        type: "ChangeFilter -ToDoList" as const ,
        newFilterValue:  newFilter,
        toDoListID: todolistId2
        
    };
 
    const endState = todolistReducer(startState, action);
 
    expect(endState[0].filter).toBe("all");
    expect(endState[1].filter).toBe( newFilter);
 });
 
 


 