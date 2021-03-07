import React, { Children } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";
import { StyledLayout, PhotoGrapherStyle, ChildrenWrap } from "./style";
import { GlobalStyle } from "../../../theme/globbalStyle";
import { Header } from "../Header";

type Props = {
  meta:{
    description: string;
    keywords: string;
  }
}

export const Layout: React.FC = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <PhotoGrapherStyle />
      <Helmet
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      >
        <html lang="ja" />
      </Helmet>
      <Header />
      <ChildrenWrap>
        {children}
      </ChildrenWrap>
    </StyledLayout>
  );
};
