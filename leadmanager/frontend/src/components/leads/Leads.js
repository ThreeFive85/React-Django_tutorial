import React, { Component } from "react";
// 모든 구성 요소에서 redux를 사용하려면 connect를 사용해야 한다.
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Lead List</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});

export default connect(mapStateToProps, { getLeads })(Leads);
