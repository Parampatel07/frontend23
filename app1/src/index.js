import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var srno=1;
const root = ReactDOM.createRoot(document.getElementById('root'));
function Team(props)
{
    return ( <tr>
        <td>{srno++}</td>
        <td>{props.name}</td>
        <td>{props.match}</td>
        <td>{props.wins}</td>
        <td>{props.loss}</td>
        <td>{props.points}</td>
    </tr>)
}
function Page()
{
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Cricket World cup 2023 points table</h1> <hr/>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <table className='table table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th width={'5%'}>Srno</th>
                                <th>Team Name</th>
                                <th width={'10%'}>Match</th>
                                <th width={'10%'}>Win</th>
                                <th width={'10%'}>Loss</th>
                                <th width={'10%'}>Points</th>
                            </tr>
                        </thead>
                        <tbody>
                        <Team name='India' match='12' wins='11' loss='1' points='22' />
                        <Team name='Australia' match='12' wins='09' loss='3' points='18' />    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
root.render(<Page />)