import React, { Component, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function Form(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onNameHand = e => {
    setName(e.currentTarget.value)
    console.log(e.currentTarget.value)
  }
  const onEmailHand = e => {
    setEmail(e.currentTarget.value)
  }
  const onMessageHand = e => {
    setMessage(e.currentTarget.value)
  }
  const onSubmit = e => {
    e.preventDefault();
    console.log('submit')
  }

  return(
      <Typography component="div" variant="body1">
        <Box color="success.main">
          <div>
            <h2>Add Lead</h2>
            <form onSubmit={onSubmit}>
              <div>
                <TextField
                id="standard-multiline-flexible"
                label="Name"
                multiline
                inputProps={{ maxLength: 10 }}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',             
                  paddingBottom: 10,
                  marginTop: 0,
                }}
                value={name}
                onChange={onNameHand}
                />
              </div>
              <div>
                <TextField
                id="standard-multiline-flexible"
                label="Email"
                multiline
                rowsMax={4}
                inputProps={{ maxLength: 10}}
                style={{
                  width: '70%',
                  marginLeft: '15%',
                  marginRight: '15%',            
                  paddingBottom: 30,
                  marginTop: 0,
                }}
                onChange={onEmailHand}
                value={email}
                />
              </div>
              <div>
                <TextField
                id="outlined-multiline-static"
                label="Message"
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
                onChange={onMessageHand}
                value={message}
                />
              </div>
              <Button type='submit' color="primary" style={{marginLeft: '15%'}} onSubmit={onSubmit}>Submit</Button>
            </form>
          </div>
        </Box>
      </Typography>
    )
}

export default Form;

// export class Form extends Component {
//   state = {
//       name: '',
//       email: '',
//       message: ''
//   }

//   onChange = e => {
//     // e.persist();
//     console.log(e.target.value)
//     this.setState({ 
//       [e.target.name]: e.target.value 
//     });
//   };

//   onSubmit = e => {
//     e.preventDefault();
//     console.log('submit')
//   }

//   render() {
//     const { name, email, message } = this.state;
//     return(
//       <Typography component="div" variant="body1">
//         <Box color="success.main">
//           <div>
//             <h2>Add Lead</h2>
//             <form onSubmit={this.onSubmit}>
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
//                 onChange={this.onChange}
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
//                 onChange={this.onChange}
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
//                 onChange={this.onChange}
//                 value={message}
//                 />
//               </div>
//               <Button color="primary" style={{marginLeft: '15%'}}>Submit</Button>
//             </form>
//           </div>
//         </Box>
//       </Typography>
//     );
//   }
// }