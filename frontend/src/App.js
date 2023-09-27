import { Grid, Typography } from '@mui/material';

function App() {
  return (
    <Grid container style={{
       display: "flex",justifyContent:"center", padding: "50px 90px 60px 40px"
    }}>
      <Grid item style={{display:"flex", alignContent:"center", flexDirection:"column"}}>
      <Typography style={{color:"#EFCB69", fontFamily:"Roboto", fontWeight:700, fontSize:"50px"}}>ArgStem</Typography>
      <Typography style={{fontFamily:"Roboto", fontWeight:700, fontSize:"50px"}}>Welcome</Typography>
      </Grid>
    </Grid>
  );
}

export default App;
