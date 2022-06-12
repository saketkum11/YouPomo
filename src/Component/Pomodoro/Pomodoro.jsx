import { useEffect, useState } from "react";
import { usePomo } from "../../Context/Pomodoro/Pomodoro-Context";
import { computeTime } from "../../servies/servies";

const Pomodoro = () => {
  const { pomodoroDetails } = usePomo();
  const { title, tag, description, time } = pomodoroDetails;
  const milisecond = 1000;
  const [progressValue, setProgressValue] = useState(time * 60);
  const [timerFlag, setTimerFlag] = useState(false);
  let { minutes, second } = computeTime(progressValue);

  useEffect(() => {
    if (timerFlag && progressValue > 0) {
      let interval = setInterval(() => {
        setProgressValue((value) => value - 1);
      }, milisecond);
      return () => clearInterval(interval);
    }
  }, [progressValue, timerFlag]);

  const pauseTimer = () => {
    setTimerFlag((flag) => !flag);
  };

  const startTimer = () => {
    setTimerFlag((flag) => !flag);
  };
  const resetTimer = () => {
    setProgressValue(time * 60);
    setTimerFlag(false);
  };

  return (
    <>
      <section className="grid grid-cols-2 border-8 ">
        <section className="p-4 flex flex-col items-center my-10 justify-center ">
          <div className="h-72 w-72 bg-red-500 rounded-full border-8 flex flex-col justify-center ">
            <div className="flex justify-evenly items-center ">
              <span className=" text-white font-bold text-3xl">
                {minutes} m
              </span>
              <span className=" text-white font-bold text-3xl">:</span>
              <span className=" text-white font-bold text-3xl">{second} s</span>
            </div>
            <div className="mt-3">
              <p className=" text-white  ">Out of {time} min</p>
            </div>
          </div>
          <div className="">
            <div className="my-3">
              {timerFlag ? (
                <button
                  onClick={() => pauseTimer()}
                  className="bg-gray-300  px-5 py-2"
                >
                  <i className="fa-solid fa-pause text-indigo-700 "></i> Pause
                </button>
              ) : (
                <button
                  onClick={() => startTimer()}
                  className="bg-indigo-700 text-white px-5 py-2  mr-2"
                >
                  <i className="fa-solid fa-play"></i> Start
                </button>
              )}
            </div>
            <div className="">
              <button
                onClick={() => resetTimer()}
                className="bg-yellow-200 w-full text-bold text-lg text-white px-5 py-2"
              >
                Reset
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start p-7 my-10 h-100">
          <span className="text-2xl font-bold ">{title}</span>
          <p className="text-justify my-5">{description}</p>
          <span className="text-lg font-bold">Tag:</span>
          <div className="  flex w-full justify-start flex-wrap items-center ">
            <span className=" p-3 bg-gray-900 text-white rounded-2xl my-3">
              {tag}
            </span>
          </div>
        </section>
      </section>
    </>
  );
};
export { Pomodoro };
