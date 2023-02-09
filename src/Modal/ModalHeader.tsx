import React from 'react';
import { ClassNamesType, ModalHeaderType } from '../@types';
import { Button } from '../Button/Button';
import { getClassNames } from '../Common/ClassNameHandler';


export const ModalHeader: React.FC<ModalHeaderType> = (data) => {
  const defaultClasses: ClassNamesType = {
    container: "flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md",
    header: "text-xl font-medium leading-normal text-gray-800",
    closeButton: "reset-all-before box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
  }

  return (
    <div className={ getClassNames("container", data.className, defaultClasses)}>
      <h5 className={ getClassNames("header", data.className, defaultClasses)}>
        {(data.header !== undefined) && data.header}
      </h5>
      <Button type="button" value="x" onClick={data.onClick} className={ getClassNames("closeButton", data.className, defaultClasses) }/>
      {(data.children !== undefined) && data.children}
    </div>
  );
};