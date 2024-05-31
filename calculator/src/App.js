import { useState } from "react";
import './App.css';


const Calculator = () => {
 



 


 

 







  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border border-black sm:w-96 md:w-120 bg-black p-6 rounded-md shadow-md">
        <div className="">
          {/*the buffer begins here */}
          <form> 
            <input
              type="text"
              value={result}
              className="buffer text-cyan-50 font-semibold sm:text-2xl md:text-3xl"
            />
          </form>
          {/*the buffer ends here */}
          <div className="gridContainer">
           
           
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
