import React from "react";
import { Top } from "../components/Layout/Top";
import { TopSection } from "../components/Parts/TopSection";

const TopPage = () => {
  return (
    <Top>
      <TopSection mySide="developer" />
      <TopSection mySide="photographer" />
    </Top>
  );
};

export default TopPage;
