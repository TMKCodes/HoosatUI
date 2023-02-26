import React from 'react';
import { ModalBodyType } from '../@types';
import { Grid } from '../Elements';



export const ModalBody: React.FC<ModalBodyType> = (data) => {
  
  return (
    <Grid style={data.style} {...data} className={data.className}>
      {(data.children !== undefined) && data.children}
    </Grid >
  );
};