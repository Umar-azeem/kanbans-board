function Nav(){
    return (
      <>
            <div className="border-r  border-gray-400">
                <div className=" flex  lg:hidden flex-col  ">
                  <div className="h-full justify-between text-center flex flex-col px-4 py-6">
                    <div className="flex flex-col gap-3">
                  <p className="text-sm font-semibold text-gray-400">
                      All Boards (1)
                    </p>
                    <div className="bg-violet-500 text-sm text-center text-white p-1 rounded-full  hover:bg-white hover:text-violet-800">
                      <p className="font-semibold">Boards</p>
                    </div>
                    <div className="bg-transparent text-violet-500 p-2  hover:text-violet-400">
                      <p className=" font-semibold">+ Create New Board</p>
                    </div> 
                    </div>
                    <div className=" rounded-lg space-y-3">
                      <div className="flex items-center justify-between bg-zinc-900 rounded-md p-1">
                        <p><svg className="h-5 w-5 text-gray-600 hover:text-violet-700 "  fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
  </svg></p>
                        {/* <button
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
                        </button> */}
                        <p><svg className="h-5 w-5 text-gray-600 hover:text-violet-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" /></svg></p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              
            </div>
          </>
    ) }
export default Nav;