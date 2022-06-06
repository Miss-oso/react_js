import React from 'react';
import ReactDOM from 'react-dom/client';
import { MessageList } from './components/message-list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <MessageList />
    </React.StrictMode>
);


