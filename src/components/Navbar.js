import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link, useNavigate } from 'react-router-dom';
import { store } from '../context/cartContext';

export default function ButtonAppBar() {

  const { cartData } = useContext(store)
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignItems: 'center', display: 'flex' }}>
            <LocalMallIcon />&nbsp;
            <Link to='/'>
              My Shop
            </Link>
          </Typography>
          <Button color="inherit" onClick={() => navigate('/cart')} style={{ position: 'relative' }}>
            <ShoppingCartIcon />Cart
            <span style={{ marginLeft: '5px', padding: '1px', borderRadius: '50%', color: "red", fontWeight: '800', position: 'absolute', right: "0px", top: 0 }}>{cartData.length}</span>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}