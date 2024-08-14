import React, { HTMLAttributes, ReactNode } from 'react';
import { Button, Flex, Heading } from '../..';

import "./ModalHeader.css"

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  children?: ReactNode;
  header?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex className={`ModalHeader${(rest.className !== undefined) ? " " + rest.className : ""}`}>
      <Heading>
        {(rest.header !== undefined) && rest.header}
      </Heading>
      <Button type="button" onClick={rest.onClick}>x</Button>
      {children}
    </Flex>
  );
};