
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary/index.jsx';

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('root'));