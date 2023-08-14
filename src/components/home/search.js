import React, { useState } from 'react';
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import {
  constDonationsTurnover,
  constLocations,
  constSectorsOfDonation,
} from '../../constants';

export function SearchHome() {
  const [showExtendedSearch, setShowExtendedSearch] = useState(false);

  const handleToggleExtendedSearch = () => {
    setShowExtendedSearch(!showExtendedSearch);
  };

  const handleSearch = () => {
    // implement search logic here
  };

  return (
    <Box
      paddingLeft={10}
      paddingRight={20}
      paddingTop={15}
      backgroundColor="rgba(116, 89, 217, 0.08)"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
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
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            select
            label="Type"
            variant="outlined"
            defaultValue=""
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="A">Private Fund (ANBI)</MenuItem>
            <MenuItem value="B">Private Fund (Non-ANBI)</MenuItem>
            <MenuItem value="C">Business</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={2} display="flex">
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#7459D9',
              height: '42px',
              width: '125px',
              borderRadius: '100px',
              fontSize: '15px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#7459D9',
              },
            }}
            endIcon={<ArrowForwardIcon />}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Box
        marginTop="32px"
        sx={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        <Button
          variant="outlined"
          sx={{
            color: '#7459D9',
            height: '30px',
            borderRadius: '100px',
            borderColor: '#7459D9',
            fontSize: '13px',
            textTransform: 'none',
            '&:hover': {
              borderColor: '#7459D9',
              backgroundColor: '#7459D9',
              color: 'white',
            },
          }}
          endIcon={<ExpandMoreIcon />}
          onClick={handleToggleExtendedSearch}
        >
          Extended Search
        </Button>
      </Box>
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
                xs={12}
                sm={4}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
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
                  {constLocations.map((item) => {
                    return (
                      <Button
                        variant="outlined"
                        sx={{
                          color: '#7459D9',
                          height: '30px',
                          borderRadius: '100px',
                          borderColor: '#7459D9',
                          fontStyle: 'normal',
                          fontSize: '13px',
                          fontWeight: '400',
                          lineHeight: '18px',
                          textTransform: 'none',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            borderColor: '#7459D9',
                            backgroundColor: '#7459D9',
                            color: 'white',
                          },
                        }}
                      >
                        {item}
                      </Button>
                    );
                  })}
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
                  {constSectorsOfDonation.map((item) => {
                    return (
                      <Button
                        variant="outlined"
                        sx={{
                          color: '#7459D9',
                          height: '30px',
                          borderRadius: '100px',
                          borderColor: '#7459D9',
                          fontStyle: 'normal',
                          fontSize: '13px',
                          fontWeight: '400',
                          lineHeight: '18px',
                          textTransform: 'none',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            borderColor: '#7459D9',
                            backgroundColor: '#7459D9',
                            color: 'white',
                          },
                        }}
                      >
                        {item}
                      </Button>
                    );
                  })}
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
                  {constDonationsTurnover.map((item) => {
                    return (
                      <Button
                        variant="outlined"
                        sx={{
                          color: '#7459D9',
                          height: '30px',
                          borderRadius: '100px',
                          borderColor: '#7459D9',
                          fontStyle: 'normal',
                          fontSize: '13px',
                          fontWeight: '400',
                          lineHeight: '18px',
                          textTransform: 'none',
                          whiteSpace: 'nowrap',
                          '&:hover': {
                            borderColor: '#7459D9',
                            backgroundColor: '#7459D9',
                            color: 'white',
                          },
                        }}
                      >
                        {item}
                      </Button>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}
