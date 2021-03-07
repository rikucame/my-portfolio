import { graphql } from "gatsby";
import React from "react"
import { FrameInPhotosList } from "../components/Parts/FrameInPhotosList";

const FilteredPhotos: React.FC = ({data}) => {
  const { edges } = data.allFile;
  console.log(edges);
  const fileNames = edges.map(({node}: any) => {
    return node.relativePath
  })
  console.log(fileNames);
  return (
    <div>
      <p>photos</p>
      <FrameInPhotosList fileNames={fileNames} />
    </div>
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