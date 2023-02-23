import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './Paragraph.scss';

interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {

}

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  ...rest
}) => {
  return (
    <p {...rest}>{children}</p>
  );
}