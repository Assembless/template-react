// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { HomeProps } from './types';

/**
 * @description This is the home page. Description to provide.
 *
 * API:
 *
 * - [Home API](https://github.com/norwegianbegginer/Dekode/tree/main/src/components/Home)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const Home = ({ sx, classes, children, ...rootProps }: HomeProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {translated.example}
      </StyledMessage>
      Homepage
    </StyledRoot>
  );
};

export default Home;
