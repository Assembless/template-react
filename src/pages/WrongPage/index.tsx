// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { WrongPageProps } from './types';

/**
 * @description Page displayed, when url doesn&#x27;t match with any available url.
 *
 * API:
 *
 * - [WrongPage API](https://github.com/Assembless/template-react/tree/master/src/pages/WrongPage)
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const WrongPage = ({ sx, classes, children, ...rootProps }: WrongPageProps) => {
  const translated = useTrans();

  return (
    <StyledRoot sx={sx} className={classes?.root} {...rootProps}>
      <StyledMessage className={classes?.message} gutterBottom>
        {translated.example}
      </StyledMessage>
      WrongPage
    </StyledRoot>
  );
};

export default WrongPage;
