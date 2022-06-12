import { createContext, useContext, useState } from "react";

const PomodoroContext = createContext();
const usePomo = () => useContext(PomodoroContext);

const PomodoroProvider = ({ children }) => {
  const [pomodoroDetails, setPomodoroDetails] = useState([]);
  console.log("from pomodoro page", pomodoroDetails);
  return (
    <PomodoroContext.Provider value={{ pomodoroDetails, setPomodoroDetails }}>
      {children}
    </PomodoroContext.Provider>
  );
};
export { usePomo, PomodoroProvider };
