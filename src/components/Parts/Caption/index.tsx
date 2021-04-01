import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Paper } from './style';

type Props = {
  className?: string;
};

export const Caption: React.FC<Props> = ({ className, children }) => {
  const { file } = useStaticQuery(
    graphql`
      query PaperBgImageQuery {
        file(relativePath: { eq: "frame_bg.png" }) {
          publicURL
        }
      }
    `
  );
  return (
    <Paper className={className} bgImage={file.publicURL}>
      {children}
    </Paper>
  );
};
