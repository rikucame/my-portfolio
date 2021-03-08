import React, { useState } from "react";

import {
  Navigation,
  LinkList,
  LinkItem,
  LinkText,
} from "./style";
import { rewritePathToLabel } from "../../../theme/constants";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  isDisplay: boolean;
};

type QueryProps = {
  allSitePage: {
    nodes: {
      path: string;
    }[];
  };
};

export const GlobalNavigation: React.FC<Props> = ({ isDisplay }) => {
  const { allSitePage }: QueryProps = useStaticQuery(
    graphql`
      query GrobalNavigationItems {
        allSitePage(filter: {path: {ne: "/"}}) {
          nodes {
            path
          }
        }
      }
    `
  );
  console.log(allSitePage)
  const NavItems = allSitePage.nodes.flatMap(({ path }) => {
    return !path.includes('404') ? path : [];
  });
  return (
    <Navigation isDisplay={isDisplay}>
      <LinkList isDisplay={isDisplay}>
        {NavItems.map((item) => {
          const path = item;
          const label = rewritePathToLabel(item);
          console.log(label)
          return (
            <LinkItem>
              <LinkText to={path} label={label} />
            </LinkItem>
          );
        })}
      </LinkList>
    </Navigation>
  );
};
