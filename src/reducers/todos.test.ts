/**
 * test scenario for todosReducer
 *
 * - todosReducer function:
 *  - should return the initial state
 *  - should return the todos with the new todo when given by ADD_TODO action
 *  - should return the todos with the update todo when given by UPDATE_TODO action
 *  - should return the todos with the delete todo when given by DELETE_TODO action
 *
 */

import { Action, initialTodos, todosReducer } from "./todos";
import type { Todo } from "../types/Todo";

describe("todosReducer function", () => {
  it("should return the initial state", () => {
    const initialState: Todo[] = JSON.parse(
      localStorage.getItem("todos") || "[]",
    );
    expect(initialTodos).toEqual(initialState);
  });

  it("should return the todos with the new todo when given by ADD_TODO action", () => {
    const initialState = [
      {
        id: "todo-1",
        name: "Todo Test 1",
        isComplete: false,
      },
    ];

    const action = {
      type: "ADD_TODO",
      payload: {
        id: "todo-2",
        name: "Todo Test 2",
        isComplete: false,
      },
    } as Action;

    const nextState = todosReducer(initialState, action);
    expect(nextState).toEqual([...initialState, action.payload]);
  });

  it("should return the todos with the update todo when given by UPDATE_TODO action", () => {
    const initialState = [
      {
        id: "todo-1",
        name: "Todo Test 1",
        isComplete: false,
      },
      {
        id: "todo-2",
        name: "Todo Test 2",
        isComplete: false,
      },
    ];

    const action = {
      type: "UPDATE_TODO",
      payload: {
        id: "todo-1",
      },
    } as Action;

    const nextState = todosReducer(initialState, action);
    const updateTodo = initialState.map((todo: Todo) =>
      todo.id === action.payload.id
        ? { ...todo, isComplete: !todo.isComplete }
        : todo,
    );

    expect(nextState).toEqual(updateTodo);
  });

  it("should return the todos with the delete todo when given by DELETE_TODO action", () => {
    const initialState = [
      {
        id: "todo-1",
        name: "Todo Test 1",
        isComplete: false,
      },
      {
        id: "todo-2",
        name: "Todo Test 2",
        isComplete: false,
      },
    ];

    const action = {
      type: "DELETE_TODO",
      payload: {
        id: "todo-1",
      },
    } as Action;

    const nextState = todosReducer(initialState, action);
    const deleteTodo = initialState.filter(
      (todo) => todo.id !== action.payload.id,
    );

    expect(nextState).toEqual(deleteTodo);
  });
});
