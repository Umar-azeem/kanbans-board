import { useForm } from "react-hook-form";

type InputfromProps = {
  handleFrom: () => void;
};

function Inputfrom({ handleFrom }: InputfromProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mt-0 lg:mt-8 grid grid-flow-row p-4 gap-3 lg:gap-5 font-semibold rounded-lg text-white m-auto text-sm lg:text-lg max-w-lg bg-[#2c2e3f]">
          <div className="flex justify-between"><h1>Add New Task</h1> <svg
          onClick={() => handleFrom()}
                className="h-8 w-8 text-gray-500 hover:text-violet-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg></div>
          <div className="">
            <p>Title</p>
            <input
              type="text"
              {...register("Title", { required: true })}
              placeholder="e.g. Myboard"
              className={`bg-transparent w-full text-md p-2 rounded-md border  ${errors.Title ? "border-red-600 " :"border-gray-500" }  `}
            />{errors.Title && <p className="text-red-700 text-sm">Title is required</p>}
          </div>
          <div>
            <p>Description (optional)</p>
            <input
              type="text"
              {...register("Description",{required : true})}
              placeholder="e.g. Start Learning Things"
              className={`bg-transparent w-full text-md p-2 rounded-md border ${errors.Description ? "border-red-600 " :"border-gray-500" } `}
              />{errors.Description && <p className="text-red-700 text-sm">Description is required</p>}
          </div>
          <div className="flex flex-col gap-1">
            <p>Subtasks</p>
            <div className="flex justify-center items-center">
              <div className="flex flex-col w-full"><input
                type="text"
                {...register("Subtasks",{required : true})}
                placeholder="e.g. Myboard"
                className={`bg-transparent w-full text-md p-2 rounded-md border  ${errors.Subtasks ? "border-red-600 " :"border-gray-500" }`}
              />{errors.Subtasks && <p className="text-red-700 text-sm">Subtasks is required</p> }
              </div>
              <svg
                className="h-8 w-8 text-gray-500 hover:text-violet-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>

            </div>
            <button className="rounded-full flex justify-center items-center p-2 bg-white text-violet-500 text-center font-semibold">
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
            <p>Status</p>
  <select
   {...register("Status",{required: true})}
   className={`bg-transparent w-full text-md p-2 rounded-md border  ${errors.status ? "border-red-600 " :"border-gray-500" }`} id="cars" name="cars">
    <option className="text-black bg-transparent w-full text-md p-2 " value="volvo">todo 1</option>
    <option className="text-black bg-transparent w-full text-lg p-2 " value="saab">todo 1</option>
  </select>
            <button
              type="button"
              onClick={() => handleFrom()}
              className="text-white p-3 hover:bg-violet-400 bg-violet-500 rounded-full text-center font-semibold"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Inputfrom;
