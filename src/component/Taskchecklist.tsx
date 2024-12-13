import {useState } from "react";

type Taskchecklistprops ={
    handlechecktask : () => void;
};
function Taskchecklist({handlechecktask}: Taskchecklistprops){
  
  const [drop, setDrop] = useState(false);
  const handleDrop = () => {
    setDrop(!drop);
  }

    return (
      <>
         <div className="relative border mt-10 w-full  flex flex-col p-6 gap-1 lg:gap-2 font-semibold rounded-lg text-blue-600 m-auto text-sm lg:text-lg max-w-lg bg-white border-gray-400">
                <div className=" flex flex-row justify-between ">
                  <p className="">task</p>
                <button onClick={handleDrop} >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-8 w-8 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75v.01M12 12.75v.01M12 18.75v.01"
                    />
                  </svg>
                  {drop &&  (<div className="absolute z-40 right-8 bg-zinc-600/50 backdrop-blur-lg text-gray-500/100 text-sm lg:text-lg font-semibold  mt-2 lg:mt-2  rounded-lg shadow-lg w-44">
                      <ul className="p-0 lg:p-2 ">
                          <li  >
                            <a href="#"  className="block  lg:px-4 lg:py-2  transition" > Edit Board  </a>
                          </li>
                          <li >
                            <a href="#" onClick={handlechecktask}  className="block  lg:px-4 lg:py-2  transition" > Delete Board  </a>
                          </li>
                          
                      </ul>
                    </div>)}
                  </button>   
                </div>
                <p className="ms-2 p-2 text-sm font-semibold text-gray-900 dark:text-gray-500">umar azeem bhatti</p>
                <div className="flex flex-col gap-2 p-3">               
                <p className="ms-2 text-xs font-sans text-gray-900 dark:text-gray-500">(subtask 3/3)</p>

                <div className="flex items-center  bg-violet-100 hover:bg-violet-200 p-3 rounded-lg">
               <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
               <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Default checkbox</label>
               </div> 
               <div className="flex items-center  bg-violet-100 hover:bg-violet-200 p-3 rounded-lg">
               <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-sm text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
               <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Default checkbox</label>
               </div>
               <div className="flex items-center  bg-violet-100 hover:bg-violet-200 p-3 rounded-lg">
               <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
               <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500">Default checkbox</label>
               </div>
                </div>
                <select
   
   className="bg-transparent w-full text-md p-2 rounded-md border ">
    <option className="text-black bg-transparent w-full text-md p-2 " value="volvo">todo 1</option>
    <option className="text-black bg-transparent w-full text-lg p-2 " value="saab">todo 1</option>
  </select>
            </div>
          </>
    ) }
export default Taskchecklist;