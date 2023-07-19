import React from 'react'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import { Divider, Paper, Typography } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { constrainPoint } from '@fullcalendar/core';
import Chip from '@mui/material/Chip';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DatePickerComponent from './DatePickerComponent';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';
import FinanceTable from './FinanceTable';
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoinSharp';
import Avatar from '@mui/material/Avatar';
import TodayIcon from '@mui/icons-material/Today';
import WeekIcon from '@mui/icons-material/ViewWeek';
import { useTheme } from 'styled-components';



export const StyledButton = styled.div`
    padding-bottom: 40px;
    padding-left: 150px;
    @media(max-width: 768px){
        padding-left: 300px;
        

    }

`;





export const StyledCard = styled.div`

    width: 300;
    backgroundColor: "light grey";
    marginLeft:25;
    transition: 'box-shadow 0.3s ease';
    '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }

    `;





export const StyledShowandSearchContainer = styled.div`
    
    /* padding:1rem; */
    display:flex;
    justify-content:space-between;
    margin-top: 2rem;
    
`;

export const StyledShow = styled.div`
    display:flex;
    width:25%;
    gap:0.5rem;
    align-items:center;
    margin-Left: 20px;
    @media(max-width: 768px){
        width: 40%;
        display: flex;
        gap: 1rem;
    }
`

export const StyledSearch = styled.div`
    display:flex;
    margin-right:2rem;
    align-items:center;
    gap: 0.5rem;
    border-radius: 0.3rem;
    @media(max-width: 768px){
        margin-right: 0.5rem;

    }

    input{
        width:100%;
        height:1.7rem;
    }

    
`;

export const StyledTable=styled.div`
        display:flex;
        margin-top:2.5rem;
        @media(max-width: 768px){
          display: flex;
      }
      `;





  
