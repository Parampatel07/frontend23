import React from "react";
class Player extends React.Component {
    
    constructor(props)
    {
        super(props);
        this.name = props.name;
        this.srno = props.srno;
    }

    render() {
        return (<>
            <tr>
                <td width='5%'>{this.srno}</td>
                <td width='20%'>{this.name}</td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">0</button></td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">1</button></td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">2</button></td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">3</button></td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">4</button></td>
                <td width='5%'><button type="button" className="btn w-100 btn-info">6</button></td>
                <th width='5%' className="text-center">Runs</th>
                <th width='5%' className="text-center">Ball</th>
                <th width='5%' className="text-center">Strike rate</th>
            </tr>
            <tr>
                <td className="text-center"></td>
                <td className="text-left">Current Score</td>
                <td className="text-center">10</td>
                <td className="text-center">10</td>
                <td className="text-center">5</td>
                <td className="text-center">2</td>
                <td className="text-center">10</td>
                <td className="text-center">3</td>
                <td className="text-center">84</td>
                <td className="text-center">34</td>
                <td className="text-center">225</td>
            </tr>
        </>);
    }
}
export default Player;