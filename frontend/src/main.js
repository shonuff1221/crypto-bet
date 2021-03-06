import './styles/index.css';
import './styles/main.scss';

import HMR from '@sveltech/routify/hmr';
import App from './App.svelte';

const app = HMR(App, { target: document.getElementById('root') }, 'routify-app');

export default app;
