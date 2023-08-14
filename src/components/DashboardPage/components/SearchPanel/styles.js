import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SearchInputs = styled.div`
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`;
export const FlexItem1 = styled.div`
  width: 70%;
`;
export const FlexItem2 = styled.div`
  width: 30%;
`;
export const SearchButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& label.Mui-focused': {
    color: theme.colors['light-primary-main'],
    transition: 'color 0.3s',
  },
  '& label:hover': {
    color: theme.colors['light-primary-main-hover'],
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.colors['light-primary-main'],
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.colors['light-primary-main'],
    },
    '& input::placeholder': {
      color: theme.colors['light-text-secondary'],
      opacity: 1,
    },
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: theme.colors['light-text-secondary'], // Default color
  '&.Mui-focused': {
    color: theme.colors['light-primary-main'],
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.colors['light-primary-main'],
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.colors['light-primary-main'],
  },
}));

export const StyledButtonContained = styled(Button)(({ theme }) => ({
  backgroundColor: theme.colors['light-primary-main'],
  height: '42px',
  minWidth: '125px',
  borderRadius: '6px',
  fontWeight: '400',
  lineHeight: '26px',
  fontSize: '15px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: theme.colors['light-primary-main'],
  },
}));

export const StyledButtonOutlined = styled(Button)(({ theme }) => ({
  color: theme.colors['light-primary-main'],
  backgroundColor: 'transparent',
  height: '30px',
  borderRadius: '6px',
  border: `1px solid ${theme.colors['light-primary-shades-50-p']}`,

  fontStyle: 'normal',
  fontSize: '13px',
  fontWeight: '500',
  lineHeight: '22px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  padding: '4px 12px',
  '&:hover': {
    borderColor: theme.colors['light-primary-main'],
    backgroundColor: theme.colors['light-primary-main'],
    color: 'white',
  },
}));

export const StyledButtonOutlinedChip = styled(Button)(({ theme }) => ({
  color: theme.colors['light-primary-main'],
  height: '32px',
  borderRadius: '100px',
  border: `1px solid ${theme.colors['light-primary-main']}`,

  fontStyle: 'normal',
  fontSize: '13px',
  fontWeight: '400',
  lineHeight: '18px',
  textTransform: 'none',
  whiteSpace: 'nowrap',
  padding: '3px 6px',
  '&:hover': {
    borderColor: theme.colors['light-primary-main'],
    backgroundColor: theme.colors['light-primary-main'],
    color: 'white',
  },
}));
