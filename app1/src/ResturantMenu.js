import React from "react"
import Table from "./Table"
export default class ResturantMenu extends React.Component {
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