import React, { HTMLAttributes } from "react";
import { Grid, GridItem } from "../../Elements";

import './PageBuilder.scss'

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  header?: JSX.Element | JSX.Element[];
  navigation?: JSX.Element | JSX.Element[];
  content?: JSX.Element | JSX.Element[];
  sidebar?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

export const PageBuilder: React.FC<PageProps> = ({
  children,
  ...rest

}) => {
  return (
    <Grid {...rest} className={`pagebuilder ${rest.className}`}>
      { (rest.header !== undefined) && 
        <GridItem className="header">
          {rest.header}
        </GridItem>
      }
      { (rest.navigation !== undefined) && 
        <GridItem className="navigation">
          {rest.navigation}
        </GridItem>
      }
      { (rest.content !== undefined) && 
        <GridItem className="content">
          {rest.content}
        </GridItem>
      }
      { (rest.sidebar !== undefined) && 
        <GridItem className="sidebar">
          {rest.sidebar}
        </GridItem>
      }
      { (rest.footer !== undefined) && 
        <GridItem className="footer">
          {rest.footer}
        </GridItem>
      }
    </Grid>
  );
};
