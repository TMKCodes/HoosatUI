import React, { OlHTMLAttributes, LiHTMLAttributes } from 'react';

import './List.scss';

/**
 * A styled List tag component.
 * @typedef {Object} ListProps - Props for the List component
 * @param {string} [props.marker] - Variant of the List element, either 'ul', 'ol' or 'none'.
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
interface ListProps extends OlHTMLAttributes<HTMLOListElement> {
  marker?: string
}

/**
 * A styled ListItem tag component.
 * @typedef {Object} ListItemProps - Props for the ListItem component
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
interface ListItemProps extends LiHTMLAttributes<HTMLLIElement> {

}

/**
 * List component
 * @param {ListProps} props - Props for the List component
 * @returns {React.ReactElement} - Rendered List component
 */
export const List: React.FC<ListProps> = ({
  children,
  marker,
  ...rest
}) => {
  return (
    <>
      { (marker === "ol") 
        ? <ol {...rest} className={`List ${(rest.className !== undefined) ? rest.className : ""}`} style={{ listStyleType: "disc", ...rest.style }}>{ children }</ol>
        : (marker === "ul") 
        ? <ul {...rest} className={`List ${(rest.className !== undefined) ? rest.className : ""}`} style={{ listStyleType: "number", ...rest.style }}>{ children }</ul>
        : <ul {...rest} className={`List ${(rest.className !== undefined) ? rest.className : ""}`} style={{ listStyleType: "none", ...rest.style }}>{ children }</ul>
      }
    </>
  );
}

/**
 * ListItem component
 * @param {ListItemProps} props - Props for the ListItem component
 * @returns {React.ReactElement} - Rendered ListItem component
 */
export const ListItem: React.FC<ListItemProps> = ({
  children,
  ...rest
}) => {
  return (
    <li {...rest} className={`ListItem ${(rest.className !== undefined) ? rest.className : ""}`}>{ children }</li>
  );
}