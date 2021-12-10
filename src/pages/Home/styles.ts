import { Box, Typography, styled } from '@mui/material';

export const StyledRoot = styled(Box)(({ theme }) => ({
  color: theme.palette.background.default,
}));

export const StyledMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
