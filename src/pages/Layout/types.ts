import { BoxProps } from '@mui/material';

export interface LayoutProps extends BoxProps {
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<LayoutClasses>;
}

export interface LayoutClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
