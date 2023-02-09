import { CSSProperties, HTMLInputTypeAttribute } from "react";

export interface ButtonType extends GlobalAttributes {
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[]
  className?: string,
  // Button Attributes
  type?: "button" | "submit" | "reset",
  autofocus?: boolean,
  disabled?: boolean,
  form?: string,
  formAction?: string,
  formEnctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain",
  formMethod?: "GET" | "POST",
  formNoValidate?: boolean,
  formTarget?: "_blank" | "_self" | "_parent" | "_top" | string,
  name?: string,
  value?: string,
}

export interface InputType extends GlobalAttributes {
  // Own attributes
  label?: string,
  // Overwritten attributes
  children?: React.ReactNode | React.ReactNode[]
  className?: ClassNamesType,
  // Input Attributes
  value?: string,
  accept?: string,
  alt?: string,
  autocomplete?: string | "on" | "off",
  autofocus?: boolean,
  checked?: boolean,
  disabled?: boolean,
  form?: string,
  formAction?: string,
  formEnctype?: "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain",
  formMethod?: "GET" | "POST",
  formNoValidate?: boolean,
  formTarget?: "_blank" | "_self" | "_parent" | "_top" | string,
  height?: string | number,
  list?: string,
  max?: string | number,
  maxLength?: number,
  min?: string | number,
  minLength?: number,
  pattern?: string,
  placeholder?: string,
  readonly?: boolean,
  required?: boolean,
  size?: number,
  src?: string,
  step?: string | number,
  type?: HTMLInputTypeAttribute,
  id?: string,
}

export interface InputListType extends GlobalAttributes {
  // Own attributes
  inputs: InputType[]
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[]
  className?: string,
}

export interface MessageType extends GlobalAttributes {
  // Own attributes
  message: string, 
  type: string,
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[]
  className?: string,
}

export interface ModalType extends GlobalAttributes {
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: ClassNamesType,
}

export interface ModalBodyType extends GlobalAttributes {
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: string,
}

export interface ModalFooterType extends GlobalAttributes {
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[];
  className?: string
}

export interface ModalHeaderType extends GlobalAttributes {
  header?: string;
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[];
  className?: ClassNamesType
}

export interface TableCellType extends GlobalAttributes {
  // Own attributes
  _id: string,
  selected: boolean,
  data: Object,
}

export interface TableType extends GlobalAttributes {
  // Own attributes
  rows: TableCellType[];
  headers?: string[],
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: ClassNamesType,
}

export interface OptionType extends GlobalAttributes {
  // Own attributes
  text: string,
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: string,
  // Option attributes
  disabled?: boolean,
  label?: string,
  selected?: boolean,
  value?: string
}

export interface SelectType extends GlobalAttributes {
  // Own attributes
  label?: string,
  options?: string[],
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: ClassNamesType,
  // Select attributes
  autofocus?: boolean,
  disabled?: boolean,
  form?: string,
  multiple?: boolean,
  name?: string,
  required?: boolean,
  size?: number,
}

export interface ComboboxType extends GlobalAttributes {
  // Own attributes
  label?: string,
  options: string[],
  multiple?: boolean,
  search?: boolean,
  // Overwritten types
  children?: React.ReactNode | React.ReactNode[],
  className?: ClassNamesType,
}

/** START OF GLOBAL TYPES
 */

export interface ClassNamesType {
  [key: string]: string;
}

export interface GlobalAttributes extends MiscEvents, ClipboardEvents, DragEvents, MouseEvents, KeyboardEvents, FormEvents, WindowEvents {
  accessKey?: string,
  className?: string | ClassNamesType,
  contentEditable?: boolean,
  dir?: "ltr" | "rtl" | "auto",
  draggable?: boolean,
  hidden?: boolean,
  id?: string,
  lang?: string,
  spellCheck?: boolean,
  style?: CSSProperties,
  tabIndex?: number,
  title?: string,
  translate?: "yes" | "no"
}


export interface MiscEvents {
  onToggle?(value: React.BaseSyntheticEvent): void,
}

export interface ClipboardEvents {
  onCopy?(value: React.BaseSyntheticEvent): void,
  onCut?(value: React.BaseSyntheticEvent): void,
  onPaste?(value: React.BaseSyntheticEvent): void,
}

export interface DragEvents {
  onDrag?(value: React.BaseSyntheticEvent): void,
  onDragEnd?(value: React.BaseSyntheticEvent): void,
  onDragEnter?(value: React.BaseSyntheticEvent): void,
  onDragLeave?(value: React.BaseSyntheticEvent): void,
  onDragOver?(value: React.BaseSyntheticEvent): void,
  onDragStart?(value: React.BaseSyntheticEvent): void,
  onDrop?(value: React.BaseSyntheticEvent): void,
  onScroll?(value: React.BaseSyntheticEvent): void,
}

export interface MouseEvents {
  onClick?(value: React.BaseSyntheticEvent): void,
  onDoubleClick?(value: React.BaseSyntheticEvent): void,
  onMouseDown?(value: React.BaseSyntheticEvent): void,
  onMouseMove?(value: React.BaseSyntheticEvent): void,
  onMouseOut?(value: React.BaseSyntheticEvent): void,
  onMouseOver?(value: React.BaseSyntheticEvent): void,
  onMouseUp?(value: React.BaseSyntheticEvent): void,
  onMouseWheel?(value: React.BaseSyntheticEvent): void,
  onWheel?(value: React.BaseSyntheticEvent): void,
}

export interface KeyboardEvents {
  onKeyDown?(value: React.BaseSyntheticEvent): void,
  onKeyPress?(value: React.BaseSyntheticEvent): void,
  onKeyUp?(value: React.BaseSyntheticEvent): void,
}

export interface FormEvents {
  onBlur?(value: React.BaseSyntheticEvent): void,
  onChange?(value: React.BaseSyntheticEvent): void,
  onContextMenu?(value: React.BaseSyntheticEvent): void,
  onFocus?(value: React.BaseSyntheticEvent): void,
  onInput?(value: React.BaseSyntheticEvent): void,
  onInvalid?(value: React.BaseSyntheticEvent): void,
  onReset?(value: React.BaseSyntheticEvent): void,
  onSearch?(value: React.BaseSyntheticEvent): void,
  onSelect?(value: React.BaseSyntheticEvent): void,
  onSubmit?(value: React.BaseSyntheticEvent): void,
}

export interface WindowEvents {
  onAfterPrint?(value: React.BaseSyntheticEvent): void,
  onBeforePrint?(value: React.BaseSyntheticEvent): void,
  onBeforeUpload?(value: React.BaseSyntheticEvent): void,
  onError?(value: React.BaseSyntheticEvent): void,
  onHashChange?(value: React.BaseSyntheticEvent): void,
  onBeforeUpload?(value: React.BaseSyntheticEvent): void,
  onMessage?(value: React.BaseSyntheticEvent): void,
  onOffline?(value: React.BaseSyntheticEvent): void,
  onOnline?(value: React.BaseSyntheticEvent): void,
  onPageHide?(value: React.BaseSyntheticEvent): void,
  onPageShow?(value: React.BaseSyntheticEvent): void,
  onPopState?(value: React.BaseSyntheticEvent): void,
  onResize?(value: React.BaseSyntheticEvent): void,
}