import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class Component
class Dish extends React.Component {
    constructor(props)
    {
        super(props); //compulsory
        //class property variable
        this.name = props.name;
        this.photo = props.photo;
    }

    render() {
        return (<div className='col-lg-4 mb-3'>
            <div className='card shadow'>
                <div className='card-header text-bg-danger'>
                    <h3>{this.name}</h3>
                </div>
                <div className='card-body'>
                    <img src={this.photo} className='img-fluid' />
                   
                </div>
            </div>
        </div>);
    }
}
class ResturantMenu extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Shreeji Resturant Menu</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <Dish name='Samosa' photo='https://picsum.photos/300?random=1' />
                    <Dish name='Masala dosa' photo='https://picsum.photos/300?random=2' />
                    <Dish name='Pani puri' photo='https://picsum.photos/300?random=3' />
                    <Dish name='paneer butter masala' photo='https://picsum.photos/300?random=4' />
                    
                </div>
            </div>
        )
    }
}
root.render(<ResturantMenu />)