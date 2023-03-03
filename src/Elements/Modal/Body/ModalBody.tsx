import React, { HTMLAttributes } from 'react';
import { Grid } from '../..';

import "./ModalBody.tsx";

interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {
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