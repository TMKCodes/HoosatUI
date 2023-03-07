import React, { FormHTMLAttributes } from "react";
import { Button, Combobox, Form, Grid, Heading, Input, Select, Textarea } from "../../Elements";

interface FormInputProps {
  itype: string,
  [key: string]: any  
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitbuttontext: string | undefined, 
  header?: string,
  inputs: FormInputProps[], 
  onSubmit(value: React.BaseSyntheticEvent): void,
}


export const FormBuilder: React.FC<FormProps> = ({
  children,
  ...rest
}) => {

  const getElementByInput: any = (input: FormInputProps) => {
    switch(input.itype) {
      case "container": 
        return <div key={`${input.itype}`}{...input}>
        {input.inputs.map((input: any) => (
          getElementByInput(input)
        ))}
        </div>
      case "input":
        return <Input key={`${input.itype}`} onChange={input.onChange} {...input} />
      case "select":
        return <Select key={`${input.itype}`} onChange={input.onChange} {...input} />
      case "combobox":
        return <Combobox key={`${input.itype}`} options={input.options} {...input} />
      case "button":
        return <Button key={`${input.itype}`} {...input}>{input.children}</Button>
      case "textarea":
        return <Textarea key={`${input.itype}`} {...input}>{input.children}</Textarea>
      default:
        return <></>
    }
  }

  return (
    <Form id={rest.id} {...rest} onSubmit={(e) => { e.preventDefault(); rest.onSubmit(e); } }  >
        <Grid style={{ gap: "0.5rem", padding: "1rem"}}>
          <Heading variant="h2" style={{margin: "0px"}}>{rest.header}</Heading>
          { rest.inputs.map((input) => (
            getElementByInput(input) 
          ))}
          { children }
          <Button style={{ width: "100%" }} onClick={(e) => { e.preventDefault(); rest.onSubmit(e); }}>
            {(rest.submitbuttontext !== undefined) ? rest.submitbuttontext : "Send" }
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
