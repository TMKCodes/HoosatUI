import React, { AudioHTMLAttributes } from 'react';

import './Audio.scss';

interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement>{

}

export const Audio: React.FC<AudioProps> = ({
  children,
  ...rest
}) => {
  return (
    <audio {...rest} className={`Audio ${rest.className}`} >{ children }</audio>
  );
}