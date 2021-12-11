// Dependencies scoped imports
import React from 'react';
import { Outlet } from 'react-router-dom';

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
 * - [Layout API](https://github.com/Assembless/template-react/tree/master/src/pages/Layout)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Layout = ({ sx, classes, children, ...rootProps }: LayoutProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {translated.example}
      </StyledMessage>
      <Outlet />
    </StyledRoot>
  );
};

export default Layout;
