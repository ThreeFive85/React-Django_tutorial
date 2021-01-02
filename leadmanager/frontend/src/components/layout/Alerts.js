import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
            if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`)
        }
        if (message !== prevProps.message){
            if (message.deleteLead) alert.success(message.deleteLead);
            if (message.addLead) alert.success(message.addLead);
        }
        
    }
    render() {
        return <Fragment />
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));

/**
 * `Email: ${error.msg.email.join()}`는 응답되는 에러 코드를 나타내 준다.
 * 만약 alert.error('정확한 이메일 형식을 적어주세요')라고 했을 때는 정확한 이메일 형식을 적지 않았을 때의 
 * 에러 메세지지만 만약 같은 이메일이 데이터베이스에 들어 있다면 또 다른 에러 메세지를 표시해 주어야 한다.
 */