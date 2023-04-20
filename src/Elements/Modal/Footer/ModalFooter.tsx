import React, { HTMLAttributes } from 'react';
import { Flex } from '../..';

import './ModalFooter.css'

interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {
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
