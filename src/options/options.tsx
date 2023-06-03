import React from 'react';
import { createRoot } from 'react-dom/client';
import '../assets/tailwind.css';

const test = (
    <div className=" text-blue-900">
        <h1 className="text-3xl text-center">Options</h1>
    </div>
);

const container=document.createElement('div')
document.body.appendChild(container)
const root=createRoot(container)
root.render(test)