export const ADD_TODOS = "ADD_TODOS";
export const REMOVE_TODOS = "REMOVE_TODOS";


export function addTodos (task) {
  return {
    type: ADD_TODOS,
    task
  }
}

export function removeTodos (id) {
  return {
    type: REMOVE_TODOS,
    id
  }
}