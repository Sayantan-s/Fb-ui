import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass/global.scss';
import GifContext from './context/GifContext';
import CreatePostContext from './context/CreatePostConext';

ReactDOM.render(
    <React.StrictMode>
        <CreatePostContext>
            <GifContext>
                <App />
            </GifContext>
        </CreatePostContext>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
