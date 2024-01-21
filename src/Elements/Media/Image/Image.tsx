import React, { ImgHTMLAttributes, MapHTMLAttributes, useEffect } from 'react';
import './Image.css';

/**
 * A styled Image tag component.
 * @typedef {Object} ImageProps - Props for the Image component
 * @extends ImgHTMLAttributes<HTMLImageElement>
 */
interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {

}

/**
 * A styled ImageMap tag component.
 * @typedef {Object} ImageMapProps - Props for the ImageMap component
 * @extends MapHTMLAttributes<HTMLMapElement> 
 */
interface ImageMapProps extends MapHTMLAttributes<HTMLMapElement> {

}

/**
 * Image component
 * @param {ImageProps} props - Props for the Image component
 * @returns {React.ReactElement} - Rendered Image component
 */
export const Image: React.FC<ImageProps> = ({
  children,
  ...rest
}: ImageProps): React.ReactElement => {
  return (
    <img
      {...rest}
      className={`Image${(rest.className !== undefined) ? " " + rest.className : ""}`}
      alt={(rest.alt !== undefined) ? rest.alt : 'alt missing, not erroring'}
      loading='lazy'
    />
  );
};

/**
 * ImageMap component
 * @param {ImageMapProps} props - Props for the ImageMap component
 * @returns {React.ReactElement} - Rendered ImageMap component
 */
export const ImageMap: React.FC<ImageMapProps> = ({
  children,
  ...rest
}) => {
  return (
    <map {...rest} className={`Map${(rest.className !== undefined) ? " " + rest.className : ""}`}>{ children }</map>
  );
}