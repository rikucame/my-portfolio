import React from "react";
import { Name } from "./style";

export type props = {
  mySide: "photographer" | "developer";
};

export const NameText: React.FC<props> = ({ mySide }) => {
  return (
    <Name to={`/${mySide}`} photographer={mySide == "photographer"}>
      {mySide == "photographer" ? "Rikkun" : "Rikuto"}
    </Name>
  );
};
