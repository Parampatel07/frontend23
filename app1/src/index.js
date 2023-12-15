import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
var num1 = 10;
var num2 = 3;
var output = (<div className='container'>
    <div className='row'>
        <div className='col-6 offset-3'>
            <div className='card shadow'>
                <div className='card-header text-bg-danger'>
                    <div className='h3'>Login</div>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor=''>Email address</label>
                            <input type='email' name='email' id='email' className='form-control' required />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label' htmlFor=''>Password</label>
                            <input type='password' name='password' id='password' className='form-control' required />
                        </div>
                        <div>
                            <input type='submit' className='btn btn-danger w-100' value='Login' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(output);
