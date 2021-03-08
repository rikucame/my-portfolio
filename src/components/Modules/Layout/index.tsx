import React, { Children, useEffect, useState } from "react";
import Helmet from "react-helmet";
import { StyledLayout, PhotoGrapherStyle, Main, CurentPage } from "./style";
import { GlobalStyle } from "../../../theme/globbalStyle";
import { Header } from "../Header";
import { rewritePathToLabel } from "../../../theme/constants";

type Props = {
  meta?:{
    description: string;
    keywords: string;
  };
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('/')
  useEffect(() => {
  const currentPageText = location.pathname !== '/' ? rewritePathToLabel(location.pathname) : 'All Photos';
  setCurrentPage(currentPageText);
  }, []);
  return (
    <StyledLayout>
      <GlobalStyle />
      <PhotoGrapherStyle />
      <Helmet
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
          { name: "lang", content: "ja"}
        ]}
      >
      </Helmet>
      <Header />
      <Main>
        <CurentPage>{currentPage}</CurentPage>
        {children}
      </Main>
    </StyledLayout>
  );
};
