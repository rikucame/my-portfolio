import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Modules/Layout";
import { FrameInPhotosList } from "../components/Parts/FrameInPhotosList";

type Props = {
  data: {
    allFile: {
      edges: {
        node: {
          relativePath: string;
        };
      }[];
    };
  };
};

const Index: React.FC<Props> = ({ data }) => {
  
  const fileNames = data.allFile.edges.map(({node}) => {
    return node.relativePath;
  });
  return (
    <Layout>
      <h1>I'm Photographer</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <FrameInPhotosList fileNames={fileNames} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {ne: ""}}, sort: {fields: relativePath, order: ASC}) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

export default Index;
