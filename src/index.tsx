import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './screens/TodoApp/TodoApp';
import './styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);
