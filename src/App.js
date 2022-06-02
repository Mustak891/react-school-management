import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { Routes, Route, Link } from 'react-router-dom';
import { Api_url } from './api_url/api'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Card, CardContent, Grid} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import { ApexChart } from './components/apex charts';
import { green } from '@mui/material/colors';
import Read2 from './components/read 2';
import Teacher from './components/teacher';
import TChart from './components/chart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/create' element={<Create />} />
        <Route path='/' element={<Application />} />
        <Route path='/update' element={<Update />} />
        <Route path='/studentlist' element={<Read2 />} />
        <Route path='/studentcount' element={[<Mongodb/>, <Express />, <Reactstudent />, <Node />]} />
        <Route path='/studentchart' element={<ApexChart />} />
        <Route path='/teacherlist' element={<Teacher />} />
        <Route path='/teacherchart' element={<TChart />} />
      </Routes>
    </div>
  );
}



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



const drawerWidth = 200;

export function Application() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }} > 
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <img height={'50px'} width={"50px"} src='https://cdn.iconscout.com/icon/free/png-256/school-2632835-2180667.png' alt='secondary' />
          </Typography>
          <Typography
             variant="h6"
             noWrap
             component="a"
         href="#"
            sx={{
               mr: 2,
               display: { xs: 'none', md: 'flex' },
               paddingLeft: "10px",
               fontFamily: 'monospace',
               fontWeight: 900,
               letterSpacing: '.0.5rem',
                              color: 'black',
               textDecoration: 'none',
             }}
           >
              Dashboard
           </Typography>
          
           <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '20ch' },
      }}
      noValidate
      autoComplete="off"
    >        
             <TextField className='topsearchbox' id="outlined-basic" label="search" variant="outlined" size='small' color="success" />
             </Box>
             <IconButton aria-label="SearchIcon" size='large' >
             <Button variant="outlined" color="success" >
             <SearchIcon color="success" />
             </Button>
             </IconButton>
             <Button variant="text" sx={{ display: "flex", marginLeft: "auto" }}>
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={4} color="error">
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <Button variant="text">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={7} color="error">
                <MailIcon color="action" />
              </Badge>
            </IconButton>
          </Button>
          <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
      >
         <p style={{color:"black"}}>Admin&nbsp;</p><span><Avatar alt="admin" src="/static/images/avatar/1.jpg" /></span>
       </StyledBadge>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {[<Link to="/studentlist" style={{textDecoration:"none", color:"green"}}>Student List</Link>, <Link to='/studentcount' style={{textDecoration:"none", color:"green"}}>Student Count</Link>].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Link to="/studentlist" style={{textDecoration:"none", color:"green"}}> <InboxIcon /> </Link>: <Link to='/studentcount' style={{textDecoration:"none", color:"green"}}> <MailIcon /> </Link>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {[<Link to='/studentchart' style={{textDecoration:"none", color:"green"}}>Student Chart</Link>, <Link to='/teacherlist' style={{textDecoration:"none", color:"green"}}>Trash</Link>].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Link to='/studentchart' style={{textDecoration:"none", color:"green"}}><InboxIcon /></Link>  : <Link to='/teacherlist' style={{textDecoration:"none", color:"green"}}><MailIcon /></Link>}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          <div className='topfourboxes'>
            <div className='budget'>
            <Mongodb />
            </div>
            <div className='budget'>
          <Express /> 
          </div>
          <div className='budget'>
          <Reactstudent />
          </div>
          <div className='budget'>
          <Node  />
          </div>
          </div>
          
        </Typography>
        <Typography>
          <div className='studentrow'>
            <div className='table'>
            <Read />
          </div>
          <div className='chart'>
          <ApexChart />
          </div>
          </div>
          </Typography>
          <div style={{marginBottom:"10px"}}>
          <Typography >
            <Paper elevation={1}>
            <p style={{padding:"10px"}}>
              <h3>NOTE </h3><br/>
              
              <mark>All personal information contained herein is randomly taken.
Only the above student management will run the CRUD operation.</mark> Classroom management refers to the wide variety of skills and techniques that teachers use to keep students organized, orderly, focused, attentive, on task, and academically productive during a class.
            A Student Management System is also known as a Student Information System (SIS). These systems work to coordinate scheduling and communications between faculty regarding students. This system exists to simplify information tracking for both parents and administrative staff.</p>
            </Paper>
          </Typography>
          </div>
          
          <Typography>
          <div className='studentrow'>
            <div className='table'>
            <Teacher />
          </div>
          <div className='chart'>
          <TChart />
          </div>
          </div>
          </Typography>
          <div style={{marginTop:"10px", paddingTop:"10px"}}>
          <Paper elevation={1}>
          <span >“The older I got, the smarter my teachers became.” “What the teacher is, is more important than what he teaches.” “A teacher affects eternity; he can never tell where his influence stops.” “You can't stop a teacher when they want to do something.</span>
          <h3 style={{textAlign:"center", padding:"10px"}}>Thanks for visiting 🙏</h3>
          </Paper>
          </div>
      </Box>
    </Box>
  );
}




