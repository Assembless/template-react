import { BoxProps } from '@mui/material';

export interface {{name}}Props extends BoxProps {
  /**
   * The message to display.
   */
  message: string;
  /**
   * Children displayed under the message.
   */
  children: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: Partial<{{name}}Classes>;
}

export interface {{name}}Classes {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
