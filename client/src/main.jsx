import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import App from './App';
import Login from './components/Login';
import Register from './components/Register.jsx';
import Landingpage from './components/Landingpage';
import ChatBot from './components/ChatBot.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
    // if you want to create a new router, then mention it in child
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Landingpage/>},
            {path: "/login", element: <Login/>},
            {path: "/signup", element: <Register/>},
            {path: "/chatbot", element: <ChatBot/>}
        ]
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
