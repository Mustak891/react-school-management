import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Api_url } from '../api_url/api';



function Create() {

    const [subject, setSubject] = useState(" ");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };


  const [name, setName] = useState(" ");
      const [email, setEmail] = useState(" ");
      const [place, setPlace] = useState(" ");
      const [gender, setGender] = useState(" ");
      let nagivate = useNavigate();

const postData = async () =>{
    try{
        await fetch(Api_url, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
         name,
         subject,
         email,
         place,
         gender
        }),
       })
       nagivate('/')
    }catch{
        console.log((error)=> error)
    }
}
  return (
    <div className='main'>
      <h1>Add student</h1>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" required onChange={(e) => setName(e.target.value)} />
      <div>
      <FormControl sx={{ m: 1, width: '29ch' }} required >
        <InputLabel id="demo-simple-select-helper-label">class</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={subject}
          label="class"
          onChange={handleChange }
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={'Mongo DB'}>Mongo DB</MenuItem>
          <MenuItem value={'Express js'}>Express js</MenuItem>
          <MenuItem value={'React js'}>React js</MenuItem>
          <MenuItem value={'Node js'}>Node js</MenuItem>
        </Select>
        <FormHelperText>Please select class</FormHelperText>
      </FormControl>
      </div>
      <TextField id="outlined-basic" label="Email" variant="outlined" required='true' onChange={(e) => setEmail(e.target.value)} /><br />
      <TextField id="outlined-basic" label="Place" variant="outlined" required onChange={(e) => setPlace(e.target.value)}/><br />
      <TextField id="outlined-basic" label="Gender" variant="outlined" required onChange={(e) => setGender(e.target.value)}/><br />
      <Button variant="contained" size='large' onClick={postData}>SUBMIT</Button>
      </Box>
    </div>
  )
}

export default Create;