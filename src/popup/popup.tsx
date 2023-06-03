import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';
import App from './App';

const test = (
    <div className=" text-blue-900">
        <h1 className="text-2xl text-center">Chrome Extension</h1>
       <img src='chrome.jpg' alt=''/>
       
       <App/>
    </div>
);

const container=document.createElement('div')
document.body.appendChild(container)
const root=createRoot(container)
root.render(test)

