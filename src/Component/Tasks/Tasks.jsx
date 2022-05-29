const Tasks = () => {
  return (
    <>
      <section className="grid col-start-1 grid-rows-3  gap-4  border-8 p-4">
        <div className=" flex">
          <span className="text-2xl font-bold"> To-do list</span>
        </div>
        <div className=" flex  flex-wrap justify-start items-center">
          <span className="mr-2">All Tags</span>
          <span className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl my-3">
            work
          </span>
          <span className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl my-3">
            work
          </span>
        </div>
        <aside className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <button>
                <i class="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
            </div>
            <div>
              <button>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button>
                <i class="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
            </div>
            <div>
              <button>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button>
                <i class="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
            </div>
            <div>
              <button>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <button>
                <i class="fa-solid fa-list-check"></i>
              </button>
              <span>intelligent</span>
            </div>
            <div>
              <button>
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button>
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
};
export { Tasks };
