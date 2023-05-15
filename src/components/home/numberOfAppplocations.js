
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Box } from '@mui/material';
import ChartLine from "./ChartLine.svg"

export default function NumberOfApplications() {
    return (
        <Card sx={{ width: 564, margin: "1rem" }}>
            <CardHeader
                sx={{ borderBottom: '1px solid #EEEDF2 ' }}
                titleTypographyProps={{ align: 'left' }}
                subheaderTypographyProps={{ align: 'left' }}
                title="Number of fund-raising applications"
                subheader="Based on platform usage"

                action={
                    <IconButton aria-label="info">
                        <InfoOutlinedIcon />
                    </IconButton>
                }
            />

            <CardContent>
                <Box sx={{ display: "flex", alignItems: "flex-end", gap: "10px" }}>
                    <Typography variant="h3" fontWeight="bold" >
                        700
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Total applications
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="space-around" >
                    <img src={ChartLine} alt="" />



                    <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="space-evenly">
                        <Box display="flex" alignItems="flex-start">
                            <Box
                                sx={{
                                    width: '30px',
                                    height: '8px',
                                    background: 'rgba(116, 89, 217, 0.12)',
                                    borderRadius: '20px',
                                    margin: "10px"
                                }}
                            />

                            <Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '143%',
                                            // letterSpacing: '0.17px',
                                            color: '#636A7C',
                                        }}
                                    >
                                        In Review
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            padding: '3px 4px',
                                            width: '28px',
                                            height: '24px',
                                            background: 'rgba(116, 89, 217, 0.08)',
                                            borderRadius: '16px',
                                            marginLeft: '8px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                lineHeight: '22px',
                                                color: '#101010',
                                            }}
                                        >
                                            200
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>

                        </Box>
                        <Box display="flex" alignItems="flex-start">
                            <Box
                                sx={{
                                    width: '30px',
                                    height: '8px',
                                    background: '#B8AFDA',
                                    borderRadius: '20px',
                                    margin: "10px"
                                }}
                            />

                            <Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '143%',
                                            // letterSpacing: '0.17px',
                                            color: '#636A7C',
                                        }}
                                    >
                                        Accepted
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            padding: '3px 4px',
                                            width: '28px',
                                            height: '24px',
                                            background: 'rgba(116, 89, 217, 0.08)',
                                            borderRadius: '16px',
                                            marginLeft: '8px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                lineHeight: '22px',
                                                color: '#101010',
                                            }}
                                        >
                                            400
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>

                        </Box>         <Box display="flex" alignItems="flex-start">
                            <Box
                                sx={{
                                    width: '30px',
                                    height: '8px',
                                    background: '#EF5350',
                                    borderRadius: '20px',
                                    margin: "10px"
                                }}
                            />

                            <Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}>
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            fontSize: '14px',
                                            lineHeight: '143%',
                                            // letterSpacing: '0.17px',
                                            color: '#636A7C',
                                        }}
                                    >
                                        Declined
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            padding: '3px 4px',
                                            width: '28px',
                                            height: '24px',
                                            background: 'rgba(116, 89, 217, 0.08)',
                                            borderRadius: '16px',
                                            marginLeft: '8px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                lineHeight: '22px',
                                                color: '#101010',
                                            }}
                                        >
                                            100
                                        </Typography>
                                    </Box>

                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>

            </CardContent>


        </Card>
    );
}