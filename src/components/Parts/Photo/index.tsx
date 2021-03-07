import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { ImageWrap } from './style';

type Props = {
  className?: string;
  directory: string;
  alt?: string;
}

export const Photo:React.FC<Props> = ({ className, directory, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativeDirectory
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
    render={(data) => {
      const image = data.images.edges.find((n: { node: { relativeDirectory: string; }; }) => n.node.relativeDirectory.indexOf(directory) >= 0);
      if (!image) return null;
      const imageFluid = image.node.childImageSharp.fluid;
      const { aspectRatio } = imageFluid
      const width = `calc(100% * ${ aspectRatio < 1 ? aspectRatio : 1})`;
      const height = `calc(100% / ${ aspectRatio > 1 ? aspectRatio : 1})`;
      return (
        <Img
          style={{width, height}}
          className={`${className} ${imageFluid.aspectRatio}`}
          alt={alt}
          fluid={imageFluid}
        />
      );
    }}
  />
);
