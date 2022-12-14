import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/index.css'
import 'mapbox-gl/dist/mapbox-gl.css';

document.title='Fbus Admin'
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);