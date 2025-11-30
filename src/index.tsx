import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import './styles/vendors/bootstrap.scss';
import './styles/main.scss';

const root = document.getElementById('root');
const rootContainer = createRoot(root!);
rootContainer.render(<App />);
