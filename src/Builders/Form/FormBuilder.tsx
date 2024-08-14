import React, { FormHTMLAttributes, ReactNode } from "react";
import { Button, Combobox, Form, Grid, Heading, Input, Message, Select, Textarea } from "../../Elements";

interface FormInputProps {
  itype: string,
  [key: string]: any  
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode | ReactNode[];
  submitbuttontext: string | undefined, 
  submitbuttonid?: string | undefined, 
  header?: string,
  inputs: FormInputProps[], 
  onSubmit(value: React.BaseSyntheticEvent): void,
}

export const FormBuilder: React.FC<FormProps> = ({
  children,
  submitbuttontext, 
  submitbuttonid, 
  header,
  inputs, 
  ...rest
}) => {

  const getElementByInput = (input: FormInputProps, key: number) => {
    const { itype, ...inputProps } = input;
    switch(itype) {
      case "container": 
        return <div key={`${key}`}{...inputProps}>
        {inputProps.inputs.map((input: FormInputProps, index: number) => (
          getElementByInput(input,  key * index)
        ))}
        </div>
      case "input":
        return <Input key={`${key}`} onChange={inputProps.onChange} {...inputProps} />
      case "select":
        return <Select key={`${key}`} onChange={inputProps.onChange} {...inputProps} />
      case "combobox":
        return <Combobox key={`${key}`} options={inputProps.options} {...inputProps} />
      case "button":
        return <Button key={`${key}`} {...inputProps}>{inputProps.children}</Button>
      case "textarea":
        return <Textarea key={`${key}`} {...inputProps}>{inputProps.children}</Textarea>
      case "message": 
        return <Message key={`${key}`} message={inputProps.message} type={inputProps.type} {...inputProps}></Message>
      default:
        return <></>
    }
  }

  return (
    <Form id={rest.id} {...rest} onSubmit={(e) => { e.preventDefault(); rest.onSubmit(e); } }  >
        <Grid>
          { header !== undefined && <Heading variant="h2">{header}</Heading> }
          { inputs.map((input, index) => (
            getElementByInput(input, index) 
          ))}
          { children }
          <Button id={submitbuttonid} style={{ width: "100%" }} onClick={(e) => { e.preventDefault(); rest.onSubmit(e); }}>
            {( submitbuttontext !== undefined) ? submitbuttontext : "Send" }
          </Button>
        </Grid>
     </Form>
  );
};

/**
  inputs={[
    { 
      itype: "container"
      id: "container-test"
      className: "",
      inputs: [
        { 
          itype: "input", 
          id: "input-test", 
          label: "testing",
          type: "text", 
          placeholder: "Type some text here.", 
          className: { label: "", input: ""},  
          onChange: (e: React.BaseSyntheticEvent) => {  }, 
          value: "" 
        },
        {
          itype: "message":
          id: "message-test"
        }
      ]
    },
    { 
      itype: "input", 
      id: "input-test", 
      label: "testing",
      type: "text", 
      placeholder: "Type some text here.", 
      className: { label: "", input: ""},  
      onChange: (e: React.BaseSyntheticEvent) => {  }, 
      value: "" 
    },
    {
      itype: "select",
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
      itype: "combobox",
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
