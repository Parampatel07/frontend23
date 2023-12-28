import React from "react";
class Player extends React.Component {
    
    constructor(props)
    {
        super(props);
        //property variables
        this.name = props.name;
        this.srno = props.srno;

        //state variables
        this.state = {
            zero:0,
            one:0,
            two:0,
            three:0,
            four:0,
            six:0,
            ball:0,
            run:0
        }
    }
    
    UpdateScore = (score) => {
        console.log(score);
        this.setState({
            ball:this.state.ball + 1
        });
        this.setState({
            run: this.state.run + score
        });
        if(score==0)
        {
            this.setState({
                zero: this.state.zero + 1
            });
        }
        else if(score==1)
        {
            this.setState({
                one: this.state.one + 1
            });
        }
        else if(score==2)
        {
            this.setState({
                two: this.state.two + 1
            });
        }
        else if(score==3)
        {
            this.setState({
                three: this.state.three + 1
            });
        }
        else if(score==4)
        {
            this.setState({
                four: this.state.four + 1
            });
        }
        else if(score==6)
        {
            this.setState({
                six: this.state.six + 1
            });
        }
    }

    render() 
    {
        return (<>
            <tr>
                <td width='5%'>{this.srno}</td>
                <td width='20%'>{this.name}</td>
                <td width='5%'><button onClick={()=> this.UpdateScore(0)} type="button" className="btn w-100 btn-info">0</button></td>
                <td width='5%'><button onClick={()=> this.UpdateScore(1)} type="button" className="btn w-100 btn-info">1</button></td>
                <td width='5%'><button onClick={()=> this.UpdateScore(2)} type="button" className="btn w-100 btn-info">2</button></td>
                <td width='5%'><button onClick={()=> this.UpdateScore(3)} type="button" className="btn w-100 btn-info">3</button></td>
                <td width='5%'><button onClick={()=> this.UpdateScore(4)} type="button" className="btn w-100 btn-info">4</button></td>
                <td width='5%'><button onClick={()=> this.UpdateScore(6)} type="button" className="btn w-100 btn-info">6</button></td>
                <th width='5%' className="text-center">Runs</th>
                <th width='5%' className="text-center">Ball</th>
                <th width='5%' className="text-center">Strike rate</th>
            </tr>
            <tr>
                <td className="text-center"></td>
                <td className="text-left">Current Score</td>
                <td className="text-center">{this.state.zero}</td>
                <td className="text-center">{this.state.one}</td>
                <td className="text-center">{this.state.two}</td>
                <td className="text-center">{this.state.three}</td>
                <td className="text-center">{this.state.four}</td>
                <td className="text-center">{this.state.six}</td>
                <td className="text-center">{this.state.run}</td>
                <td className="text-center">{this.state.ball}</td>
                <td className="text-center">{(this.state.run/this.state.ball).toFixed(2)}</td>
            </tr>
        </>);
    }
}
export default Player;