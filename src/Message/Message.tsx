import React from "react";
import { MessageType } from "../@types";
import { getClassName } from "../Common/ClassNameHandler";

export const Message: React.FC<MessageType> = (data) => {
  let defaultClasses = "border p-4 rounded text-center";
  if(data.type === "error") {
    defaultClasses += " bg-red-600 text-white";
  } else if(data.type === "success") {
    defaultClasses += " bg-green-600 text-white";
  } else if(data.type === "info") {
    defaultClasses += " bg-blue-600 text-white";
  }
  
  return (
    <div id={data.id} data-testid={data.id} className={ getClassName(data.className, defaultClasses) }>
      {data.message}
    </div>
  );
};