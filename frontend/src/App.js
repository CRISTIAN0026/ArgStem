import { Grid } from '@mui/material';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';

function App() {
  return (
    <Grid container>
      <Navigation/>
      <Home/>
    </Grid>
  );
}

export default App;
