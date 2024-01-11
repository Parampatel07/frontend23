import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Refrigrator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: this.props.fruits
        }
    }
    DeleteFruit = (item) => {
        // alert(item);
        let temp = this.state.fruits.filter((current) =>{
                if(current!=item)
                    return current
        });

        this.setState({
            fruits:temp
        })
    }
    DisplayFruit = (item,index) =>
    {
        return (<div className='col-lg-3 mb-3' key={index}>
        <div className='card shadow' >
            <div className='card-body d-flex justify-content-between'>
                <h3>{item}</h3>
                <span className='text-danger'>
                    <i onClick={() => this.DeleteFruit(item)} className='fa fa-trash fa-2x '></i></span>
            </div>
        </div>
    </div>)
    }
    render()
    {
        return(this.state.fruits.map((item,index) => {
            return this.DisplayFruit(item,index)
        }));
    }
}
function Page() {
    var fruitNames = [
        "Apple","Banana","Orange","Grapes", "Mango","Strawberry", "Pineapple", "Watermelon", "Kiwi", "Peach", "Pear", "Cherry", "Blueberry", "Raspberry", "Blackberry", "Plum", "Avocado", "Pomegranate", "Coconut", "Lemon"
    ];
    return (
        <div className='container'>
            <div className='row'>
                <Refrigrator fruits={fruitNames} />
            </div>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);