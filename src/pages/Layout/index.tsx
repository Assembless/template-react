// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { LayoutProps } from './types';

/**
 * @description Layout of the page. Components visible through all of routings.
 *
 * API:
 *
 * - [Layout API](https://github.com/norwegianbegginer/Dekode/tree/main/src/components/Layout)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Layout = ({ sx, classes, children, ...rootProps }: LayoutProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {translated.example}
      </StyledMessage>

      {children}
    </StyledRoot>
  );
};

export default Layout;
