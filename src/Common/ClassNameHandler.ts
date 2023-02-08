import { ClassNamesType } from "../@types";


export const getClassNames = (key: keyof ClassNamesType, classNames: ClassNamesType | undefined, defaultClasses: ClassNamesType) => {
  if(key !== undefined) {
    if (classNames !== undefined) {
      if (classNames[key]?.includes("reset-all-before")) {
        return classNames[key];
      } else {
        return defaultClasses[key] + " " + classNames[key];
      }
    } else {
      return defaultClasses[key]
    }
  }
  return ""
}

export const getClassName = (className: string | undefined, defaultClasses: string) => {
  if (className !== undefined) {
    if (className?.includes("reset-all-before")) {
      return className;
    } else {
      return defaultClasses + " " + className;
    }
  } else {
    return defaultClasses
  }
}