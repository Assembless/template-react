// Dependencies scoped imports
import React from 'react';

// Project scoped imports

// Module scoped imports
import { useTrans } from './trans';
import { StyledRoot, StyledMessage } from './styles';
import { {{name}}Props } from './types';

/**
 * @description {{$description}}
 *
 * API:
 *
 * - [{{name}} API](https://github.com/norwegianbegginer/Dekode/tree/main/src/components/{{name}})
 * - inherits [Box API](https://material-ui.com/api/box/)
 */
const {{name}} = ({ sx, classes, children, ...rootProps }: {{name}}Props) => {
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

export default {{name}};
