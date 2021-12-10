import { BoxProps } from '@mui/material';

export interface HomeProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<HomeClasses>;
}

export interface HomeClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
