import React from "react";
import Player from "./Player";
//create class components
class ScoreBoard extends React.Component
{
    render()
    {
        return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>India</h1>
                    <h3>India Vs Afferica  (Ahmedbad) 27-12-2023</h3>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-12">
                    <table className="table table-bordered table-striped" width='100%'>
                       
                        <Player name='Sachin Tendulkar' srno='1' />
                        <Player name='Rohit sharma' srno='2' />
                       
                    </table>
                </div>
            </div>
        </div>);
    }
}
export default ScoreBoard;