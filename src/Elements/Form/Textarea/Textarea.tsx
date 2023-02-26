import React, { TextareaHTMLAttributes } from "react";
import './Textarea.scss';


interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'primary' | 'secondary';
  id?: string,
  label?: string
}

export const Textarea: React.FC<TextareaProps> = ({
  children,
  variant = 'primary',
  ...rest
}) => {
 
  return (
    <>
      { (rest.label !== undefined) &&
        <label htmlFor={(rest.id !== undefined) ? rest.id : rest.label} className={`Textarea`}>
          {rest.label}
        </label>
      }
      <textarea
        {...rest}
        id={(rest.id !== undefined) ? rest.id : rest.label }
        className={`Textarea ${variant} ${rest.className}`}>
        {children}
      </textarea>
    </>
  );
};