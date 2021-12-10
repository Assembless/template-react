// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { FallbackPageProps } from './types';

/**
 * @description Description to provide.
 *
 * API:
 *
 * - [FallbackPage API](https://github.com/norwegianbegginer/Dekode/tree/main/src/components/FallbackPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const FallbackPage = ({
  sx,
  classes,
  children,
  ...rootProps
}: FallbackPageProps) => {
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

export default FallbackPage;
