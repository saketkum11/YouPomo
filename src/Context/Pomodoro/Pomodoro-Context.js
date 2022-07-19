import { createContext, useContext, useState } from "react";

const PomodoroContext = createContext();
const usePomo = () => useContext(PomodoroContext);

const PomodoroProvider = ({ children }) => {
  const [pomodoroDetails, setPomodoroDetails] = useState([]);

  return (
    <PomodoroContext.Provider value={{ pomodoroDetails, setPomodoroDetails }}>
      {children}
    </PomodoroContext.Provider>
  );
};
export { usePomo, PomodoroProvider };
