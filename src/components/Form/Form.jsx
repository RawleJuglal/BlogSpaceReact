import React from 'react'
import './Form.css'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';

export default function Form(props){
    return(
        <Box component="form"  textAlign="center" sx={{ mb:4, mx:4, py:4, px:2, border: '2px solid green' }}>
            <Typography variant="h3" component="h3">
                 Create a new post
            </Typography>;
            <FormControl fullWidth={true}>
                <TextField onChange={(event)=>props.onChange(event)} name="post-title" id="filled-basic" label="Title" variant="filled" value={props.form.title}/> 
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField
                    onChange={(event)=>props.onChange(event)}
                    sx={{my:2}}
                    name="post-body"
                    id="filled-multiline-static"
                    label="Body"
                    multiline
                    rows={4}
                    variant="filled"
                    value={props.form.body}
                />
            </FormControl>
            <FormControl>
                <Button onClick={(event)=>props.onSubmit(event)} variant="contained" endIcon={<SendIcon />}>Submit</Button>
            </FormControl>
        </Box>
    )
}