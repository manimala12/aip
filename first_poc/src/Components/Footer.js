import { Box, Divider, Typography, Container} from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from 'react-router-dom';


const style={color:'white', fontSize:'50px', cursor:'pointer', "&:hover":{color:'grey'}}
export default function Footer(){
    return(
    <>
        <Box
          sx={{ width:'1795px',height:'500px', border:'2px solid white', marginTop:'100px', marginBottom:'30px', backgroundColor:'#212529;'}}
        >
            <Container style={{display:'flex', gap:'200px', marginLeft:'280px'}}>

                <Box style={{marginTop:'50px', color:'white', width:'400px', height:'10px'}}>
                <Typography variant='h5'>Agreement In Principle</Typography>
                <Divider style={{marginTop:'10px',background:'blue', borderBottomWidth:5}}/>
                <Typography paragraph style={{fontSize:'20px', marginTop:'40px', marginBottom:'10px'}}> A home loan eligibility checking website with accuracy and customer satisfaction.</Typography>
                </Box>

                <Box style={{marginTop:'50px', color:'white', width:'150px', height:'10px'}}>
                <Typography variant='h5'>Explore</Typography>
                <Divider style={{marginTop:'10px',background:'blue', borderBottomWidth:5}}/>
                <Link style={{display:'block', marginTop:'40px', marginBottom:'10px', color:'white', cursor:'pointer', fontSize:'20px'}} to='/'>Home</Link>
                <Link style={{display:'block', marginBottom:'10px', color:'white', cursor:'pointer', fontSize:'20px'}} to='/about'>About</Link>
                <Link style={{display:'block', color:'white', cursor:'pointer', fontSize:'20px'}} to='/contact'>Contact</Link>
                </Box>

                <Box style={{marginTop:'50px', color:'white', width:'400px', height:'10px'}}>
                <Typography variant='h5'>Have a question?</Typography>
                <Divider style={{marginTop:'10px',background:'blue', borderBottomWidth:5}}/>
                <Typography paragraph style={{fontSize:'20px', marginTop:'40px', marginBottom:'10px'}}><LocalPhoneIcon style={{marginRight:'20px'}}/>+919876543210</Typography>
                <Typography paragraph style={{fontSize:'20px'}}><MailIcon style={{marginRight:'20px'}}/>support@aip.com</Typography>
                </Box>
            </Container>
        <Divider style={{marginTop:'300px', background:'white'}}/>
        <Typography paragraph style={{fontSize:'25px', textAlign:'center', color:'white', marginTop:'25px'}}>© 2024 Copyright | All rights reserved for the designer <i style={{fontWeight:'bold'}}>Jnaneswari Yalla</i></Typography>
            <Box style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'40px'}}>
            <LinkedInIcon sx={style}/>
            <YouTubeIcon sx={style}/>
            <GitHubIcon sx={style}/>
            <TelegramIcon sx={style}/>
            </Box>
        </Box>
    </>
    )
}