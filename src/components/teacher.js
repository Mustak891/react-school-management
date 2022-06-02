import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function Teacher() {
    
    return (  
  <div className='read2'>
  <Card >
        <CardContent>
        <div className='addstudent'>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <b>TEACHER LIST</b>
          </Typography>
          </div>
          <Typography>
          <table >
  <thead>
  <tr>
  <th><b>NAME</b></th>  
  <th><b>CLASS</b></th>
    <th><b>EMAIL</b></th>
    <th><b>PLACE</b></th>
    <th><b>GENDER</b></th>
    <th><b>EDIT</b></th>
    <th><b>DELETE</b></th>
    </tr>
  </thead>
  <tbody>
      <tr>
      <td>jhon</td>
      <td>Mongo db</td>
        <td>jhon@gmail.com</td>
        <td>mumbai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>wade</td>
      <td>Express js</td>
        <td>wade@gmail.com</td>
        <td>pune</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>sam</td>
      <td>React js</td>
        <td>sam@gmail.com</td>
        <td>chennai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>virat</td>
      <td>Node js</td>
        <td>virat@gmail.com</td>
        <td>delhi</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>hardik</td>
      <td>Mongo db</td>
        <td>hardik@gmail.com</td>
        <td>mumbai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>doe</td>
      <td>Express js</td>
        <td>doe@gmail.com</td>
        <td>mumbai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>jhon</td>
      <td>React js</td>
        <td>jhon@gmail.com</td>
        <td>mumbai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
      <tr>
      <td>liam</td>
      <td>Node js</td>
        <td>liam@gmail.com</td>
        <td>chennai</td>
        <td>male</td>
        <td><button><EditIcon /></button></td>
        <td><button><DeleteIcon /></button></td>
      </tr> 
       </tbody>
       </table>
          </Typography>
          </CardContent>
      </Card>
       </div>
        )
      }