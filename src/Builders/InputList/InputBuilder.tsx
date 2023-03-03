import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import { Input } from '../../Elements';

interface Input extends HTMLAttributes<HTMLInputElement>{
  label: string | undefined;
  type: HTMLInputTypeAttribute | undefined;
  value: string | number | readonly string[] | undefined;
}


export const InputBuilder: React.FC<{ inputs: Input[]}> = (data) => {

  return (
    <>
      { (data.inputs !== undefined) && data.inputs.map((input) => (
        <Input key={input.id}
          id={input.id}
          label={input.label} 
          type={input.type}
          placeholder={input.placeholder}
          value={input.value}
          onChange={input.onChange}/>
      ))}
    </>
  );
};