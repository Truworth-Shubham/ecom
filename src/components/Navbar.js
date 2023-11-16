import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {

    const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,alignItems:'center',display: 'flex' }}>
            <LocalMallIcon/>&nbsp;
            <Link to='/'>
            My Shop
            </Link>
          </Typography>
          <Button color="inherit" onClick={()=>navigate('/cart')}>
            <ShoppingCartIcon/>Cart
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}