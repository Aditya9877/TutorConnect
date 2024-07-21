import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from './log-in'; // Import the Login component
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; // Import MDB styles
import './index.css'; // Your custom styles if any

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
