type ResetboardProps = {
  handleReset: () => void; 
  
};



function Resetboard({handleReset}: ResetboardProps) {
  return (
    <div className=" mt-0 lg:mt-8 grid grid-flow-row p-3 md:p-6 gap-7 font-semibold rounded-lg text-white m-auto text-lg lg:text-md  max-w-lg bg-[#2B2C37] ">
      <h1 className="text-red-500">Reset all Boards?</h1>
      <p className="text-sm font-thin ">
      Are you sure you want to reset all boards? This action will remove all boards, columns, tasks etc which where created by you. This action can't be reversed!
      </p>

      <div className="flex w-full gap-2">
        <button onClick={handleReset} className=" rounded-full w-full p-2 hover:bg-red-400 bg-red-500">Reset</button>
        <button onClick={handleReset} className=" rounded-full w-full p-2 bg-white text-red-500">
          cancel
        </button>
      </div>
    </div>
  );
}
export default Resetboard;
