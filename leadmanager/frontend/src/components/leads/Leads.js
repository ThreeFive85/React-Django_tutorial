import React, { Component, Fragment } from "react";
// 모든 구성 요소에서 redux를 사용하려면 connect를 사용해야 한다.
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { TableBody, TableHead } from "@material-ui/core";
import Button from '@material-ui/core/Button';


export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <h2>Lead List</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Message</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            { this.props.leads.map(lead => (
              <TableRow key={lead.id}>
                <TableCell>{lead.id}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.message}</TableCell>
                <TableCell><Button onClick={this.props.deleteLead.bind(this, lead.id)} 
                variant="outlined" color="secondary">Delete</Button></TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads, deleteLead })(Leads);
