import React from 'react'
import './Navbar.css'
import Typography from '@mui/material/Typography';
import NoiseAwareIcon from '@mui/icons-material/NoiseAware';
import NoiseAware from '@mui/icons-material/NoiseAware';

export default function Navbar(){
    return(
        <div className='--navbar-navbar-container'>
            <NoiseAwareIcon sx={{ fontSize: 120 }} color='success'/>
            <Typography className="--navbar-nav-title" variant="h1">
                Blog
            </Typography>
            <Typography className="--navbar-nav-title" variant="h1">
                Space
            </Typography>
        </div>
    )
}