import React, { HTMLAttributes, HTMLInputTypeAttribute } from "react";
import { Input } from '../../Elements';

interface InputProps {
  [key: string]: any;
}

interface InputBuilderProps extends HTMLAttributes<HTMLInputElement>{
  key: string;
  inputs: InputProps[];
}


export const InputBuilder: React.FC<InputBuilderProps> = ({
  key,
  inputs,
}) => {
  return (
    <>
      { (inputs !== undefined) && inputs.map((input, index) => (
        <Input key={"input-" + key + "-" + index} {...input}/>
      ))}
    </>
  );
};