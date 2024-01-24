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
  header,
  navigation,
  body,
  sidebar,
  footer,
  ...rest
}) => {
  return (
    <Grid {...rest} className={`pagebuilder${rest.className !== undefined ? " " + rest.className : ""}`}>
      { header && <GridItem className="header">{ header }</GridItem> }
      { navigation && <GridItem className="navigation">{ navigation }</GridItem> }
      { body && <GridItem className="content">{ body }</GridItem> }
      { sidebar && <GridItem className="sidebar">{ sidebar }</GridItem> }
      { footer && <GridItem className="footer">{ footer }</GridItem> }
    </Grid>
  );
};
