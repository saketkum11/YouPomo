import { useState } from "react";
import { useTask } from "../../Context/Task-context/Task-context";
import { ACTION_TYPE } from "../../Reducer/util";
import { v4 as uuid } from "uuid";
const ModalTask = ({ setModalTaskFlag }) => {
  const { taskDispatch } = useTask();
  const [taskDetails, setTaskDetails] = useState({
    _id: uuid(),
    title: "",
    tag: "",
    description: "",
    time: "",
  });

  console.log("taskDestail from modalTask componet", taskDetails);
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
                    event.preventDefault();
                    taskDispatch({
                      type: ACTION_TYPE.SUMBIT_TASK,
                      payload: taskDetails,
                    });
                  }}
                >
                  <div className="my-2 ">
                    <input
                      onChange={(e) => {
                        setTaskDetails({
                          ...taskDetails,
                          title: e.target.value,
                        });
                      }}
                      type="text"
                      required
                      placeholder="Add Title"
                      className="bg-gray-100  w-full border-gray-300 py-3 px-2 "
                    />
                  </div>
                  <div className="my-2">
                    <textarea
                      onChange={(e) => {
                        setTaskDetails({
                          ...taskDetails,
                          description: e.target.value,
                        });
                      }}
                      type="text"
                      required
                      minLength="5"
                      placeholder="Add Description"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-64 "
                    />
                  </div>
                  <div className="my-2">
                    <select
                      onChange={(e) => {
                        setTaskDetails({
                          ...taskDetails,
                          tag: e.target.value,
                        });
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
                        setTaskDetails({
                          ...taskDetails,
                          time: e.target.value,
                        });
                      }}
                      required
                      type="number"
                      min="15"
                      max="60"
                      step="5"
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
                      onClick={() => setModalTaskFlag((flag) => !flag)}
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