export default function DashboardFinance() {


   

  return (
    <Grid container spacing={2}>
      
         <Grid item xs={12} md={3} lg={4}>
            <Paper sx={{ marginTop: '3px', marginLeft: '30px', marginRight:'2px' ,paddingRight: '1px', width: '100%',height: '1500',
                          '@media screen and (max-width: 768px)':{
                            width:'1200px'
                        },
                        '@media screen and (max-width: 968px)':{
                            width:'1180px',
                        }, }}>
           
                <Typography variant="h4"  sx={{ paddingTop: '10px' ,color: 'black',paddingLeft: '20px'}}>Notification </Typography>
                <FormControl  sx={{width:'200px', marginLeft: '10px',marginTop: '10px',
                                 '@media screen and (max-width: 768px)':{
                                    width:'40%'
                                }  }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={"Overdue"}
                        label="Overdue"
                        
                    >
                        <MenuItem value={"overdue"}>Overdue</MenuItem>
                        <MenuItem value={"due"}>Due</MenuItem>
                        </Select>
                        </FormControl>
                <Typography variant='h3'  sx={{ paddingTop: '10px' ,color: 'blue',paddingLeft: '20px'}}>Notification Type</Typography>
                <FormControl sx={{width:'200px', marginLeft: '10px',marginTop: '10px',
                            '@media screen and (max-width: 768px)':{
                                width:'40%'
                            } }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={" "}
                        label=" "
                        
                    >
                        <MenuItem value={"push"}>push</MenuItem>
                        <MenuItem value={"sms"}>Sms</MenuItem>
                        <MenuItem value={"email"}>Email</MenuItem>
                        </Select>
                        </FormControl>

                <Typography variant='h4'  sx={{ paddingTop: '10px' ,color: 'blue',paddingLeft: '20px'}}>Class/Section</Typography>
                <FormControl sx={{width:'200px', marginLeft: '10px',marginTop: '10px' ,
                                '@media screen and (max-width: 768px)':{
                                        width:'40%'
                                } }}>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={"Overdue"}
                        label="Overdue"
                        
                    >
                        <MenuItem value={"overdue"}>Overdue</MenuItem>
                        <MenuItem value={"due"}>Due</MenuItem>
                        </Select>
                        </FormControl>
                        <FormGroup sx={{fontSize: '40px', marginLeft: '40px',marginTop: '20px' }}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Select all" />
                        </FormGroup>
                        <StyledButton>
                        <Button variant="contained" color="success">Submit</Button>
                        </StyledButton>
                        
            </Paper>

         </Grid>
         
         <Grid item xs={12} md={9} lg={8} style={{
          maxWidth: '70%',
          '@media (max-width: 768px)': {
            maxWidth: '100%',
            height: '150%',
            marginLeft: '10px',
            marginRight:'30px'
          },
        }}>
            <Paper  sx={{ marginTop: '3px', marginLeft: '40px',marginRight: '80px', paddingLeft:'1px', paddingRight: '1px', width: '95%',height: '100%',
                        '@media screen and (max-width: 768px)':{
                            width:'1200px',
                            marginLeft:'10px'
                        },
                        '@media screen and (max-width: 968px)':{
                            width:'1180px',
                            marginLeft:'30px'
                        },
                         }}>
            <Typography variant='h3'  sx={{ paddingTop: '30px' ,color: 'black',paddingLeft: '40px',paddingBottom: '10px'}}>ACCOUNTS DETAILS</Typography>
            <div style={{display: 'flex' }}>
                <div>
                    <Typography variant='h2'  sx={{ paddingTop: '10px' ,color: 'black',paddingLeft: '40px',paddingBottom: '3px'}}><CurrencyRupeeIcon/>Loading</Typography>
                    <Typography variant='h5'  sx={{ color: 'black',paddingLeft: '40px',paddingBottom: '30px'}}>Loading Expected</Typography>
                    <Card sx={{ backgroundColor: "light blue" ,marginTop: '100px',marginBottom: '4px',marginLeft:"30px",borderRadius:'8px',marginRight: '0px',width:'200px',
                            transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0)',
                                },
                            }} >
                    <CardContent>
                        <Typography variant='h6'>Amount Collected:<CurrencyRupeeIcon/></Typography>
                        <div style={{ display: 'flex' }}>
                            <Typography variant='h6'><CurrencyRupeeIcon/>0 Cash</Typography>
                            <Typography variant='h6' sx={{ marginLeft: '8px' }}><CurrencyRupeeIcon/>0 Bank</Typography>
                        </div>
                    </CardContent>
                    </Card>
                </div>
                <div style={{ marginLeft: '50px',display: 'flex' }}>
                        <Card sx={{backgroundColor: 'rgba(218,161,44,0.8)',marginTop: '4px',marginBottom: '4px',marginLeft: '30px',borderRadius: '8px',height: '97%',width: '130px',
                                transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0)',
                                    },
                                }}
                    >
                        <Typography variant='h2' sx={{ paddingTop: '50px' ,color: 'black',paddingLeft:'20px'}}><Avatar sx={{ bgcolor: 'white' }}><BitcoinIcon sx={{ color:'black'}}/></Avatar></Typography>
                        <Typography variant='h5' sx={{ paddingTop: '10px' ,color: 'black',paddingLeft:'20px'}}>Monthly</Typography>
                        <Typography variant='h4' sx={{paddingTop: '60px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Cash</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Bank</Typography>
                        </Card>

                        <Card sx={{backgroundColor: 'rgba(211, 36, 57, 0.8)',marginTop: '4px',marginBottom: '4px',marginLeft: '30px',borderRadius: '8px',height: '97%',width: '130px',
                                transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0)',
                                    },
                                }}
                        >
                            <Typography variant='h2' sx={{ paddingTop: '50px' ,color: 'black',paddingLeft:'20px'}}><Avatar sx={{ bgcolor: 'white' }}><WeekIcon sx={{ color:'black'}}/></Avatar></Typography>
                        <Typography variant='h5' sx={{ paddingTop: '10px' ,color: 'black',paddingLeft:'20px'}}>weekly</Typography>
                        <Typography variant='h4' sx={{paddingTop: '60px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Cash</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Bank</Typography>
                        </Card>

                        <Card sx={{backgroundColor: 'rgba(33, 148, 202, 0.8)',marginTop: '4px',marginBottom: '4px',marginLeft: '30px',borderRadius: '8px',height: '97%',width: '130px',
                                transition: 'box-shadow 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0)',
                                    },
                                }}
                        >
                            <Typography variant='h2' sx={{ paddingTop: '50px' ,color: 'black',paddingLeft:'20px'}}><Avatar sx={{ bgcolor: 'white' }}><TodayIcon sx={{ color:'black'}}/></Avatar></Typography>
                        <Typography variant='h5' sx={{ paddingTop: '10px' ,color: 'black',paddingLeft:'20px'}}>Today</Typography>
                        <Typography variant='h4' sx={{paddingTop: '60px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Cash</Typography>
                        <Typography variant='h4' sx={{paddingTop: '10px',paddingLeft:'20px'}}><CurrencyRupeeIcon/>0 Bank</Typography>
                        </Card>
                </div>
            </div>
            </Paper>
         </Grid>
         <Grid item xs={12} md={6} lg={12}  sx={{width: '100%',
                         '@media screen and (max-width: 768px)':{
                        },
                }}
         >
            <Paper sx={{width:'1180px',marginLeft:'30px',borderRadius:'5px',marginRight:'30px',
                     '@media screen and (manx-width: 768px)': {
                        width: '1200px', 
                        marginLeft: 'auto',
                        marginRight: 'auto',
                      },}}>
                <Typography variant='h2' sx={{ paddingTop: '10px' ,color: 'black',paddingLeft: '20px'}}>Collections</Typography>
                <Divider  />
                <div style={{display: 'flex' }}>
                    <div>
                        <div style={{display: 'flex' }}>
                            
                            <div style={{display: 'flex' ,marginLeft:'50px',marginTop:'30px',
                                    '@media screen and (max-width: 768px)':{
                                        width:'20px'
                                    }}}>
                                <DatePickerComponent />
                                <Button variant="contained" color="success" sx={{marginLeft:'20px',marginTop:'22px',
                                            '@media screen and (max-width: 768px)':{
                                                width:'20px',
                                                marginTop:'200px',
                                                marginLeft:'20px'
                                            },
                                            '@media screen and (max-width: 968px)':{
                                                width:'20px',
                                                marginTop:'200px',
                                                marginLeft:'20px'
                                            },
                                            }}>Submit</Button>
                        
                            </div>
                            
                        </div>
                    </div>
                    <div style={{ marginLeft: '70px',display: 'flex' }}>
                        <Card sx={{width: 250,backgroundColor: "light grey",marginLeft:'160px',marginTop:'20px',marginRight:'10px',
                                transition: 'box-shadow 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 1.0)',
                                },
                                '@media screen and (max-width: 768px)':{
                                    height:'200px'
                                }
                            }} >
                            <CardContent>
                                <Typography variant='h6'>Amount Collected:<CurrencyRupeeIcon/>0</Typography>
                                <div style={{ display: 'flex' }}>
                                    <Typography variant='h6'><CurrencyRupeeIcon/>0 Cash</Typography>
                                    <Typography variant='h6' sx={{ marginLeft: '8px' }}><CurrencyRupeeIcon/>0 Bank</Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                 </div>
                <Stack spacing={0.5} direction="row" sx={{marginLeft: '30px',color:'grey',marginTop:'30px',marginBottom:'20px'}} >
      
                    <Button variant="outlined">COPY</Button>
                    <Button variant="outlined">CSV</Button>
                    <Button variant="outlined">Excel</Button>
                    <Button variant="outlined">PDF</Button>
                    <Button variant="outlined">Print</Button>
                </Stack>
            <StyledShowandSearchContainer>
                <StyledShow>
                    <p>Show</p>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select 
                        defaultValue={10}
                        label="10"
                        
                    >
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={25}>25</MenuItem>
                        <MenuItem value={50}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        </Select>
                        </FormControl>
                    <p>entries</p>
                </StyledShow>
                <StyledSearch>
                    <p>Search:</p>
                    <input type='text' />
                </StyledSearch>
            </StyledShowandSearchContainer>
            <StyledTable>
                <FinanceTable/>
            </StyledTable>
            
            </Paper>
         </Grid>

    </Grid>

  )
}

