import { useState } from "react";
import { useTask } from "../../Context/Task-context/Task-Context";
import { ACTION_TYPE } from "../../Reducer/util";
import { v4 as uuid } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ModalTask = ({ setModalTaskFlag }) => {
  const [message, setMessage] = useState({
    success: "successfully added",
    warning: "error",
  });

  const notify = (msg) => toast.success(msg.success);
  const navigate = useNavigate();
  const { taskDispatch } = useTask();
  const [taskDetails, setTaskDetails] = useState({
    _id: uuid(),
    title: "",
    tag: "",
    description: "",
    time: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    taskDispatch({
      type: ACTION_TYPE.SUMBIT_TASK,
      payload: taskDetails,
    });
    notify(message);
    setModalTaskFlag((flag) => !flag);
  };

  const taskHandler = (event) => {
    setTaskDetails({ ...taskDetails, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div
        className="relative z-10 w-1/2"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed z-10  inset-0 overflow-y-auto">
          <div className="flex  items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <form
                  onSubmit={(event) => {
                    changeHandler(event);
                  }}
                >
                  <div className="my-2 ">
                    <input
                      onChange={(e) => {
                        taskHandler(e);
                      }}
                      type="text"
                      required
                      name="title"
                      placeholder="Add Title"
                      className="bg-gray-100  w-full border-gray-300 py-3 px-2 "
                    />
                  </div>
                  <div className="my-2">
                    <textarea
                      onChange={(e) => {
                        taskHandler(e);
                      }}
                      type="text"
                      required
                      name="description"
                      minLength="5"
                      placeholder="Add Description"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-64 "
                    />
                  </div>
                  <div className="my-2">
                    <select
                      onChange={(e) => {
                        taskHandler(e);
                      }}
                      type="text"
                      required
                      placeholder="Add Title"
                      name="tag"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-10 "
                    >
                      <option value disabled>
                        ---select tags --
                      </option>
                      <option value="readbook">Read Book</option>
                      <option value="homework">HomeWork</option>
                      <option value="drawing">Drawing</option>
                    </select>
                  </div>
                  <div className="my-2">
                    <input
                      onChange={(e) => {
                        taskHandler(e);
                      }}
                      required
                      type="number"
                      min="15"
                      max="60"
                      step="5"
                      name="time"
                      placeholder="Add Time"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-10 "
                    />
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Create Task
                    </button>
                    <button
                      onClick={() => {
                        setModalTaskFlag((flag) => !flag);
                      }}
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export { ModalTask };
