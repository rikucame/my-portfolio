import React from 'react';
import { StyledLink } from './style';

export type props = {
  to: string;
  className?: string;
  label: string;
};

export const LinkText: React.FC<props> = ({ className, to, label }) => {
  return (
    <StyledLink className={className} to={to}>
      {label}
    </StyledLink>
  );
};
