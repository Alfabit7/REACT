import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const AboutPage = () => (
    <div className='aboutPage'>
        <h1>Страница о нас</h1>
        <Link to="/">Перейти на домашнюю страницу</Link>
    </div>
);

export default AboutPage;


