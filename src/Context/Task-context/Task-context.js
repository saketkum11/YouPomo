import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../../Pages";

const TaskContext = createContext();
const useTask = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const initialState = {
    task: [],
    tag: ["Read Book", "Homework", "Drawing"],
  };

  const [taskState, taskDispatch] = useReducer(taskReducer, initialState);
  console.log("initial state", taskState);
  return (
    <TaskContext.Provider value={{ taskDispatch, taskState }}>
      {children}
    </TaskContext.Provider>
  );
};
export { useTask, TaskProvider };
