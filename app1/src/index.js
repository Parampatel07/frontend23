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
function SingleProduct({title,detail,photo})
{
    return ( <div className='col-lg-3'>
    <div className='card shadow'>
        <img className='card-img-top' src={photo} />
        <div className='card-body'>
            <div className='h3'>{title}</div>
            <p>{detail}</p>
            <button type='button' className='btn btn-danger'>Read more</button>
        </div>
    </div>
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
        <SingleProduct title='Accounting software' detail='some detail about accounting software' photo='https://www.picsum.photos/300?random=1' />

        <SingleProduct title='school software' detail='some detail about accounting software' photo='https://www.picsum.photos/300?random=2' />

        <SingleProduct title='hospital software' detail='some detail about accounting software' photo='https://www.picsum.photos/300?random=3' />

        <SingleProduct title='traveling software' detail='some detail about accounting software' photo='https://www.picsum.photos/300?random=4' />
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
