import React, { LabelHTMLAttributes } from 'react';

import './Label.scss';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {

}

export const Label: React.FC<LabelProps> = ({
  children,
  ...rest
}) => {
  return (
    <label {...rest}>{children}</label>
  );
}