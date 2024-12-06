function   Inputfrom(){
    return(
     <>
      <div className="grid grid-flow-row p-4 gap-7 font-semibold rounded-lg text-white m-auto text-sm lg:text-lg   max-w-lg bg-[#2c2e3f] ">
        <h1>Add New Task</h1>
        <div className="">
          <p>Title</p>{" "}
          <input
            type="text"
            placeholder="e.g.Myborad"
            className="bg-transparent w-full text-md p-2 rounded-md border border-gray-500"
          />{" "}
        </div>
        <div className="">
          <p>Description (optional)</p>{" "}
          <input
            type="text"
            placeholder="e.g. Start Learning Things   "
            className="bg-transparent w-full text-md p-2 rounded-md border border-gray-500"
          />{" "}
        </div>
        <div className="flex flex-col gap-1 ">
          <p>Subtasks</p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="e.g.Myborad"
              className="bg-transparent w-full text-md p-2 rounded-md border border-gray-500"
            />
            <svg
              className="h-8 w-8 text-gray-500 hover:text-violet-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <button className="rounded-full flex justify-center items-center p-2 bg-white text-violet-500  text-center font-semibold">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m7-7H5"
              />
            </svg>
            <span className="flex">Add New Task</span>
          </button>
        </div>
        <div className="flex flex-col text-lg gap-2">
          Status
          <input
              type=""
              placeholder=""
              className="bg-transparent w-full p-2 rounded-md border border-gray-500"
            />
          <p className="text-white p-3 hover:bg-violet-400 bg-violet-500 rounded-full text-center font-samibold">Create Task</p>
        </div>
      </div>
 

      </>
    )
}
export default Inputfrom;