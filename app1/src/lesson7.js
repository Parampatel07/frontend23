import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function DisplayCurrentDateTime()
{
    var now = new Date();
    var output = (
    <div className='container'>
        <div className='row'>
            <div className='col-12'>
                <h1>Current Date</h1>
                <a className='btn btn-danger'>{now.getDate()}-{now.getMonth()+1}- {now.getFullYear()}</a>
                <h1>Current Time</h1>
                <a className='btn btn-primary'>{now.toLocaleTimeString()}</a>
            </div>
        </div>
    </div>);
    root.render(output);
}
setInterval(DisplayCurrentDateTime,1000);
