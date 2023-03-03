import React, { AudioHTMLAttributes } from 'react';
import './Audio.scss';

/**
 * A styled Audio tag component.
 * @typedef {Object} AudioProps - Props for the Audio component
 * @extends AudioHTMLAttributes<HTMLAudioElement>
 */
interface AudioProps extends AudioHTMLAttributes<HTMLAudioElement> {

}

/**
 * Audio component
 * @param {AudioProps} props - Props for the Audio component
 * @returns {React.ReactElement} - Rendered Audio component
 */
export const Audio: React.FC<AudioProps> = ({
  children,
  ...rest
}) => {
  return (
    <audio {...rest} className={`Audio ${(rest.className !== undefined) ? rest.className : ""}`} >{ children }</audio>
  );
}