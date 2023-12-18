import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Heading()
{
    return (<div className='col-12 p-2 text-bg-primary'>
    <h1>Welcome to site</h1>
</div>);
}
function Products()
{
    return(<div className='row mt-3'>
        <div className='col-12 mb-3'>
            <h2>
                Our Products
            </h2>
        </div>
        <div className='col-lg-3'>
            <div className='card shadow'>
                <img className='card-img-top' src='https://www.picsum.photos/300?random=1' />
                <div className='card-body'>
                    <div className='h3'>Accounting software</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor vulputate nunc, in gravida velit lobortis sed. Proin faucibus imperdiet lorem eu ullamcorper. </p>
                    <button type='button' className='btn btn-danger'>Read more</button>
                </div>
            </div>
        </div>
        <div className='col-lg-3'>
            <div className='card shadow'>
                <img className='card-img-top' src='https://www.picsum.photos/300?random=2' />
                <div className='card-body'>
                    <div className='h3'>School software</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor vulputate nunc, in gravida velit lobortis sed. Proin faucibus imperdiet lorem eu ullamcorper. </p>
                    <button type='button' className='btn btn-danger'>Read more</button>
                </div>
            </div>
        </div>
        <div className='col-lg-3'>
            <div className='card shadow'>
                <img className='card-img-top' src='https://www.picsum.photos/300?random=3' />
                <div className='card-body'>
                    <div className='h3'>travelling software</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor vulputate nunc, in gravida velit lobortis sed. Proin faucibus imperdiet lorem eu ullamcorper. </p>
                    <button type='button' className='btn btn-danger'>Read more</button>
                </div>
            </div>
        </div>
        <div className='col-lg-3'>
            <div className='card shadow'>
                <img className='card-img-top' src='https://www.picsum.photos/300?random=4' />
                <div className='card-body'>
                    <div className='h3'>stock market software</div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor vulputate nunc, in gravida velit lobortis sed. Proin faucibus imperdiet lorem eu ullamcorper. </p>
                    <button type='button' className='btn btn-danger'>Read more</button>
                </div>
            </div>
        </div>
    </div>);
}
function Page()
{
    let output = (<div className='container'>
        <div className='row'>
            <Heading />
        </div>
        <Products />
    </div>);
    return output;
}
root.render(<Page />);
