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

  const getElementByInput: any = (input: FormInputProps) => {
    switch(input.itype) {
      case "container": 
        return <div key={`${input.id}`}{...input}>
        {input.inputs.map((input: any) => (
          getElementByInput(input)
        ))}
        </div>
      case "input":
        return <Input key={`${input.id}`} onChange={input.onChange} {...input} />
      case "select":
        return <Select key={`${input.id}`} onChange={input.onChange} {...input} />
      case "combobox":
        return <Combobox key={`${input.id}`} options={input.options} {...input} />
      case "button":
        return <Button key={`${input.id}`} {...input}>{input.children}</Button>
      case "textarea":
        return <Textarea key={`${input.id}`} {...input}>{input.children}</Textarea>
      case "message": 
        return <Message key={`${input.id}`} message={input.message} type={input.type} {...input}></Message>
      default:
        return <></>
    }
  }

  return (
    <Form id={rest.id} {...rest} onSubmit={(e) => { e.preventDefault(); rest.onSubmit(e); } }  >
        <Grid>
          { header !== undefined && <Heading variant="h2">{header}</Heading> }
          { inputs.map((input) => (
            getElementByInput(input) 
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
