import { useForm } from "react-hook-form";

type EidtboardProps = {
  handleEidt: () => void; 
  
};

function Eidtboard({ handleEidt }: EidtboardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
 <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mt-0 lg:mt-10 grid grid-flow-row  p-4 gap-4 font-semibold rounded-lg text-white m-auto text-sm lg:text-lg  max-w-lg bg-[#2c2e3f] ">
        <div className="flex justify-between"><h1>Eidtboard</h1> <svg
        onClick={handleEidt} 
              className="h-8 w-8 text-gray-500 hover:text-violet-700"
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
            </svg></div>
        <div className="">
          <p>Board Name</p>{" "}
          <input
              type="text"
              {...register("Name", { required: true })}
              placeholder={errors.Name ? "Name is required." : "e.g. Myboard"}
              className={`bg-transparent w-full text-md p-2 rounded-md border "border-gray-500" ${errors.Name ? "border-red-600 " :"border-gray-500" }  `}
            />
        </div>
        <div className="flex flex-col gap-2 ">
          <p>Board columns</p>
          <div className="flex justify-center items-center">
            <input
              type="text"
              placeholder="e.g.Todo"
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
        <div onClick={handleEidt}  className="text-white hover:bg-violet-400 bg-violet-500 rounded-full p-2 ">
          <p  className=" text-center font-semibold">Hide Sidebar</p>
        </div>
      </div>
      </form>
    </>
  );
}
export default Eidtboard;
