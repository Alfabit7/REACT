import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const HomePage = () => (
    <div className='homePage'>
        <h1>Домашняя страница</h1>
        <Link to="/about">Перейти на страницу о нас</Link>
    </div>
);

export default HomePage;