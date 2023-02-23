import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import './Heading.scss';

interface HeadingProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  variant?: string;
}


export const Heading: React.FC<HeadingProps> = ({
  children,
  variant = 'h1',
  ...rest
}) => {
  return (
    <>
    { (variant === "h1") 
      ? <h1 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h1>
      : (variant === "h2")
      ? <h2 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h2>
      : (variant === "h3")
      ? <h3 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h3>
      : (variant === "h4")
      ? <h4 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h4>
      : (variant === "h5")
      ? <h5 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h5>
      : (variant === "h6")
      ? <h6 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h6>
      : <h1 {...rest} className={`Heading ${variant} ${rest.className}`}>
        {children}
        </h1>
    } 
    </>
  );
}