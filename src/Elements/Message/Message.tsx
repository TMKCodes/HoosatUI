import React, { HTMLAttributes } from "react";
import { Grid } from "../Grid/Grid";
import { Paragraph } from "../Text/Paragraph/Paragraph";

import "./Message.css"

interface MessageType extends HTMLAttributes<HTMLDivElement> {
  // Own attributes
  message: string, 
  type: string,
}
export const Message: React.FC<MessageType> = ({
  children,
  ...rest
}) => {
  return (
    <Grid {...rest} className={`Message MessageType${rest.type}${(rest.className !== undefined) ? " " + rest.className : ""}`}>
      <Paragraph>{rest.message}</Paragraph>
    </Grid>
  );
};