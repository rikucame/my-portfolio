import React, { useState } from "react";
import { GlobalNavigation } from "../../Parts/GlobalNavigation";

import { StyledHeader, BackHome, MenuButton } from "./style";

type Props = {
  className? : string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader className={className} isOpen={isOpen}>
      <MenuButton onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Menu'}</MenuButton>
      <GlobalNavigation isDisplay={isOpen} />
      <BackHome to="/" label={"Rikkun"} />
    </StyledHeader>
  );
};
