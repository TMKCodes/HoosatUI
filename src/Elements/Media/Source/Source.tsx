import React, { SourceHTMLAttributes } from 'react';

interface SourceProps extends SourceHTMLAttributes<HTMLSourceElement>{

}

export const Source: React.FC<SourceProps> = ({
  ...rest
}) => {
  return (
    <Source {...rest} className={`Source ${rest.className}`} />
  );
}