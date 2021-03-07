<<<<<<< Updated upstream
import React from "react";
import PropTypes from "prop-types";

import Container from "../../Container";
import { HeaderWrapper, HeaderInner, SiteTitle, Navigation } from "./styled";

interface IHeader {
  title: string;
  navigation: string;
}
const Header = ({ title, navigation }: IHeader) => (
  <HeaderWrapper>
    <Container>
      <HeaderInner>
        <SiteTitle to="/">{title}</SiteTitle>
        {navigation && <Navigation>{navigation}</Navigation>}
      </HeaderInner>
    </Container>
  </HeaderWrapper>
);

Header.propTypes = {
  /** Title for the site */
  title: PropTypes.string,
  /** Array of navigation items */
  navigation: PropTypes.arrayOf(PropTypes.node),
};

Header.defaultProps = {
  title: null,
  navigation: null,
};

export default Header;
=======
import React, { useState } from "react";
import { GlobalNavigation } from "../../Parts/GlobalNavigation";

import { StyledHeader, BackHome, } from "./style";

type Props = {
  className? : string;
};

export const Header: React.FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledHeader className={className} isOpen={isOpen}>
      <p onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Close' : 'Menu'}</p>
      <GlobalNavigation isDisplay={isOpen} />
      <BackHome to="/" label={"Rikkun"} />
    </StyledHeader>
  );
};
>>>>>>> Stashed changes
