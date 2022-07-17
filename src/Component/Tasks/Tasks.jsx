import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePomo } from "../../Context/Pomodoro/Pomodoro-Context";
import { useTask } from "../../Context/Task/Task-Context";
import { ACTION_TYPE } from "../../Reducer/util";
import { EditTask } from "../EditTask/EditTask";

const Tasks = () => {
  const { taskState, taskDispatch } = useTask();
  const { tasks, tags } = taskState;
  const { setPomodoroDetails } = usePomo();
  const navigate = useNavigate();
  const [updateFlag, setUpdateFlag] = useState(false);
  const taskHandler = (task) => {
    navigate("/");
    setPomodoroDetails(task);
  };
  const deleteTask = (id) => {
    const deleted = [...tasks].filter((task) => task._id !== id);
    taskDispatch({
      type: ACTION_TYPE.REMOVE_TASK,
      payload: deleted,
    });
  };

  const filterTask = () => {};
  return (
    <>
      <section className="grid col-start-1  border-8 p-4">
        <div className="flex">
          <span className="text-2xl font-bold"> To-do list</span>
        </div>
        <div className=" flex  flex-wrap justify-start items-center">
          <span className="mr-2">All Tags :</span>
          {tags.map((tag) => {
            return (
              <button
                onClick={filterTask}
                key={tag}
                className="mr-3 bg-gray-900 text-white px-3 py-1 rounded-2xl my-3"
              >
                {tag}
              </button>
            );
          })}
        </div>
        <aside className="flex flex-col h-full justify-between">
          {tasks.length === 0
            ? "No task created"
            : tasks.map((task) => {
                const { _id, title, tag } = task;
                return (
                  <div className="flex justify-between" key={_id}>
                    <div>
                      <button>
                        <i className="fa-solid fa-list-check"></i>
                      </button>
                      <span
                        onClick={() => taskHandler(task)}
                        className="cursor-pointer ml-3 text-lg hover:text-pink-900"
                      >
                        {title}
                      </span>
                      <span className="bg-gray-900 text-white font-sm px-3 py-1 rounded-2xl my-3">
                        {tag}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setUpdateFlag((flag) => !flag);
                          taskDispatch({
                            type: ACTION_TYPE.EDIT_TASK,
                            payload: task,
                          });
                        }}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      {updateFlag && (
                        <EditTask
                          updateFlag={updateFlag}
                          setUpdateFlag={setUpdateFlag}
                          task={task}
                        />
                      )}
                      <button onClick={() => deleteTask(_id)}>
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
        </aside>
      </section>
      <ToastContainer autoClose={2000} />
    </>
  );
};
export { Tasks };
