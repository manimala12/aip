import {Typography, Container, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function MainHome(){
    return(
        <Container style={{marginTop:'200px', color:'white', width:'1000px', marginLeft:'400px', textAlign:'center'}}>
        <Typography variant='h2'style={{marginBottom:'30px'}}>Welcome!!</Typography>
        <Typography paragraph style={{fontSize:'25px'}}>Congratulations on taking the first step towards your dream home!. Let us help turn your homeownership aspirations into reality. Start your journey with us today!</Typography>
        <Button style={{color:'white', backgroundColor:'blue', marginTop:'30px', padding:'30px 30px', fontSize:'18px', marginBottom:'400px', fontWeight:'bold'}}><Link style={{textDecoration:'none', color:'white'}} to='/first-step'>Check your eligibility for home loan</Link></Button>
        </Container>
    )
}