const Clock = () => {
  return (
    <>
      <section className="grid grid-cols-2 border-8 ">
        <section className="p-4 flex flex-col items-center my-10 justify-center ">
          <div className="h-72 w-72 bg-red-500 rounded-full border-8 flex flex-col justify-center ">
            <div className="flex justify-evenly items-center ">
              <span className=" text-white font-bold text-3xl">15 m</span>
              <span className=" text-white font-bold text-3xl">:</span>
              <span className=" text-white font-bold text-3xl">00 s</span>
            </div>
            <div className="mt-3">
              <p className=" text-white  ">Out of 15 min</p>
            </div>
          </div>
          <div className="">
            <div className="my-3">
              <button className="bg-indigo-700 text-white px-5 py-2  mr-2">
                <i className="fa-solid fa-play"></i> Start
              </button>
              <button className="bg-gray-300  px-5 py-2">
                <i className="fa-solid fa-pause text-indigo-700 "></i> Pause
              </button>
            </div>
            <div className="">
              <button className="bg-yellow-200 w-full text-bold text-lg text-white px-5 py-2">
                Reset
              </button>
            </div>
          </div>
        </section>
        <section className="flex flex-col items-start p-7 my-10 h-100">
          <span className="text-2xl font-bold ">Office Work</span>
          <p className="text-justify my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quis
            fugiat mollitia veritatis, quod corporis id vel deleniti ipsa
            quaerat accusantium numquam. Vitae id nemo, modi minima asperiores
            exercitationem cupiditate cumque rem quia totam sequi consectetur
            itaque provident deserunt. Libero cumque quo amet vero sequi quasi
            aliquam facilis similique voluptates.
          </p>
          <span className="text-lg font-bold">Tags:</span>
          <div className="flex w-full justify-start flex-wrap items-center ">
            <span className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl my-3">
              work
            </span>
            <span className="mr-3 bg-gray-900 text-white w-20 h-7 rounded-2xl">
              notes
            </span>
          </div>
          <span>Date.Added:27th May 2022</span>
        </section>
      </section>
    </>
  );
};
export { Clock };
