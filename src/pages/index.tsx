import React from "react";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Modules/Layout";
import styled from "styled-components";
import { FrameInPhotosList } from "../components/Parts/FrameInPhotosList";

const Index = ({ data }: any) => {
  console.log(data)
  const filteredEdges = data.allFile.edges.filter(({ node }: any) => {
    return node.relativeDirectory.length
  });
  const fileNames = filteredEdges.map(({node}: any) => {
    return node.relativePath
  })
  console.log(filteredEdges);
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
    allFile {
      edges {
        node {
          relativeDirectory
          relativePath
        }
      }
    }
  }
`

export default Index;
