import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ActionTypes from '@actions/types';
import createAction from '@actions';

class AppWrapper extends Component {
  static propTypes = {
    dispatchInitInfoAction: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };

  componentDidMount = () => {
    const { dispatchInitInfoAction } = this.props;
    const initInfoAction = createAction(
      ActionTypes.FETCH_INIT_INFO_SUCCESS,
      {},
    );
    dispatchInitInfoAction(initInfoAction);
  };

  render() {
    const { children } = this.props;
    return children;
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchInitInfoAction: (initInfoAction) => dispatch(initInfoAction),
});

export default connect(null, mapDispatchToProps)(AppWrapper);
