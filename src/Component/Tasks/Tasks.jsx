const Tasks = () => {
  return (
    <>
      <section className="grid col-start-1  border-8 p-4">
        <div className="flex">
          <span className="text-2xl font-bold"> To-do list</span>
        </div>
        <div className=" flex  flex-wrap justify-start items-center">
          <span className="mr-2">All Tags :</span>
          <button className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl my-3">
            work
          </button>
          <button className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl my-3">
            work
          </button>
        </div>
        <aside className="flex flex-col h-full justify-between">
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
          <div className="flex justify-between">
            <div>
              <button>
                <i className="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
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
        </aside>
      </section>
    </>
  );
};
export { Tasks };
