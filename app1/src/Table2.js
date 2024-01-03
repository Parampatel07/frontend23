import React from "react";
export default class Table extends React.Component
{
    constructor(props)
    {
        super(props)
        //property variable (can be accessed from any function)
        this.srno = props.no;
        this.state = {
            tea : 0,
            coffee:0,
            total:0
        }
    }  
    countTea()
    {
        this.setState({
            tea : this.state.tea + 1,
       });
       
    }
    countCoffee()
    {
        this.setState({
            coffee : this.state.coffee + 1,
       });
    }
    componentDidUpdate(prevProp,prevState)
    {
        if(prevState.tea != this.state.tea || prevState.coffee != this.state.coffee)
        {
            this.setState({
                total: (this.state.tea * 10) + (this.state.coffee * 15)
            },() =>{
                this.props.updateGrandTotal(this.state.total - prevState.total);
            });
        }
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
                    Total = {this.state.total}
                </div>
            </div>
        </div>);
    }
}