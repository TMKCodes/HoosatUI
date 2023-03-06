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
    <Grid {...rest} className={`container ${rest.className}`}>
      <GridItem className="header">
        {rest.header}
      </GridItem>
      <GridItem className="navigation">
        {rest.navigation}
      </GridItem>
      <GridItem className="content">
        {rest.content}
      </GridItem>
      <GridItem className="sidebar">
        {rest.sidebar}
      </GridItem>
      <GridItem className="footer">
        {rest.footer}
      </GridItem>
    </Grid>
  );
};
