import { BoxProps } from '@mui/material';

export interface ErrorPageProps extends BoxProps {
  /**
   * The message to display.
   */
  message: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<ErrorPageClasses>;
}

export interface ErrorPageClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
