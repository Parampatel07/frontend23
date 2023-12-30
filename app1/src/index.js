import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class InterestCalculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            amount:0,
            rate:0,
            year:0,
            interest:0.0
        }
    }
    upeateAmount = (event) => {
        this.setState({
            amount: event.target.value
        },()=>{
            this.calculateInterest();
        });
    }
    updateRate = (event) => {
        this.setState({
            rate: event.target.value
        },()=>{
            this.calculateInterest();
        });
    }

    updateYear = (event) => {
        this.setState({
            year: event.target.value
        },()=> {
            this.calculateInterest();
        });
    }

    calculateInterest = () => {
        this.setState({
            interest: (this.state.amount * this.state.year * this.state.rate) / 100
        })
    } 
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title mb-4">Simple Interest Calculator</h2>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="amount" className="form-label">Amount</label>
                                        <input type="number" className="form-control" id="amount" placeholder="Enter Amount" 
                                        onBlur={this.upeateAmount}  />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="rate" className="form-label">Rate</label>
                                        <input type="number" className="form-control" id="rate" placeholder="Enter Rate"
                                        onBlur={this.updateRate}  />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="year" className="form-label">Year</label>
                                        <input type="number" className="form-control" id="year" placeholder="Enter Year" 
                                        onBlur={this.updateYear} />
                                    </div>
                                    <h3>Interest : {this.state.interest}</h3>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestCalculator />)