import React from 'react';
import { ModalFooterType } from '../@types';
import { getClassName } from '../Common/ClassNameHandler';


export const ModalFooter: React.FC<ModalFooterType> = (data) => {
  const defaultClasses = "flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md";
  
  return (
    <div className={ getClassName(data.className, defaultClasses) } data-testid="modal-footer-container">
      {(data.children !== undefined && data.children !== null) ? data.children : ""}
    </div>
  );
};