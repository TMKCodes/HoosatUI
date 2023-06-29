import React, { HTMLAttributes } from "react";
import { Grid, GridItem } from "../../Elements";

import './PageBuilder.css'

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  header?: JSX.Element | JSX.Element[];
  navigation?: JSX.Element | JSX.Element[];
  body?: JSX.Element | JSX.Element[];
  sidebar?: JSX.Element | JSX.Element[];
  footer?: JSX.Element | JSX.Element[];
}

export const PageBuilder: React.FC<PageProps> = ({
  children,
  ...rest

}) => {
  return (
    <Grid {...rest} className={`pagebuilder ${rest.className}`}>
      { rest.header && <GridItem className="header">{rest.header}</GridItem> }
      { rest.navigation && <GridItem className="navigation">{rest.navigation}</GridItem> }
      { rest.body && <GridItem className="content">{rest.body}</GridItem> }
      { rest.sidebar && <GridItem className="sidebar">{rest.sidebar}</GridItem> }
      { rest.footer && <GridItem className="footer">{rest.footer}</GridItem> }
    </Grid>
  );
};
