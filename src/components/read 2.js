import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Api_url } from '../api_url/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';


export default function Read2() {
    let nagivate = useNavigate();
    //update user
    const updateUser = ({name, subject, email, place, gender, id}) => {
     localStorage.setItem("id", id)
     localStorage.setItem("name", name)
     localStorage.setItem("subject", subject)
     localStorage.setItem("email", email)
     localStorage.setItem("place", place)
     localStorage.setItem("gender", gender)
      nagivate('/update');
    }
    //delete
      const deleteuser = async (id) => {
      await fetch(Api_url + id, {method:'DELETE'});
       Getapi();
       nagivate('/');
      }
      
      //get data from mock api
        const [tableData, setTableData] = useState([]);
  
        const Getapi= async () => {
          const data1 = await fetch(Api_url);
          const data = await data1.json();
          setTableData(data);
        }
  
        useEffect(() => {
              Getapi()
          }, []);
  
    return (  
  <div className='read2'>
  <Card >
        <CardContent>
        <div className='addstudent'>
          <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
            <b>STUDENT LIST</b>
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <Link to="/create" className='button'><Button variant="contained" size="small" endIcon={<AddIcon />}>
            Add student
        </Button></Link>
          </Typography>
          </div>
          <Typography>
          <table className='ddd'>
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
    {tableData.map(item =>
      <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.subject}</td>
        <td>{item.email}</td>
        <td>{item.place}</td>
        <td>{item.gender}</td>
        <td><button onClick={() => updateUser(item) }><EditIcon /></button></td>
        <td><button onClick={()=> deleteuser(item.id)}><DeleteIcon /></button></td>
      </tr> 
       )}
       </tbody>
       </table>
          </Typography>
          </CardContent>
      </Card>
       </div>
        )
      }