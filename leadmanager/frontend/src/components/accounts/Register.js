import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';

export class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    }

  onChangeName = (e) => this.setState({ username: e.target.value });
  onChangeEmail = (e) => this.setState({ email: e.target.value });
  onChangePW1 = (e) => this.setState({ password: e.target.value });
  onChangePW2 = (e) => this.setState({ password2: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    // const { username, email, password, password2 } = this.state;
    console.log('submit')
  }

  render() {
    const { username, email, password, password2 } = this.state;
    return(
      <Typography component="div" variant="body1">
         <Box color="success.main">
           <div>
             <h2>Register</h2>
             <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <TextField
                id="standard-multiline-flexible"
                label="UserName"
                type="text"
                required
                multiline
                inputProps={{ maxLength: 10 }}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',             
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                getvalue={username}
                onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <TextField
                id="standard-multiline-flexible"
                label="Email"
                type="email"
                required
                multiline
                inputProps={{ maxLength: 20}}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',            
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                getvalue={email}
                onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <TextField
                id="standard-multiline-flexible"
                label="Password"
                type="text"
                required
                multiline
                inputProps={{ maxLength: 20 }}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',             
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                getvalue={password}
                onChange={this.onChangeMessage}
                />
              </div>
              <div className="form-group">
                <TextField
                id="standard-multiline-flexible"
                label="Password2"
                type="text"
                required
                multiline
                inputProps={{ maxLength: 20 }}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',             
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                getvalue={password2}
                onChange={this.onChangeMessage}
                />
              </div>
              <Button type='submit' color="primary" style={{marginLeft: '15%'}}>Register</Button>
              <p align="center">
                  Already hava an account? <Link to="/Login">Login</Link>
              </p>
            </form>
          </div>
        </Box>
      </Typography>
    );
  }
}

export default Register
