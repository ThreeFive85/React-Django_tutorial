import React, { Component, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addLead } from '../../actions/leads';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core";

// function Form(props) {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const onNameHand = e => {
//     setName(e.currentTarget.value)
//     // console.log(e.currentTarget.value)
//   }
//   const onEmailHand = e => {
//     setEmail(e.currentTarget.value)
//   }
//   const onMessageHand = e => {
//     setMessage(e.currentTarget.value)
//   }
  
//   const onSubmit = e => {
//     e.preventDefault();
//     console.log({name:name, email:email, message:message})
//     Form.propTypes.addLead({name:name, email:email, message:message})
//   }

//   return(
//       <Typography component="div" variant="body1">
//         <Box color="success.main">
//           <div>
//             <h2>Add Lead</h2>
//             <form onSubmit={onSubmit}>
//               <div>
//                 <TextField
//                 id="standard-multiline-flexible"
//                 label="Name"
//                 multiline
//                 inputProps={{ maxLength: 10 }}
//                 style={{
//                   width: '70%',
//                   marginLeft: '15%',
//                   marginRight: '15%',             
//                   paddingBottom: 10,
//                   marginTop: 0,
//                 }}
//                 value={name}
//                 onChange={onNameHand}
//                 />
//               </div>
//               <div>
//                 <TextField
//                 id="standard-multiline-flexible"
//                 label="Email"
//                 multiline
//                 rowsMax={4}
//                 inputProps={{ maxLength: 10}}
//                 style={{
//                   width: '70%',
//                   marginLeft: '15%',
//                   marginRight: '15%',            
//                   paddingBottom: 30,
//                   marginTop: 0,
//                 }}
//                 onChange={onEmailHand}
//                 value={email}
//                 />
//               </div>
//               <div>
//                 <TextField
//                 id="outlined-multiline-static"
//                 label="Message"
//                 multiline
//                 variant="outlined"
//                 rows={4}
//                 style={{
//                   width: '70%',
//                   marginLeft: '15%',
//                   marginRight: '15%',             
//                   paddingBottom: 10,
//                   marginTop: 0,
//                 }}
//                 onChange={onMessageHand}
//                 value={message}
//                 />
//               </div>
//               <Button type='submit' color="primary" style={{marginLeft: '15%'}} onSubmit={onSubmit}>Submit</Button>
//             </form>
//           </div>
//         </Box>
//       </Typography>
//     )
// }

// Form.propTypes = {
//   addLead : PropTypes.func.isRequired
// }


export class Form extends Component {

  state = {
      name: '',
      email: '',
      message: ''
  }

  static propTypes = {
    addLead: PropTypes.func.isRequired,
  };

  onChangeName = (e) => this.setState({ name: e.target.value });
  onChangeEmail = (e) => this.setState({ email: e.target.value });
  onChangeMessage = (e) => this.setState({ message: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const lead = { name, email, message };
    console.log(lead)
    this.props.addLead(lead);
  }

  render() {
    const { name, email, message } = this.state;
    return(
      <Typography component="div" variant="body1">
         <Box color="success.main">
           <div>
             <h2>Add Lead</h2>
             <form onSubmit={this.onSubmit}>
               <div className="form-group">
                 <TextField
                id="standard-multiline-flexible"
                label="Name"
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
                getvalue={name}
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
                rowsMax={4}
                inputProps={{ maxLength: 20}}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',            
                  paddingBottom: 30,
                  marginTop: 0,
                }}
                getvalue={email}
                onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <TextField
                id="outlined-multiline-static"
                label="Message"
                type="text"
                required
                multiline
                variant="outlined"
                rows={4}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',             
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                getvalue={message}
                onChange={this.onChangeMessage}
                />
              </div>
              <Button type='submit' color="primary" style={{marginLeft: '15%'}}>Submit</Button>
            </form>
          </div>
        </Box>
      </Typography>
    );
  }
}

// // 참고 동영상 코드
// export class Form extends Component {
//   state = {
//     name: '',
//     email: '',
//     message: '',
//   };

//   // static propTypes = {
//   //   addLead: PropTypes.func.isRequired,
//   // };

//   onChange = (e) => this.setState({ [e.target.name]: e.target.value });

//   onSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = this.state;
//     const lead = { name, email, message };
//     console.log(lead)
//     // this.props.addLead(lead);
//     // this.setState({
//     //   name: '',
//     //   email: '',
//     //   message: '',
//     // });
//   };

//   render() {
//     const { name, email, message } = this.state;
//     return (
//       <div className="card card-body mt-4 mb-4">
//         <h2>Add Lead</h2>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Name</label>
//             <input
//               className="form-control"
//               type="text"
//               name="name"
//               onChange={this.onChange}
//               value={name}
//             />
//           </div>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               className="form-control"
//               type="email"
//               name="email"
//               onChange={this.onChange}
//               value={email}
//             />
//           </div>
//           <div className="form-group">
//             <label>Message</label>
//             <textarea
//               className="form-control"
//               type="text"
//               name="message"
//               onChange={this.onChange}
//               value={message}
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default connect(null, { addLead })(Form);