type TodoColSecProps = {
    handleSidebar: () => void; 
    isDark:() => Boolean;
};

function TodoColSec({ handleSidebar, isDark  }: TodoColSecProps) {
    return (
        <>
            <div
             onClick={handleSidebar}
             className="absolute z-10 bottom-7 justify-end pr-7 bg-violet-700 text-white hover:text-violet-800 hover:bg-white rounded-r-full border-gray-200 py-2"
            >
               <svg className="h-8 w-8 text-white hover:text-violet-800"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
</svg>  
            </div>
<section className={`overflow-hi  h-[87vh]  ${ isDark() ? "bg-white text-black " : "bg-zinc-800/50 text-white"}`}>
<div className="flex gap-4">
    <p className="text-gray-500 items-center font-semibold flex justify-center text-sm lg:text-lg text-center w-60 item-center gap-1 p-4"> <svg
            className="h-5 w-5 bg-red-900 text-red-900 rounded-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" fill="currentColor" />
            <circle cx="12" cy="12" r="9" />
          </svg>TODO (2)</p>
          <p className="text-gray-500 items-center font-semibold flex justify-center text-sm lg:text-lg text-center w-60 item-center gap-1 p-4"> <svg
            className="h-5 w-5 bg-red-900 text-red-900 rounded-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" fill="currentColor" />
            <circle cx="12" cy="12" r="9" />
          </svg>TODO (2)</p>
          <p className="text-gray-500 items-center font-semibold flex justify-center text-sm lg:text-lg text-center w-60 item-center gap-1 p-4"> <svg
            className="h-5 w-5 bg-red-900 text-red-900 rounded-full"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <circle cx="12" cy="12" fill="currentColor" />
            <circle cx="12" cy="12" r="9" />
          </svg>TODO (2)</p>
          
         
    </div>
<div className="h-full   font-semibold p-6 flex items-start space-x-6">

  <div className=" rounded-lg flex  flex-col gap-3 p-4 w-60">
    
    
    <div className="backdrop-blur-lg z-0  bg-gray-400/50 rounded-lg p-3 ">
      <div className="font-semibold text-lg">ass</div>
      <div className="text-gray-500/100 text-sm">0 of 1 subtasks</div>
    </div>
  <div className="backdrop-blur-lg bg-gray-400/50 rounded-lg p-3 ">
      <div className="font-semibold text-lg">ass</div>
      <div className="text-gray-500/100 text-sm">0 of 1 subtasks</div>
    </div>
    
    

  </div>

  <div className="bg-zinc-600/50 backdrop-blur-lg rounded-lg flex items-center justify-center w-60 h-full cursor-pointer hover:bg-zinc-700/50">
    <button className="text-gray-500/100 text-lg">+ New Column</button>
  </div>
</div>
</section>

        </>
    );
}

export default TodoColSec;
