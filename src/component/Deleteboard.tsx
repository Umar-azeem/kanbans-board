function Deleteboard(){


    return (
<div className="grid grid-flow-row p-3 md:p-6 gap-7 font-semibold rounded-lg text-white m-auto text-lg lg:text-md  max-w-lg bg-[#2B2C37] ">
        <h1 className="text-red-400">Delete this Task?</h1>
          <p className="text-sm font-thin ">
          Are you sure you want to clear the "Anish" board? This action will remove all columns and tasks and cannot be reversed
          </p>
       
        <div className="flex w-screen gap-1">
          <button className=" rounded-full w-full p-2 hover:bg-red-400 bg-red-500">Delete</button>
          <button className=" rounded-full w-full p-2 bg-white text-red-500">cancel</button>

        </div>
      </div>  



    ) }
export default Deleteboard;