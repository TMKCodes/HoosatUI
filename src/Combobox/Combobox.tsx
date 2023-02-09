import React, { useState } from "react";
import { ComboboxType } from "../@types";
import { getClassNames } from "../Common/ClassNameHandler";



export const Combobox: React.FC<ComboboxType> = (data) => {
  let defaultClasses = {
    container: "relative",
    label: "block font-medium leading-5 text-gray-700 pl-2",
    input: "py-3 px-5 my-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
    optionContainer: "absolute z-10 overflow-y-auto py-3 px-4 max-h-[240px] block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
    option: "p-2 hover:bg-gray-200 cursor-pointer"
  }

  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleInput = (e: React.BaseSyntheticEvent) => {
    setSearchText(e.target.value);
      setShowResults(true);
  }

  const handleClick = () => {
    if(showResults === false) {
      setShowResults(true);
    } else {
      setShowResults(false);
    }
  }

  const handleOptionClick = (e: React.BaseSyntheticEvent, option: string) => {
    setShowResults(false);
    let tmpResult: string[] = [...result];
    if(data.multiple === false) {
      tmpResult = [option];
      setSearchText(tmpResult.join(""));
    } else {
      if(tmpResult.includes(option)) {
        tmpResult = tmpResult.filter(value => value !== option);
      } else {
        tmpResult.push(option);
      }
      console.log(tmpResult);
      setSearchText(tmpResult.join(", "));
    }
    setResult(tmpResult);
    if(data.onSelect !== undefined) {
      e.target.value = tmpResult;
      data.onSelect(e)
    }
  };

  const filteredOptions = () => {
    if(data.search === true) {
      if(data.multiple === false) {
        return data.options.filter((option) => option.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
      } else {
        let tmpSearchText = searchText.split(", ");
        let result: string[] = [];
        tmpSearchText.forEach((text) => {
          let matched = data.options.filter((option) => option.toLowerCase().indexOf(text.toLowerCase()) !== -1);
          result = [...result, ...matched];
          console.log(result);
        })
        result = result.filter((element, index) => result.indexOf(element) === index);
        console.log(result);
        return result;
      }
    }
    return data.options;
  }

  return (
    <div className={ getClassNames("container", data.className, defaultClasses) }>
      <label data-testid="Combobox-label" className={ getClassNames("label", data.className, defaultClasses) } 
              htmlFor={ (data !== undefined && data.id !== undefined) ? data.id : "" }>
        { (data !== undefined && data.label !== undefined) ? data.label : "" }
      </label>
      <input data-testid="Combobox-input" id={(data !== undefined && data.id !== undefined) ? data.id : ""}
        type="text"
        value={searchText}
        onChange={ handleInput }
        className={ getClassNames("input", data.className, defaultClasses) }
        onClick={ handleClick }/>
      {showResults && (
        <div className={ getClassNames("optionContainer", data.className, defaultClasses) }>
          <ul>
            {filteredOptions().map((option, index) => {
              return (result.includes(option)) 
                ? <li key={index} // Already selected
                    className={ getClassNames("option", data.className, defaultClasses)}
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      {option}
                  </li>
                : <li key={index}
                    className={ getClassNames("option", data.className, defaultClasses) }
                    onClick={(e: React.BaseSyntheticEvent) => handleOptionClick(e, option)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block pr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      {option}
                  </li>
            })}
          </ul>
        </div>
      )}
    </div>
  );
};