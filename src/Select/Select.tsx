import React from "react";
import { SelectType } from "../@types";
import { getClassNames } from "../Common/ClassNameHandler";

export const Select: React.FC<SelectType> = (data) => {
  let defaultClasses = {
    label: "block font-medium leading-5 text-gray-700 pl-2",
    select: "py-3 px-4 mb-2  block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
  }

  return (
    <>
      <label data-testid={data.id + "-label"} className={ getClassNames("label", data.className, defaultClasses) } 
              htmlFor={ (data !== undefined && data.id !== undefined) ? data.id : "" }>
        { (data !== undefined && data.label !== undefined) ? data.label : "" }
      </label>
      <select data-testid={data.id + "-select"}
        id={data.id} 
        name={data.name} 
        className={ getClassNames("select", data.className, defaultClasses) }
        onChange={(e) => data.onChange(e) }
        multiple={(data.multiple !== undefined) ? data.multiple : false}>
        { (data.options?.map((option) => (
          <option key={option} value={option}>{option}</option>
        )))}
      </select>
    </>
  );
};