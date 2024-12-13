import { useState } from "react";
import TodoColSec from "./TodoColSec";
import Inputfrom from './Inputfrom';
import Eidtboard  from "./Eidtboard";
import Clearboard from "./Clearboard";
import Deleteboard from "./Deleteboard";
import Resetboard from "./Resetboard";
import Addtask from "./Addtask";
import Taskchecklist from "./Taskchecklist";
function Main() {
  const [drop, setDrop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isDark, setIsDark] = useState(false);
  const [isSidebarHidden, setIsSidebarHidden] = useState(false);
  const [navOpen,SetNavOpen] = useState(false);
  const [eidtOpen,setEidtOpen] = useState(false);
  const [deleteOpen,setDeleteOpen] = useState(false);
  const [resetOpen,setResetOpen] = useState(false);
  const [clearOpen,setClearOpen] = useState(false);
  const [fromOpen,setFromOpen ] = useState(false);
  const [addtaskOpen,setAddtaskOpen] = useState(false);
  const [taskcheckOpen,setTaskcheckOpen] = useState(false);

  const  handleNav = () =>{
  SetNavOpen(!navOpen);
}
  const handleSidebar = () => setShowSidebar((prev) => !prev);
  const handleDrop = () =>{
    setDrop(!drop);
  } 
  const  handleEidt = () =>{
    setEidtOpen(!eidtOpen);
  }
  const  handleDelete = () =>{
    setDeleteOpen(!deleteOpen);
  }
  const  handleReset = () =>{
    setResetOpen(!resetOpen);
  }
  const  handleClear = () =>{
    setClearOpen(!clearOpen);
  }
   const handleFrom = () =>{
    setFromOpen(!fromOpen);
   }
   const handleAddtask = () => {
    setAddtaskOpen(!addtaskOpen)
   }
   const handlechecktask = () => {
    setTaskcheckOpen(!taskcheckOpen);
   }

  return (
    <>
      <div
        className={`relative flex  flex-col w-screen h-screen ${
          isDark ? "bg-white text-black" : "bg-[#2B2C37]"
        } text-white`}
      >
       <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  clearOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Clearboard handleClear={handleClear}/></div>
      <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  eidtOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Eidtboard  handleEidt={ handleEidt}/></div>
    <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  deleteOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Deleteboard handleDelete={handleDelete}/></div>
       <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  resetOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Resetboard handleReset={handleReset} /></div>
       <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  fromOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Inputfrom handleFrom={handleFrom} /></div>
       <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${ addtaskOpen  ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Addtask handleAddtask={handleAddtask} /></div>
       <div  className={`w-screen h-screen absolute z-50 backdrop-blur-sm transition-all duration-500 ease-in-out ${  taskcheckOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full' }`}><Taskchecklist  handlechecktask={handlechecktask}/></div>

          <div className={`relative z-40 w-full h-[16vh]  flex flex-row items-center ${
          isDark ? "bg-white text-black" : "bg-[#2B2C37]"
        } text-white`}>
           <button
              onClick={handleSidebar}
              className=" hidden lg:flex flex-col items-center w-[60vh] h-[15vh] border-r border-gray-500 justify-center   text-indigo-800"
            >
              <div className=" flex gap-3 justify-center   items-center">
                <div className="flex flex-row gap-[1px]">
                  <hr className="w-2 h-6 rounded-sm bg-gradient-to-b from-violet-400 to-indigo-600" />
                  <hr className="w-2 h-6 rounded-sm bg-gradient-to-b from-violet-500 to-indigo-700" />
                  <hr className="w-2 h-6 rounded-sm bg-gradient-to-b from-violet-600 to-indigo-800" />
                </div>
                <p className={`text-3xl font-bold ${ isDark ? "text-3xl font-bold  text-black": "text-white "}`}>Kanban</p>
              </div>
            </button>
          <header className=" border-b border-gray-400 z-0 w-full p-5 ">
            <div className={`flex justify-between text-sm lg:text-lg ${isDark ? "bg-white text-black" : "bg-[#2B2C37]"
        }  `}>
          

          <div className="  flex flex-row justify-center items-center gap-2" >
           <button onClick={handleNav}>  
              <div className="flex lg:hidden flex-row gap-[1px]">
                  <hr className="w-1.5 h-4 rounded-sm bg-gradient-to-b from-violet-400 to-indigo-600" />
                  <hr className="w-1.5 h-4 rounded-sm bg-gradient-to-b from-violet-500 to-indigo-700" />
                  <hr className="w-1.5 h-4 rounded-sm bg-gradient-to-b from-violet-600 to-indigo-800" />
                </div>
            </button>
{navOpen && (<> <div className="absolute top-10 z-50 backdrop-blur-lg bg-black/0 left-2 border rounded-lg   border-gray-400">
                <div className=" flex lg:hidden flex-col ">
                  <div className="h-full justify-between text-center flex flex-col px-4 py-6">
                    <div  className="flex flex-col gap-3">
                  <p  className="text-sm font-semibold text-gray-400">
                      All Boards (1)
                    </p>
                    <div className="bg-violet-500 text-sm text-center text-white p-1 rounded-full  hover:bg-white hover:text-violet-800">
                      <p className="font-semibold">Boards</p>
                    </div>
                    <div className="bg-transparent text-violet-500 p-2 hover:text-violet-400">
                      <p className=" font-semibold">+ Create New Board</p>
                    </div> 
                    </div>
                    <div className="rounded-lg space-y-3">
                      <div className="flex items-center justify-between bg-zinc-900 rounded-md p-1">
                        <p><svg className="h-5 w-5 text-gray-600 hover:text-violet-700 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg></p>
                        <button
                          onClick={() => setIsDark((prev) => !prev)
                            
                          }
                          className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                            isDark ? "bg-indigo-700" : "bg-gray-300"
                          }`}
                        >
                          <div
                            className={`absolute w-4 h-4 top-0.5 bg-white rounded-full transition-transform duration-200 ${
                              isDark ? "translate-x-5" : "translate-x-0"
                            }`}
                          ></div>
                        </button>
                        <p><svg className="h-5 w-5 text-gray-600 hover:text-violet-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg></p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              
            </div></>)}
              <p className="text-lg font-bold">Weekly</p>
              </div>
              <div className=" flex items-center">
                <button onClick={handleFrom} className="flex items-center gap-2 bg-violet-500 text-white hover:bg-white hover:text-violet-800 rounded-full px-2 py-1 lg:px-4 lg:py-2">
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
               
              
                <button onClick={handleDrop}>
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

                   {drop &&  (<div className="absolute z-30 right-8 bg-zinc-600/50 backdrop-blur-lg text-gray-500/100 text-sm lg:text-lg font-semibold  mt-2 lg:mt-2  rounded-lg shadow-lg w-44">
                      <ul className="p-0 lg:p-2 ">
                          <li  >
                            <a href="#" onClick={handleEidt} className="block  lg:px-4 lg:py-2  transition" > Edit Board  </a>
                          </li>
                          <li >
                            <a href="#" onClick={handleClear} className="block  lg:px-4 lg:py-2  transition" > Clear Board </a>
                          </li>
                          <li >
                            <a href="#" onClick={handleDelete} className="block  lg:px-4 lg:py-2  transition" > Delete Board  </a>
                          </li>
                          <li >
                            <a href="#" onClick={handleReset} className="block lg:px-4 lg:py-2  transition" >Reset Boards </a>
                          </li>
                      </ul>
                    </div>)}
                </button>
              </div>
            </div>
          </header>  
        </div> 
          
          <div className="w-full h-full flex overflow-hidden  flex-row">
          {showSidebar && ( <> {!isSidebarHidden && (
          <div className="border-r hidden lg:flex w-[59.5vh]  border-gray-500">
              <div className="h-full hidden lg:flex flex-row ">
                <div className="w-56 h-full justify-between flex flex-col  ">
                  <div className="w-full flex flex-col gap-3">
                <p className="text-lg font-semibold text-gray-400">
                    All Boards (1)
                  </p>
                  <button onClick={ handlechecktask} className="bg-violet-500 w-full text-white rounded-r-full p-2 hover:bg-white hover:text-violet-800">
                    <p className="text-lg flex justify-start  items-center  text-center font-semibold"><svg className=" mx-2"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="3" />  <line x1="3" y1="10" x2="21" y2="10" />  <line x1="7" y1="15" x2="7.01" y2="15" />  <line x1="11" y1="15" x2="13" y2="15" /></svg>Boards</p>
                  </button >
                  <button  onClick={handleAddtask} className="bg-transparent text-violet-500 rounded-r-full p-2  hover:text-violet-400">
                    <p className="text-lg flex justify-center items-center font-semibold"><svg  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="3" y="5" width="18" height="14" rx="3" />  <line x1="3" y1="10" x2="21" y2="10" />  <line x1="7" y1="15" x2="7.01" y2="15" />  <line x1="11" y1="15" x2="13" y2="15" /></svg> + Create New Board</p>
                  </button > 
                  </div>
                  <div className="w-56 rounded-lg  py-9">
                    <div className={`w-60 flex items-center justify-between rounded-md p-2   ${isDark ? "bg-slate-200" :"bg-zinc-800 "}`}>
                      <p>
                      <svg className="h-8 w-8 text-gray-600 hover:text-violet-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg>
</p>
                      <button
                        onClick={() => setIsDark((prev) => !prev)
                          
                        }
                        className={`relative w-10 h-5 rounded-full transition-colors duration-200 ${
                          isDark ? "bg-indigo-700" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute w-4 h-4 top-0.5 bg-white rounded-full transition-transform duration-200 ${
                            isDark ? "translate-x-5" : "translate-x-0"
                          }`}
                        ></div>
                      </button>
                      <p>  <svg className="h-8 w-8 text-gray-600 hover:text-violet-700 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
</svg>
                        </p>
                    </div>
                    <div onClick={handleSidebar} className="bg-white text-violet-800 rounded-r-full p-2  hover:text-violet-700">
                    <p className="text-lg flex flex-row  font-semibold"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" 
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                </svg> Hide Sidebar</p>
                  </div>
                  </div>
                </div>
              </div>
          
          </div>
        )}</>)}
        <div className="relative z-0 w-full h-fit overflow-hidden"><TodoColSec  isDark={() => isDark} handleSidebar={handleSidebar} /></div>
        </div>
      </div>
    </>
  );
}


export default Main;
