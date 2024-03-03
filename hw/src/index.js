import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CommentsList from './components_hw_2/CommentsList';
import TemperatureConverter from './componenets_hw_3/TemperatureConverter';
import TodoList from './componenets_hw_3/TodoList';
// import Message from './components_hw_1/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <React.StrictMode>
    <TemperatureConverter />
    <TodoList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <CommentsList /> */ }
// <Message text="REACT" />
// {/* <CommentsList comments={comments} deleteComment={deleteComment} /> */}