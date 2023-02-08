
export interface ButtonType {
  id?: string | undefined,
  text?: string | undefined,
  type?: "button" | "submit" | "reset" | undefined,
  className?: string | undefined,
  onClick?(value: React.MouseEvent<HTMLButtonElement, MouseEvent>): void,
  testid?: string,
  children?: React.ReactNode | React.ReactNode[]
}

export interface ClassNamesType {
  [key: string]: string;
}

export interface InputType {
  id?: string | undefined,
  label?: string | undefined,
  type?: string | undefined,
  placeholder?: string | undefined,
  className?: ClassNamesType | undefined,
  onChange(value: React.ChangeEvent<HTMLInputElement>): void,
  value?: string,
}

export interface InputListType {
  inputs: InputType[] | undefined
}

export interface NotificationType {
  id?: string | undefined,
  message: string | undefined, 
  type: string | undefined,
  className?: string | undefined
}

export interface ModalType {
  children?: React.ReactNode | React.ReactNode[];
  className?: ClassNamesType | undefined,
}

export interface ModalBodyType {
  children?: React.ReactNode | React.ReactNode[];
  className?: string | undefined,
}

export interface ModalFooterType {
  children?: React.ReactNode | React.ReactNode[];
  className?: string | undefined,
}

export interface ModalHeaderType {
  children?: React.ReactNode | React.ReactNode[];
  header?: string | undefined
  onClose?(): void;
  className?: ClassNamesType | undefined,
}

export interface TableCellType {
  _id: string,
  selected: boolean,
  data: Object,
  onClick?(value: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>): void,
}

export interface TableType {
  rows: TableCellType[] | undefined;
  className?: ClassNamesType | undefined,
  headers?: string[] | undefined,
}

export interface OptionType {
  value: string,
  text: string,
}

export interface SelectType {
  id?: string | undefined,
  name?: string | undefined,
  label?: string | undefined,
  className?: ClassNamesType | undefined,
  onChange(value: React.ChangeEvent<HTMLSelectElement>): void,
  options?: string[],
  multiple?: boolean
}

export interface ComboboxType {
  id?: string,
  label?: string | undefined,
  options: string[],
  className?: ClassNamesType | undefined,
  onSelect?(value: string[]): void,
  multiple?: boolean,
  search?: boolean,
  value?: string,
}
