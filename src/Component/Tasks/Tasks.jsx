import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../Context/Task-context/Task-context";
import { Loader } from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Tasks = () => {
  const { taskState } = useTask();
  const { task, tag } = taskState;
  const [message, setMessage] = useState({
    success: "successfully added",
    warning: "error",
  });

  const notify = (msg) => toast.success(msg.success);
  const navigate = useNavigate();

  const taskHandler = (task) => {
    navigate("/");
  };

  useEffect(() => {}, []);

  return (
    <>
      <section className="grid col-start-1  border-8 p-4">
        <div className="flex">
          <span className="text-2xl font-bold"> To-do list</span>
        </div>
        <div className=" flex  flex-wrap justify-start items-center">
          <span className="mr-2">All Tags :</span>
          {tag.map((tags) => {
            return (
              <button
                key={tags}
                className="mr-3 bg-gray-900 text-white px-3 py-1 rounded-2xl my-3"
              >
                {tags}
              </button>
            );
          })}
        </div>
        <aside className="flex flex-col h-full justify-between">
          {task.map(({ title, _id }) => {
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
                </div>
                <div>
                  <button>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button>
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
