import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//create class Component
class Table extends React.Component
{
    constructor(props)
    {
        super(props)
        this.srno = props.no;
        this.state = {
            tea : 0,
            coffee:1
        }
    }  
    countTea()
    {
        this.setState({
            tea : this.state.tea + 1
       });
    }
    countCoffee()
    {
        this.setState({
            coffee : this.state.coffee + 1
       });
    }
    render()
    {
        return (<div className='col-lg-3'>
            <div className='card'>
                <div className='card-header text-bg-info'>
                    <h3>Table No :- {this.srno}</h3> 
                </div>
                <div className='card-body'>
                    <button onClick={() => this.countTea()} type='button' className='btn btn-danger w-100 mb-2'>Tea {this.state.tea}</button>
                    <button onClick={() => this.countCoffee()} type='button' className='btn btn-warning w-100 mb-2'>Coffee {this.state.coffee}</button>
                </div>
                <div className='card-footer'>
                    Total 
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
                        <h1>Tea Post Table</h1>
                    </div>
                </div>
                <div className='row mt-3'>
                    <Table no='1' />
                    <Table no='2' />
                    <Table no='3' />
                    <Table no='4' />
                </div>
            </div>
        )
    }
}
root.render(<ResturantMenu />)