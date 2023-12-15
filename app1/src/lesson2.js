import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10;
var num2 = 3;
var output = (<div>
    <h1>Expression in JSX</h1>
        <ul>
            <li>Addition = {num1 + num2}</li>
            <li>Subtraction = {num1 - num2}</li>
            <li>Multiplication = {num1 * num2}</li>
            <li>Division = {num1 / num2}</li>
        </ul>
</div>)
root.render(output);
