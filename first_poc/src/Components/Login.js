import { Visibility, VisibilityOff } from "@mui/icons-material";
import {InputAdornment, TextField, Button, Typography, IconButton} from '@mui/material';
import { useState } from "react";
import {Link} from 'react-router-dom';
import {useFormik} from 'formik';

const style=
{
    width: '550px',
    height: '450px',
    backgroundColor:'white',
    bgcolor: 'background.paper',
    p: 4,
    textAlign:'center',
    borderRadius:'20px',
    marginTop:'180px',
    marginBottom:'390px',
    marginLeft:'600px'
};


export default function Login(){

    const [showPassword, setShowPassword] = useState(false);
    const formik=useFormik({
      initialValues:{
        userName: '',
        password: '',
      },
      onSubmit: (values)=>{
        fetch('http://localhost:8000/users/'+values.userName).then((res)=>{
          return res.json();
        }).then((data)=>{
            if(Object.keys(data).length ===0){
              console.log('Please Enter valid User Name')
            }
            else{
              if(data.password === values.password){
                console.log('Logged in')
              }
              else{
              console.log('Please Enter valid credentials')
              }
            }
        }).catch((err)=>{
          console.log('Failed:'+ err.message)
        })
      }, 
    })

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };

    return(
      
        <form style={style} autoComplete='off' onSubmit={formik.handleSubmit}>
            <Typography variant='h5' style={{fontWeight:'bold', marginBottom:'50px', color:'blue', paddingTop:'30px'}}>Login Here!!</Typography>
            <TextField label='User Name' name='userName' value={formik.values.userName} style={{width:'400px', marginBottom:'50px'}} onChange={formik.handleChange}/>
            <br/>
            <TextField label='Password' name='password' value={formik.values.password} style={{width:'400px', marginBottom:'50px'}}
            onChange={formik.handleChange} o
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
            />
            <Button type='submit' color='inherit' style={{color:'white', backgroundColor:'blue', padding:'10px 40px', marginRight:'100px'}}><Link style={{textDecoration:'none', color:'white'}} to='/home'>LOGIN</Link></Button>
            <Button color='inherit' style={{color:'white', backgroundColor:'blue', padding:'10px 40px'}} > <Link style={{textDecoration:'none', color:'white'}} to='/'>CANCEL</Link></Button>
            <Typography paragraph style={{marginTop:'30px'}}>Don't have an account? <strong style={{color:'blue', cursor:'pointer'}}><Link to='/register' style={{textDecoration:'none', color:'blue'}}>Register Here</Link></strong></Typography> 
      </form>
        
    )
}