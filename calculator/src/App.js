import { useState } from "react";
import './App.css';


const Calculator = () => {
 



 

  const removeLastCharacter = () => {
    setResult(result.slice(0, -1));
  };

  const trig = (func) => {
    setResult(`${func}(`);
    setScientificOperation(func);
  };

  const addBracket = (bracket) => {
    setResult(result.concat(bracket));
  };

  const performCalculation = () => {
    try {
      let sanitizedInput = result.replace(/[^-()\d/*+.sqrt^%!|ln10πehsaotc]/g, '');

      // Replace trigonometric functions with their JavaScript equivalents
      sanitizedInput = sanitizedInput.replace(/sin/g, 'Math.sin');
      sanitizedInput = sanitizedInput.replace(/cos/g, 'Math.cos');
      sanitizedInput = sanitizedInput.replace(/tan/g, 'Math.tan');
      sanitizedInput = sanitizedInput.replace(/sqrt/g, 'Math.sqrt');
      sanitizedInput = sanitizedInput.replace(/log/g, 'Math.log10');
      sanitizedInput = sanitizedInput.replace(/ln/g, 'Math.log');
      sanitizedInput = sanitizedInput.replace(/pi/g, 'Math.PI');
      sanitizedInput = sanitizedInput.replace(/e/g, 'Math.E');

      const calculatedResult = eval(sanitizedInput);

      // Check if the result is a valid number
      if (!isNaN(calculatedResult) && isFinite(calculatedResult)) {
        setResult(calculatedResult.toString());
      } else {
        setResult('Error');
      }

      setScientificOperation('');
    } catch (err) {
      setResult('Error');
      setScientificOperation('');
    }
  };



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
            <button className="bg-cyan-300 text-black font-semibold" onClick={clearResult} id="clearButton">
              Clear
            </button>
            <button className="" onClick={() => trig('sin')} id="scientificOperationButton">
              sin
            </button>
            <button className="" onClick={() => trig('cos')} id="scientificOperationButton">
              cos
            </button>
            <button className="" name="^" onClick={handleButtonClick} id="operatorButton">
              ^
            </button>
            <button className="" onClick={() => trig('tan')} id="scientificOperationButton">
              tan
            </button>
            <button className="" onClick={() => trig('sinh')} id="scientificOperationButton">
              sinh
            </button>
            <button className="" onClick={() => trig('cosh')} id="scientificOperationButton">
              cosh
            </button>
            <button className="" name="%" onClick={handleButtonClick} id="operatorButton">
              %
            </button>
            <button className="" onClick={() => trig('tanh')} id="scientificOperationButton">
              tanh
            </button>
            <button className="" name="sqrt" onClick={handleButtonClick} id="scientificOperationButton">
              &radic;
            </button>
            <button className="" onClick={() => trig('log')} id="scientificOperationButton">
              log
            </button>
            <button className="" onClick={() => trig('1/')} id="operatorButton">
              1/x
            </button>
            <button className="" onClick={() => trig('ln')} id="scientificOperationButton">
              ln
            </button>
            <button className="" onClick={() => trig('10^')} id="scientificOperationButton">
              10^x
            </button>
            <button className="" onClick={() => trig('|')} id="scientificOperationButton">
              |x|
            </button>
            <button className="" onClick={() => trig('!')} id="operatorButton">
              !
            </button>
            <button className="" onClick={() => trig('pi')} id="scientificOperationButton">
              π
            </button>
            <button className="" onClick={() => trig('e')} id="scientificOperationButton">
              e
            </button>
            <button className="" onClick={() => trig('sinh')} id="scientificOperationButton">
              asinh
            </button>
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
