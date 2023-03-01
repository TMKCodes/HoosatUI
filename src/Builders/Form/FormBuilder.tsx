import React, { FormHTMLAttributes } from "react";
import { Button, Combobox, Form, Grid, Heading, Input, Select, Textarea } from "../../Elements";

interface FormInputProps {
  inputType: string,
  [key: string]: any  
}

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  submitButtonText: string | undefined, 
  header?: string,
  inputs: FormInputProps[], 
  onSubmit(value: React.BaseSyntheticEvent): void,
}


export const FormBuilder: React.FC<FormProps> = ({
  children,
  ...rest
}) => {

  const getElementByInput: any = (input: FormInputProps) => {
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
      case "button":
        return <Button {...input}>{input.children}</Button>
      case "textarea":
        return <Textarea {...input}>{input.children}</Textarea>
      default:
        return <></>
    }
  }

  return (
    <Form id={rest.id} data-testid={rest.id} 
      onSubmit={(e) => { e.preventDefault(); rest.onSubmit(e); } }  >
        <Grid style={{ gap: "0.5rem", padding: "1rem"}}>
          <Heading variant="h2">{rest.header}</Heading>
          { rest.inputs.map((input) => (
            getElementByInput(input) 
          ))}
          { children }
          <Button style={{ width: "100%" }} onClick={(e) => { e.preventDefault(); rest.onSubmit(e); }}>
            {(rest.submitButtonText !== undefined) ? rest.submitButtonText : "Send" }
          </Button>
        </Grid>
     </Form>
  );
};

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
