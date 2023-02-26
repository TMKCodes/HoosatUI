import React from "react";
import { Combobox } from "../Elements/Form/Combobox/Combobox";
import { ClassNamesType } from "../@types";
import { Button } from "../Elements/Form/Button/Button";
import { getClassNames } from "../Common/ClassNameHandler";
import { Input } from "../Elements/Form/Input/Input";
import { Message } from "../Message/Message";
import { Select } from "../Select/Select";

interface FormInputType {
  inputType: string,
  [key: string]: any  
}

interface FormType {
  children?: React.ReactNode | React.ReactNode[];
  id?: string | undefined,
  submitButtonText: string | undefined, 
  className?: ClassNamesType | undefined,
  header?: string,
  onSubmit(value: React.FormEvent<HTMLFormElement>): void,
  inputs: FormInputType[], 
}

/**
  inputs={[
    { 
      inputType: "container"
      id: "container-test"
      className: "",
      inputs: [
        { 
          inputType: "input", 
          id: "input-test", 
          label: "testing",
          type: "text", 
          placeholder: "Type some text here.", 
          className: { label: "", input: ""},  
          onChange: (e: React.BaseSyntheticEvent) => {  }, 
          value: "" 
        },
        {
          inputType: "message":
          id: "message-test"
        }
      ]
    },
    { 
      inputType: "input", 
      id: "input-test", 
      label: "testing",
      type: "text", 
      placeholder: "Type some text here.", 
      className: { label: "", input: ""},  
      onChange: (e: React.BaseSyntheticEvent) => {  }, 
      value: "" 
    },
    {
      inputType: "select",
      id: "select-test",
      name: "",
      label: "testing",
      placeholder: "Type some text here.", 
      classname: { label: "", select: ""},
      onChange: (e: React.BaseSyntheticEvent) => {},
      options: ["option 1", "option 2"],
      multiple: true
    }, 
    {
      inputType: "combobox",
      id: "combobox-test",
      label: "testing",
      className: { container: "", label: "", input: "", optionContainer: "", option: ""},
      onSelect: (e: React.BaseSyntheticEvent) => {},
      options: ["option 1", "option 2"],
      multiple: false,
      search: true,
      value: ""
    }
  ]}
  */

export const Form: React.FC<FormType> = (data) => {
  let defaultClasses = {
    form: "block font-medium leading-5 text-gray-700 p-2",
    header: "text-xl",
    select: "py-3 px-4 mb-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
  }

  const getElementByInput: any = (input: FormInputType) => {
    switch(input.inputType) {
      case "container": 
        return <div {...input}>
        {input.inputs.map((input: any) => (
          getElementByInput(input)
        ))}
        </div>
      case "input":
        return <Input onChange={input.onChange} {...input} />
      case "select":
        return <Select onChange={input.onChange} {...input} />
      case "combobox":
        return <Combobox options={input.options} {...input} />
      case "message":
        return <Message message={input.message} type={input.type} />
      default:
        return <></>
    }
  }

  return (
    <form id={data.id} data-testid={data.id} 
      className={ getClassNames("form", data.className, defaultClasses) }
      onSubmit={(e) => { e.preventDefault(); data.onSubmit(e); } }  >
      { (data.header !== undefined) && <h1 className={ getClassNames("header", data.className, defaultClasses)}>{data.header}</h1> }
      { data.inputs.map((input) => (
        getElementByInput(input) 
      ))}
      { data.children }
      { (data.submitButtonText !== undefined) && <Button type="submit">{data.submitButtonText}</Button> }
    </form>
  );
};