import { useState } from "react";
import { ACTION_TYPE } from "../../Reducer/util";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../Context/Task/Task-Context";

const EditTask = ({ task, setUpdateFlag }) => {
  const navigate = useNavigate();
  const { taskDispatch, taskState } = useTask();
  const { tasks, updateTask } = taskState;
  const { title, tag, description, time, _id } = task;
  const [editTask, setEditTask] = useState({ ...updateTask });

  console.log("edittask", editTask);
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
                    setUpdateFlag(false);
                    taskDispatch({
                      type: ACTION_TYPE.UPDATE_TASK,
                      payload: editTask,
                    });
                  }}
                >
                  <div className="my-2 ">
                    <label>Edit Title</label>
                    <input
                      onChange={(e) => {
                        setEditTask({ ...editTask, title: e.target.value });
                      }}
                      type="text"
                      required
                      name="title"
                      value={editTask.title}
                      placeholder="Add Title"
                      className="bg-gray-100  w-full border-gray-300 py-3 px-2 "
                    />
                  </div>
                  <div className="my-2">
                    <label>Edit Description</label>
                    <textarea
                      onChange={(e) => {
                        setEditTask({
                          ...editTask,
                          description: e.target.value,
                        });
                      }}
                      type="text"
                      required
                      name="description"
                      value={editTask.description}
                      minLength="5"
                      placeholder="Add Description"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-64 "
                    />
                  </div>
                  <div className="my-2">
                    <select
                      onChange={(e) => {
                        setEditTask({ ...editTask, tag: e.target.value });
                      }}
                      type="text"
                      required
                      value={editTask.tag}
                      placeholder="Add Title"
                      name="tag"
                      className="bg-gray-100 w-full border-gray-300 px-2 h-10 "
                    >
                      <option value defaultValue>
                        ---select tags --
                      </option>
                      <option value="readbook">Read Book</option>
                      <option value="homework">HomeWork</option>
                      <option value="drawing">Drawing</option>
                    </select>
                  </div>
                  <div className="my-2">
                    <label>Enter Time</label>
                    <input
                      onChange={(e) => {
                        setEditTask({ ...editTask, time: e.target.value });
                      }}
                      required
                      value={editTask.time}
                      type="number"
                      min="5"
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
                      update
                    </button>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-gray-700 border-gray-300 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
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
export { EditTask };
