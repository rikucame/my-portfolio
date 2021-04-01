import React from 'react';
import { Navigation, LinkList, LinkItem, BorderLinkItem, StyledLinkText } from './style';
import { graphql, useStaticQuery } from 'gatsby';
import { transformPagePathToLabel } from '../../../theme/constants';

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
        allSitePage(filter: { path: { ne: "/" } }) {
          nodes {
            path
          }
        }
      }
    `
  );
  const NavItems = allSitePage.nodes.flatMap(({ path }) => {
    return !path.includes('404') ? path : [];
  });
  return (
    <Navigation isDisplay={isDisplay}>
      <LinkList isDisplay={isDisplay}>
        {NavItems.map(path => {
          const label = transformPagePathToLabel(path);
          console.log(label === 'About');
          return label === 'About' ? (
            <BorderLinkItem>
              <StyledLinkText key={label} to={path} label={label} isDisplay={isDisplay} />
            </BorderLinkItem>
          ) : (
            <LinkItem>
              <StyledLinkText key={label} to={path} label={label} isDisplay={isDisplay} />
            </LinkItem>
          );
        })}
      </LinkList>
    </Navigation>
  );
};
