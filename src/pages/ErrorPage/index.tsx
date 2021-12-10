// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { ErrorPageProps } from './types';

/**
 * @description Page that gets displayed when error hits ErrorBoundry.
 *
 * API:
 *
 * - [ErrorPage API](https://github.com/norwegianbegginer/Dekode/tree/main/src/pages/ErrorPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const ErrorPage = ({ sx, classes, message, ...rootProps }: ErrorPageProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {translated.example}
      </StyledMessage>
      PageError
    </StyledRoot>
  );
};

export default ErrorPage;
