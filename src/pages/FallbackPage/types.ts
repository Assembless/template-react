import { BoxProps } from '@mui/material';

export interface FallbackPageProps extends BoxProps {
  classes?: Partial<FallbackPageClasses>;
}

export interface FallbackPageClasses {
  /** Styles applied to the root element. */
  root: string;
  /** Styles applied to the message element. */
  message: string;
}
