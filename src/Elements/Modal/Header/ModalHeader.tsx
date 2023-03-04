import React, { HTMLAttributes } from 'react';
import { Button, Flex, Heading } from '../..';

import "./ModalHeader.scss"

interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement | HTMLButtonElement> {
  header?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex className={`ModalHeader ${(rest.className !== undefined) ? rest.className : ""}`}>
      <Heading>
        {(rest.header !== undefined) && rest.header}
      </Heading>
      <Button type="button" onClick={rest.onClick}>x</Button>
      {children}
    </Flex>
  );
};