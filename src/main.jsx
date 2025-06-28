import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';
import App from './app/App.jsx';
import './index.css';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{
      padding: '20px',
      background: '#ffebee',
      color: '#b71c1c',
      borderRadius: '4px',
      margin: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2>Something went wrong</h2>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.message}</pre>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px', overflow: 'auto' }}>
        {error.stack}
      </pre>
      <button 
        onClick={resetErrorBoundary}
        style={{
          marginTop: '10px',
          padding: '8px 16px',
          background: '#b71c1c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Try again
      </button>
    </div>
  );
}

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find the root element');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // Reset the state of your app here
      }}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
