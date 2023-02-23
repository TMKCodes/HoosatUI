import React from "react";
import { ClassNamesType, InputType } from "../@types";
import { getClassNames } from "../Common/ClassNameHandler";

export const Input: React.FC<InputType> = (data) => {
  const defaultClasses: ClassNamesType = {
    label: "block font-medium leading-5 text-gray-700 pl-2",
    input: "py-3 px-4 mb-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
  }
  
  return (
    <>
      <label className={ getClassNames("label", data.className, defaultClasses) } 
              data-testid={ (data !== undefined && data.id !== undefined) ? data.id + "-label" : "" }
              htmlFor={ (data !== undefined && data.id !== undefined) ? data.id : "" }>
        { (data !== undefined && data.label !== undefined) ? data.label : "" }
      </label>
      <input
        {...data}
        step={"on"}
        id={ (data !== undefined && data.id !== undefined) ? data.id : "" }
        data-testid={ (data !== undefined && data.id !== undefined) ? data.id + "-input" : "" }
        className={ getClassNames("input", data.className, defaultClasses) }
        type={ (data !== undefined && data.type !== undefined) ? data.type : "" }
        placeholder={ (data !== undefined && data.placeholder !== undefined) ? data.placeholder : "" }
        value={ (data !== undefined && data.value !== undefined) ? data.value : "" }
        onChange={(e: React.BaseSyntheticEvent) => { (data.onChange !== undefined) && data.onChange(e) }}
      />
    </>
  );
};