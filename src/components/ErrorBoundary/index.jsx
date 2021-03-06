import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch(error, ihfo) {
    this.setState({ hasError: true })
  };

  render() {
    if(this.state.hasError) {
      return (
        <p>Ой, произошла ошибка :(</p>
      )
    } else {
      return this.props.children;
    };
  };
};

export default ErrorBoundary;