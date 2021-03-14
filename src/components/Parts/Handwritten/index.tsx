import React from "react";
import { StyledHandWritten } from "./style";

export type props = {
  className?: string;
};

export const HandWritten: React.FC<props> = ({ className, children }) => {
  return <StyledHandWritten className={className}>{children}</StyledHandWritten>;
};
