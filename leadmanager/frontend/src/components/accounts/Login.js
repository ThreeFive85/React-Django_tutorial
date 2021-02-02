import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

export class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    static propTypes = {
      login: PropTypes.func.isRequired,
      isAuthenticated: PropTypes.bool
    }

  onChangeName = (e) => this.setState({ username: e.target.value });
  onChangePW1 = (e) => this.setState({ password: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.props.login)
    this.props.login(this.state.username, this.state.password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    const { username, password } = this.state;
    return(
      <Typography component="div" variant="body1">
         <Box color="success.main">
           <div>
             <h2>Login</h2>
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
                onChange={this.onChangePW1}
                />
              </div>
              <Button type='submit' color="primary" style={{marginLeft: '15%'}} >Login</Button>
              <p align="center">
                  Don't hava an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </Box>
      </Typography>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
// export default Login;
