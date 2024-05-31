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
           
           
            <button className="" onClick={() => trig('sqrt')} id="operatorButton">
              &sup3;√
            </button>
            <button className="" onClick={() => trig('cosh')} id="scientificOperationButton">
              acosh
            </button>
            <button className="" onClick={() => trig('tanh')} id="scientificOperationButton">
              atanh
            </button>
            <button className="" onClick={removeLastCharacter} id="backspaceButton">
              C
            </button>
            <button className="" name="/" onClick={handleButtonClick} id="operatorButton">
              &divide;
            </button>
            <button name="7" onClick={handleButtonClick} id="numberButton">
              7
            </button>
            <button name="8" onClick={handleButtonClick} id="numberButton">
              8
            </button>
            <button name="9" onClick={handleButtonClick} id="numberButton">
              9
            </button>
            <button className="" name="*" onClick={handleButtonClick} id="operatorButton">
              &times;
            </button>
            <button name="4" onClick={handleButtonClick} id="numberButton">
              4
            </button>
            <button name="5" onClick={handleButtonClick} id="numberButton">
              5
            </button>
            <button name="6" onClick={handleButtonClick} id="numberButton">
              6
            </button>
            <button className="" name="-" onClick={handleButtonClick} id="operatorButton">
              &ndash;
            </button>
            <button name="1" onClick={handleButtonClick} id="numberButton">
              1
            </button>
            <button name="2" onClick={handleButtonClick} id="numberButton">
              2
            </button>
            <button name="3" onClick={handleButtonClick} id="numberButton">
              3
            </button>
            <button className="" name="+" onClick={handleButtonClick} id="operatorButton">
              +
            </button>
            <button name="0" onClick={handleButtonClick} id="numberButton">
              0
            </button>
            <button name="." onClick={handleButtonClick} id="operatorButton">
              .
            </button>
            <button className="" onClick={() => addBracket('(')} id="operatorButton">
              (
            </button>
            <button className="" onClick={() => addBracket(')')} id="operatorButton">
              )
            </button>
            <button className="" onClick={performCalculation} id="resultButton">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
