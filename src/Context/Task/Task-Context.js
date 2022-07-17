import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../../Pages";

const TaskContext = createContext();
const useTask = () => useContext(TaskContext);

const TaskProvider = ({ children }) => {
  const initialState = {
    tasks: [],
    tags: ["Read Book", "Homework", "Drawing"],
    editTask: false,
    updateTask: [],
  };
  const [taskState, taskDispatch] = useReducer(taskReducer, initialState);
  console.log("initials state", taskState);

  return (
    <TaskContext.Provider value={{ taskState, taskDispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
export { useTask, TaskProvider };
