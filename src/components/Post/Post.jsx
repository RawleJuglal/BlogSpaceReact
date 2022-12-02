import React from 'react';
import './Post.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function Post(props){
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography className="--navbar-nav-title" variant="h5">
                {props.data.title}
                </Typography>
                <Typography className="--navbar-nav-body" variant="body2">
                    {props.data.body}
                </Typography>
            </CardContent>
        </React.Fragment>
    )
    return(
        <div className='--post-post-container'>
            <Card sx={{mb:2,mx:2, borderColor:'green'}} className="--post-post-card" variant="outlined">{card}</Card>
            
        </div>
    )
}