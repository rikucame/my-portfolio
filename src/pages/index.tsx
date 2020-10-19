import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "./image";

const IndexPage = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>
      <strong>Thanks for using awesome-gatsby-starter!</strong> Remember to{" "}
      <a href="https://github.com/RobertoMSousa/gatsby-typescript-storybook-starter">
        drop a ⭐ on the project
      </a>{" "}
      if you find it useful.
    </p>
    <div style={{ maxWidth: "300px", marginBottom: "1.45rem" }}>
      <Image />
    </div>
    <Link to="/developer">Go to developer</Link>
    <Link to="/developer/project">Go to project</Link>
    <Link to="/photographer">Go to photographer</Link>
    <Link to="/photographer/garally">Go to garally</Link>
  </Layout>
);

export default IndexPage;
