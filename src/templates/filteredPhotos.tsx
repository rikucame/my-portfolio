import { graphql } from "gatsby";
import React from "react"
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

const FilteredPhotos: React.FC<Props> = ({data}) => {
  const fileNames = data.allFile.edges.map(({node}) => {
    return node.relativePath
  })
  console.log(fileNames);
  return (
    <Layout>
      <FrameInPhotosList fileNames={fileNames} />
    </Layout>
  )
}

export const query = graphql`
  query($relativePath: String!) {
    allFile(filter: { relativeDirectory: { eq: $relativePath } }) {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`

export default FilteredPhotos;