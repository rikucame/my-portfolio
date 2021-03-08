import React from "react";
import { Name } from "./style";

export type props = {
  mySide: "photographer" | "developer";
  path?: string;
  className?: string;
};

export const NameText: React.FC<props> = ({ mySide, className }) => {
  return (
    <Name
      className={className}
      to={`/${mySide}`}
      photographer={mySide == "photographer"}
    >
      {mySide == "photographer" ? "Rikkun" : "Rikuto"}
    </Name>
  );
};

export const LinkText: React.FC<props> = ({
  children,
  mySide,
  path,
  className,
}) => {
  return (
    <Name
      className={className}
      to={`${path}`}
      photographer={mySide == "photographer"}
    >
      {children}
    </Name>
  );
};
