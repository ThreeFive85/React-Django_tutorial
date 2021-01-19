import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

export class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              Lead Manager
            </Typography>
            <Grid container justify="flex-end" item xs={10} sm={16}>
              <Link style={{ textDecoration: 'none', color:"white" }} to="/register">
                <Button color="inherit">Register</Button>
              </Link>
              <Link style={{ textDecoration: 'none', color:"white" }} to="/login">
                <Button color="inherit">Login</Button>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
