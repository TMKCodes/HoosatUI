import React from 'react';
import { ModalType, ClassNamesType } from '../@types';
import { getClassNames } from '../Common/ClassNameHandler';


export const Modal: React.FC<ModalType> = (data) => {

  const defaultClasses: ClassNamesType = {
    container: "fade fixed sm:top-[25%] sm:left-[25%] top-0 left-0 w-1/2 h-full outline-none overflow-x-hidden overflow-y-auto",
    inner: "relative w-auto pointer-events-none",
    content: "border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-slate-100 bg-clip-padding rounded-md outline-none text-current"
  }

  return (
    <div className={getClassNames("container", data.className, defaultClasses)}>
      <div className={getClassNames("inner", data.className, defaultClasses)}>
        <div className={getClassNames("content", data.className, defaultClasses)}>
          {data.children}
        </div>
      </div>
    </div>
  );
};