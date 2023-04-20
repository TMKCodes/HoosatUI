import React, { HTMLAttributes } from 'react';
import { Flex, Grid } from '..';
import { ModalBody } from "./Body/ModalBody"
import { ModalFooter } from "./Footer/ModalFooter"
import { ModalHeader } from "./Header/ModalHeader"

import "./Modal.css"

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
}

export const Modal: React.FC<ModalProps> = ({
  children,
  ...rest
}) => {

  return (
    <Grid {...rest} className={`ModalContainer ${(rest.className !== undefined) ? rest.className : ""}`}>
      <Grid className='ModalInner'>
        <Flex className='ModalContent'>
          {(children !== undefined) ? children : (
            <>
            <ModalHeader></ModalHeader>
            <ModalBody></ModalBody>
            <ModalFooter></ModalFooter>
            </>
          )}
        </Flex>
      </Grid>
    </Grid>
  );
};