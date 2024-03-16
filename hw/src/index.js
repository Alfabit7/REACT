import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import CommentsList from './components_hw_2/CommentsList';
// import Message from './components_hw_1/Message';
// import RowList from './components_hw_4/RowList';
// import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TemperatureConverter from './componenets_hw_3/TemperatureConverter';
import ToDoList from './componenets_hw_3/ToDoList';

import AboutPage from './components_hw_4/AboutPage';
import HomePage from './components_hw_4/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './components_hw_5/store';
import SwitchTheme from './components_hw_5/SwitchTheme'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(

  <React.StrictMode>

    <Provider store={store}>
      <SwitchTheme />
    </Provider>
    <TemperatureConverter />
    <ToDoList />
    <h1 className='routing'>Routing</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// {/* <CommentsList /> */ }
// {/* <Message text="REACT" /> */ }
// {/* <CommentsList comments={comments} deleteComment={deleteComment} /> */ }

{/* <RowList>
<h1>text_1</h1>
<p> paragraph_2</p>
</RowList> */}