import React, { useState } from "react";

import {
  Navigation,
  LinkList,
  LinkItem,
  LinkText,
} from "./style";
import { PHOTOGRAPHER_NAV_ITEMS } from "../../../theme/constants";

type Props = {
  isDisplay: boolean;
};

export const GlobalNavigation: React.FC<Props> = ({ isDisplay }) => {
  return (
    <Navigation isDisplay={isDisplay}>
      <LinkList isDisplay={isDisplay}>
        {PHOTOGRAPHER_NAV_ITEMS.map(({ label, path }) => {
          return (
            <LinkItem>
              <LinkText to={`/photographer${path}`} label={label} />
            </LinkItem>
          );
        })}
      </LinkList>
    </Navigation>
  );
};
