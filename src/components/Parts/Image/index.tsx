import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

type Props = {
  className?: string;
  fileName: string;
  alt?: string;
};

export const Image: React.FC<Props> = ({ className, fileName, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find((n: { node: { relativePath: string } }) => n.node.relativePath === fileName);
      if (!image) return null;
      const imageFluid = image.node.childImageSharp.fluid;
      const { aspectRatio } = imageFluid;
      const width = `calc(100% * ${aspectRatio < 1 ? aspectRatio : 1})`;
      const height = `calc(100% / ${aspectRatio > 1 ? aspectRatio : 1})`;
      return (
        <Img
          style={{ width, height }}
          className={`${className} ${imageFluid.aspectRatio}`}
          alt={alt}
          fluid={imageFluid}
        />
      );
    }}
  />
);
