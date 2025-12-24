import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Welcome to Resume Analyzer</h1>
      <p>This is the frontend for the Resume Analyzer application.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
