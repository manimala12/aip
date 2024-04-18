import {Box, Typography, Divider, TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom';


export default function SecondStep(){
    return(
        <Box style={{marginTop:'200px', color:'white', marginLeft:'100px'}}>
        <Typography variant='h5' style={{ marginBottom:'20px'}}> Agreement In Principle</Typography>
        <Typography variant='h2'> Personal Details</Typography>
        <Divider style={{backgroundColor:'white', borderBottomWidth:3, width:'1200px', marginTop:'30px'}}/>
        
        <Divider style={{backgroundColor:'white', borderBottomWidth:3, width:'1200px', marginTop:'50px'}}/>
        <Button color="inherit" style={{backgroundColor:'blue', padding:'15px 60px', marginTop:'40px', fontWeight:'bold'}}>
        <Link style={{textDecoration:'none', color:'white'}} to='/first-step'>&lt; Back</Link>
        </Button>
        <Button color="inherit" style={{backgroundColor:'blue', marginLeft:'810px', padding:'15px 60px', marginTop:'40px', fontWeight:'bold'}}>
        <Link style={{textDecoration:'none', color:'white'}} to='/third-step'>Continue &gt;</Link>
        </Button>
        

    </Box>
    )
}