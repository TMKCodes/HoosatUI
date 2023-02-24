import React, { AnchorHTMLAttributes } from 'react';

import './Anchor.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string,
}

export const Anchor: React.FC<AnchorProps> = ({
  children,
  href,
  ...rest
}) => {
  return (
    <a {...rest} href={href} className={`Anchor ${rest.className}`}>{children}</a>
  );
}