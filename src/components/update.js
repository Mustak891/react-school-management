import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { Api_url } from '../api_url/api';
import { useNavigate  } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function Update(){
  const [name, setName] = useState(" ");
  const [subject, setSubject] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [place, setPlace] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [id, setid] = useState(" ");
  let nagivate = useNavigate();
  const updateUser = async() => {
        await fetch(Api_url + id,
          {method:"PUT",
        headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({
        name,
        subject,
        email,
        place,
        gender
      })}
          )
          nagivate('/')
  }

useEffect(()=>{
setid(localStorage.getItem('id'));
setName(localStorage.getItem('name'));
setSubject(localStorage.getItem('subject'));
setEmail(localStorage.getItem('email'));
setPlace(localStorage.getItem('place'));
setGender(localStorage.getItem('gender'));

},[])
  
  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  return(
    <div className='main'>
    <h1>Update student</h1>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '30ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Name" value={name} variant="outlined" required onChange={(e) => setName(e.target.value)} />
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
        <MenuItem value={'Mongo db'}>Mongo db</MenuItem>
        <MenuItem value={'Express js'}>Express js</MenuItem>
        <MenuItem value={'React js'}>React js</MenuItem>
        <MenuItem value={'Node js'}>Node js</MenuItem>
      </Select>
      <FormHelperText>Please select class</FormHelperText>
    </FormControl>
    </div>
    <TextField id="outlined-basic" label="Email" value={email} variant="outlined" required='true' onChange={(e) => setEmail(e.target.value)} /><br />
    <TextField id="outlined-basic" label="Place" value={place} variant="outlined" required onChange={(e) => setPlace(e.target.value)}/><br />
    <TextField id="outlined-basic" label="Gender" value={gender} variant="outlined" required onChange={(e) => setGender(e.target.value)}/><br />
    <Button variant="contained" size='large' onClick={updateUser} >SUBMIT</Button>
    </Box>
  </div>
  )
}






export default Update;