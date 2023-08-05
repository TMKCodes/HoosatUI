import React, { HTMLAttributes, ReactNode } from 'react';
import { Grid } from '../..';

import "./ModalBody.css";

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ModalBody: React.FC<ModalBodyProps> = ({
  children,
  ...rest
}) => {
  return (
    <Grid  {...rest} className={`ModalBody ${(rest.className !== undefined) ? rest.className : ""}`}>
      {children}
    </Grid >
  );
};