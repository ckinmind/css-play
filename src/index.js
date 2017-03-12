import React from 'react';
import { render } from 'react-dom';
import Route from './routes';
import './styles/app.scss';
import './styles/reset.css';


render(<Route />, document.getElementById('app'));
