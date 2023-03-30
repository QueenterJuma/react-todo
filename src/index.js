import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/app.css';
import { BrowserRouter } from 'react-router-dom';
import TodoApp from './Components/TodoApp';

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoApp />
    </BrowserRouter>
  </React.StrictMode>,
);
