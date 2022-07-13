import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// const rootNode = document.getElementById('root');
// ReactDOM.createRoot(rootNode).render(<App />);

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('root')
);

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);
// root.render(
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>,
// 	document.getElementById('root')
// );
