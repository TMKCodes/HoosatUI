import React, { HTMLAttributes, ReactNode } from 'react';
import { Flex } from '../..';

import './ModalFooter.css'

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex  {...rest} className={`ModalFooter ${(rest.className !== undefined) ? rest.className : ""}`}>
      {children}
    </Flex>
  );
};
