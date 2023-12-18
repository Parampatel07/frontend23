import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
let Message = function()
{
   let today = new Date();
   let CurrentHour = today.getHours(); //return hours of the day 
   if(CurrentHour<12)
        return (<h1>Good Morning</h1>)
   else if(CurrentHour>=12 && CurrentHour<=17)
        return (<h1>Good afternoon</h1>)
   else 
        return (<h1>Good Evening</h1>)}
let Greeting = function()
{
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <Message />
                </div>
            </div>
        </div>
    )
}
root.render(<Greeting />);
