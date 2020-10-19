import React from "react";
import { Link } from "gatsby";

import Layout from "../../components/Layout";

const SecondPage = () => (
  <Layout>
    <h1>I'm Enginer</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
