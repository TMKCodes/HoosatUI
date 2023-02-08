import React from 'react';
import { ModalBodyType } from '../@types';
import { getClassName } from '../Common/ClassNameHandler';



export const ModalBody: React.FC<ModalBodyType> = (data) => {
  const defaultClasses = "relative p-4";
  
  return (
    <div className={ getClassName(data.className, defaultClasses) }>
      {(data.children !== undefined) && data.children}
    </div>
  );
};