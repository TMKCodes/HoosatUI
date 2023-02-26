import React, { VideoHTMLAttributes } from 'react';
import './Video.scss';

/**
 * A styled Video tag component.
 * @typedef {Object} VideoProps - Props for the Video component
 * @extends VideoHTMLAttributes<HTMLVideoElement>
 */
interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {

}

/**
 * Video component
 * @param {VideoProps} props - Props for the Video component
 * @returns {React.ReactElement} - Rendered Video component
 */
export const Video: React.FC<VideoProps> = ({
  children,
  ...rest
}) => {
  return (
    <video {...rest} className={`Video ${rest.className}`} >{ children }</video>
  );
}