function Mongodb(props){

  const [tableData, setTableData] = useState([]);

  const Getapi= async () => {
    const data1 = await fetch(Api_url);
    const data = await data1.json();
    setTableData(data);
  }

  useEffect(() => {
        Getapi()
    }, []);
 
  const mongodb1 = tableData.filter(data => data.subject === 'Mongo db');
  const mongodb = (mongodb1.length);  

  return(
    <div>
      <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Mongo DB
          </Typography>
          <Typography
            color="textPrimary"
            // variant="h4"
          >
           <b style={{fontSize:"24px", color: green[400]}}>{mongodb+" :students"}</b> 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <img style={{height:"60px", width:"60px", borderRadius:"50%", objectFit: "cover"}} src="https://www.clipartmax.com/png/middle/275-2754492_mongodb-nosql-document-oriented-database-portable-network-mongodb-logo.png" alt="" />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
    </div>
  )
}


function Express(props){
  

  const [tableData, setTableData] = useState([]);

  const Getapi= async () => {
    const data1 = await fetch(Api_url);
    const data = await data1.json();
    setTableData(data);
  }

  useEffect(() => {
        Getapi()
    }, []); 

  const express1 = tableData.filter(data => data.subject === 'Express js');
  const express = (express1.length);

  return(
    <div>
    <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            express js
          </Typography>
          <Typography
            color="textPrimary"
            // variant="h4"
          >
           <b style={{fontSize:"24px", color: green[400]}}>{express+" :students"}</b> 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
             <img style={{height:"70px", width:"70px", borderRadius:"50%", objectFit: "cover"}} src="https://icon2.cleanpng.com/20180421/gae/kisspng-web-development-node-js-socket-io-javascript-netwo-modernization-5adab8112c3fa5.5293496115242834091813.jpg" alt="" />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
    </div>
  )
}


function Reactstudent(props){
  const [tableData, setTableData] = useState([]);

  const Getapi= async () => {
    const data1 = await fetch(Api_url);
    const data = await data1.json();
    setTableData(data);
  }

  useEffect(() => {
        Getapi()
    }, []);

  const react1 = tableData.filter(data => data.subject === 'React js');
  const react = (react1.length);

  return(
    <div>
 <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            React JS
          </Typography>
          <Typography
            color="textPrimary"
            // variant="h4"
          >
           <b style={{fontSize:"24px", color: green[400]}}>{react+" :students"}</b> 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          > <img style={{height:"60px", width:"60px", borderRadius:"50%", objectFit: "cover"}} src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="" />
          
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
    </div>
  )
}

function Node(props){
  const [tableData, setTableData] = useState([]);

  const Getapi= async () => {
    const data1 = await fetch(Api_url);
    const data = await data1.json();
    setTableData(data);
  }

  useEffect(() => {
        Getapi()
    }, []);

  const node1 = tableData.filter(data => data.subject === 'Node js');
  const node = (node1.length);

  return(
    <div>
<Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            Node JS
          </Typography>
          <Typography
            color="textPrimary"
            // variant="h4"
          >
           <b style={{fontSize:"24px", color: green[400]}}>{node+" :students"}</b> 
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          ><img style={{height:"105px", width:"105px", borderRadius:"50%", objectFit: "cover"}} src="https://buddy.works/guides/covers/test-nodejs-app/share-nodejs-logo.png" alt="" />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
    </div>
  )
}


export default App;
