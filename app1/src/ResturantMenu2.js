import React from "react"
import Table from "./Table2"
export default class ResturantMenu extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            GrandTotal:0
        }
    }
    updateGrandTotal = (total) =>
    {
        this.setState({
            GrandTotal: this.state.GrandTotal + total
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>Tea Post Table</h1>
                        <h3>Today's selling :- {this.state.GrandTotal}</h3>
                    </div>
                </div>
                <div className='row mt-3'>
                    <Table no='1' updateGrandTotal={this.updateGrandTotal} />
                    <Table no='2' updateGrandTotal={this.updateGrandTotal} />
                    <Table no='3' updateGrandTotal={this.updateGrandTotal} />
                    <Table no='4' updateGrandTotal={this.updateGrandTotal} />
                </div>
            </div>
        )
    }
}