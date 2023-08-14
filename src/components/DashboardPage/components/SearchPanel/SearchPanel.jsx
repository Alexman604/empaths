import React, { useState } from 'react';
import {
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  OutlinedInput,
  Button,
  Box,
  Divider,
  Grid,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {
  StyledTextField,
  StyledSelect,
  StyledInputLabel,
  Wrapper,
  StyledButtonContained,
  SearchInputs,
  SearchButtons,
  FlexItem1,
  FlexItem2,
  StyledButtonOutlined,
  StyledButtonOutlinedChip,
} from './styles';
import {
  constDonators,
  constLocations,
  constDonationsTurnover,
  constSectorsOfDonation,
} from '../../../../constants';

function SearchPanel() {
  const [showExtendedSearch, setShowExtendedSearch] = useState(false);

  const handleToggleExtendedSearch = () => {
    setShowExtendedSearch(!showExtendedSearch);
  };
  return (
    <Wrapper>
      <SearchInputs>
        <FlexItem1>
          <FormControl fullWidth sx={{ mr: 3 }}>
            <StyledTextField
              label="Search"
              variant="outlined"
              placeholder="Find donors here"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </FlexItem1>
        <FlexItem2>
          <FormControl fullWidth sx={{ mr: 3 }}>
            <StyledInputLabel id="demo-multiple-name-label">
              Donors type
            </StyledInputLabel>
            <StyledSelect
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              input={<OutlinedInput label="Donors type" />}
            >
              <MenuItem value="">All</MenuItem>
              {constDonators.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </StyledSelect>
          </FormControl>
        </FlexItem2>
        {/* <FlexItem> */}
        <StyledButtonContained
          variant="contained"
          size="small"
          endIcon={<ArrowForwardIcon />}
        >
          Search
        </StyledButtonContained>
        {/* </FlexItem> */}
      </SearchInputs>
      {/* <Box
        marginTop="32px"
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
      > */}
      <StyledButtonOutlined sx={{ mt: 3 }} onClick={handleToggleExtendedSearch}>
        Extended Search
      </StyledButtonOutlined>
      {/* </Box> */}
      <SearchButtons>
        <Box
          marginTop="32px"
          sx={{ display: 'flex', justifyContent: 'flex-start' }}
        >
          {showExtendedSearch && (
            <Box marginBottom={3}>
              <Divider
                marginTop="16px"
                orientation="horizontal"
                variant="inset"
                width="100%"
                height="30px"
                sx={{
                  borderWidth: '0.5px',
                  margin: '0 0 30px 0 ',
                  borderColor: 'rgba(116, 89, 217, 0.5)',
                }}
              />

              <Grid container spacing={2} justifyContent="flex-start">
                <Grid
                  item
                  xs={11}
                  sm={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mr: 10,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Location
                  </Typography>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {constLocations.map((item) => (
                      <StyledButtonOutlinedChip>
                        {item}
                      </StyledButtonOutlinedChip>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={11}
                  sm={3}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    mr: 10,
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Sectors of donation
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {constSectorsOfDonation.map((item) => (
                      <StyledButtonOutlinedChip>
                        {item}
                      </StyledButtonOutlinedChip>
                    ))}
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    Donations turnover
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '8px',
                    }}
                  >
                    {constDonationsTurnover.map((item) => (
                      <StyledButtonOutlinedChip>
                        {item}
                      </StyledButtonOutlinedChip>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          )}
        </Box>
      </SearchButtons>
    </Wrapper>
  );
}

export default SearchPanel;
