import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql, Link } from "gatsby";

import { Section, MySide, WrapNameText, DummyBox } from "./style";
import { props } from "../NameText";

export const TopSection: React.FC<props> = ({ mySide }) => {
  const photographerSide = mySide == "photographer";
  return (
    <Section photographerSide={photographerSide}>
      <WrapNameText mySide={mySide} />
      <MySide photographerSide={photographerSide}>
        <Link to={`/${mySide}`}>{mySide}</Link>
      </MySide>
      <DummyBox />
    </Section>
  );
};
