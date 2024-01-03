import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class LifeCycle extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log('initilization phase');
        this.state = {
            count:0
        }
    }
    componentWillMount()
    {
        console.log('this is componentWillMount it is called before render method is called');
    }
    componentDidMount()
    {
        console.log('this is componentDidMount it is called before render method is called');
    }

    shouldComponentUpdate(nextProp,nextState)
    {
        console.log("should components update method is called",nextState.count);
        console.log("shouldComponentUpdate current state ",this.state.count);
        return true;
    }
    
    componentWillUpdate(nextProp,nextState)
    {
        console.log("componentWillUpdate method is called",nextState.count);
        console.log("componentWillUpdate current state ",this.state.count);
    }

    componentDidUpdate(prevProp,prevState)
    {
        console.log("componentDidUpdate method is called",prevState.count);
        console.log("componentDidUpdate current state ",this.state.count);

    }

    updateCount = () => {
        this.setState({
            count:this.state.count + 1
        });
    }
    render()
    {
        console.log('render method is called',this.state.count);
        return(<div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>App lifecycle concept</h1>
                    <button type='button' onClick={() => this.updateCount()}>Increase count</button>
                    <h3>Count = {this.state.count}</h3>
                </div>
            </div>
        </div>);
    }

}   
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LifeCycle />)