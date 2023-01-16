import { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

// The useReducer Hook accepts two arguments. useReducer(<reducer>, <initialState>)
// The reducer function contains your custom state logic and the initialState can be 
// a simple value but generally will contain an object.
// The useReducer Hook returns the current stateand a dispatchmethod.
function UseReducerDemo() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
 
  // This is just the logic to keep track of the todo complete status.
  // All of the logic to add, delete, and complete a todo could be contained
  // within a single useReducer Hook by adding more actions.
  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

export default UseReducerDemo