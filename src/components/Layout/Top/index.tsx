import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";

import Container from "../../Container";
import { TopPage, TopPageStyle } from "./style";
import { GlobalStyle } from "../../../theme/globbalStyle";

export const Top: React.FC = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <TopPage>
          <GlobalStyle />
          <TopPageStyle />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
            ]}
          >
            <html lang="en" />
          </Helmet>
          {children}
        </TopPage>
      )}
    />
  );
};
