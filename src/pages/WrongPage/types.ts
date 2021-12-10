import { BoxProps } from '@mui/material';

export interface WrongPageProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<WrongPageClasses>;
}

export interface WrongPageClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
