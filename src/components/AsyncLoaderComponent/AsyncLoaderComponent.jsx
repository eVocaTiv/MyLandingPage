import { Component } from 'react';
import PropTypes from 'prop-types';

class AsyncLoaderComponent extends Component {
  state = {
    component: null,
  };

  static propTypes = {
    actualComponent: PropTypes.node.isRequired,
    delay: PropTypes.number,
    skeleton: PropTypes.node,
  };

  static defaultProps = {
    delay: 0,
    skeleton: null,
  };

  componentDidMount() {
    const { actualComponent, delay } = this.props;
    setTimeout(() => {
      this.setState({
        component: actualComponent,
      });
    }, delay);
  }

  render() {
    const { skeleton } = this.props;
    const { component} = this.state;
    return component || skeleton;
  }
}

export default AsyncLoaderComponent;
