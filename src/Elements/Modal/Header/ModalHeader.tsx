import React, { HTMLAttributes } from 'react';
import { Button, Flex, Heading } from '../..';

import "./ModalHeader.scss"

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  buttonClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex {...rest} className={`ModalHeader ${rest.className}`}>
      <Heading>
        {(rest.header !== undefined) && rest.header}
      </Heading>
      <Button type="button" onClick={rest.buttonClick}>x</Button>
      {children}
    </Flex>
  );
};