import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { StyledImage } from './style';

type Props = {
  className?: string;
  fileName: string;
  alt?: string;
}

export const SvgImage:React.FC<Props> = ({ className, fileName, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n: { node: { relativePath: string; }; }) => n.node.relativePath === fileName);
      if (!image) return null;
      const { publicURL } = image.node;
      return (
        <StyledImage
          className={className}
          alt={alt}
          src={publicURL}
        />
      );
    }}
  />
);
