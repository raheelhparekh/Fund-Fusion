import React from 'react';
import { useRouteError } from 'react-router-dom';

// Error component to display error messages
const ErrorComponent = () => {
  const error = useRouteError();
  // Extracting status and message from the error
  const status = error.status || 500;
  const message = error.data.message || 'Something went wrong.';

  return (
    <div style={{ padding: '1em', border: '1px solid red', borderRadius: '5px', backgroundColor: '#fdd', color: '#d00' }}>
      <h2>Error {status}</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorComponent;
