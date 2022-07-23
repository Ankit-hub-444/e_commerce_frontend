import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography ,Button,TextField} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useCallback } from 'react';
import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { useHistory } from "react-router-dom";

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        {/* <p>Cart</p> */}
      </MenuItem>
    </Menu>
  );

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push(`/signup`), [history]);
  const handleOnClick1 = useCallback(() => history.push(`/login`), [history]);
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar
          //  disableGutters
           sx={{display: { xs: "flex" },
            flexDirection: "row",
           
            justifyContent: "space-between"
          }}>
           <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Shoplist
          </Typography> 

          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit"
          sx={{flexgrow: 1}}>
             Home
          </Typography> 
          <Typography component={Link} to="/AddProduct" variant="h6" className={classes.title} color="inherit">
             Add Product
          </Typography> 
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
         
          </Typography> 
          {/* <TextField
                                name="search"
                                // floatingLabelText="Cerca"
                                // value={this.state.query}
                                // onChange={this.searchChange}
                                // floatingLabelFixed
           /> */}
            {/* <Button variant="contained" margin="40px">Search</Button> */}
          <Button variant="contained" onClick={handleOnClick1}>Login</Button>
           <Button variant="outlined" onClick={handleOnClick}>Signup</Button>
          
          {/* <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}  */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
