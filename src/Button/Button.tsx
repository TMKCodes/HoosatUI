/**
 * This is a React functional component named "Button". 
 * It takes in props of type "ButtonData" and returns 
 * a button element with various attributes set based 
 * on the passed in props. The button has a default 
 * set of CSS classes assigned to it, but if the 
 * "className" prop is passed in, the default classes 
 * will be appended to it. The button also has default 
 * values for its "id", "type", and inner text, but 
 * these can be overwritten if the corresponding props 
 * are passed in. The "onClick" prop is used to handle 
 * the button click event.
 */

import React from "react";
import { ButtonType } from "../@types";
import { getClassName } from "../Common/ClassNameHandler";


export const Button: React.FC<ButtonType> = (data) => {
  const defaultClasses = "py-3 px-4 w-full block leading-5 rounded-md transition duration-150 ease-in-out bg-slate-300 hover:bg-slate-400 border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-slate-500 sm:text-sm sm:leading-5";
  
  return (
    <button 
        {...data} 
        id={(data.id !== undefined) ? data.id : "" } 
        data-testid={(data.id !== undefined) ? data.id : "" }
        type={(data.type !== undefined) ? data.type : "button" }
        className={ getClassName(data.className, defaultClasses) }
      >
      {(data.value !== undefined) ? data.value : (data.children !== undefined) ? data.children : "Button" }
    </button>
  );
};