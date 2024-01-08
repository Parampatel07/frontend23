import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

    updateLogin = () => {
        this.setState({
            isLogin: !this.state.isLogin
        });
    }
    render() {
        if (this.state.isLogin == false)
            return (<a className='nav-link'><button onClick={this.updateLogin} className='btn btn-primary'>Login</button></a>);
        else
            return (<a className='nav-link'><button onClick={this.updateLogin} className='btn btn-danger'>Logout</button></a>);
    }
}
function MessageBox(props) {
    let messages = props.messages;
    return <div>
        {(messages >= 1) && <button className='btn btn-info'>Messages {messages} </button>}
        {(messages == 0) && <button className='btn btn-warning'>No new messages</button>}
    </div>;
}
function Page() {
    return (
        <div className='container-fluid bg-light shadow p-2'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-end'>
                    <ul className='nav'>
                        <li className='nav-item'>
                            <a className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>About us</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>Products</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'>Contact us</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link'><MessageBox messages='0' /></a>
                        </li>
                        <li className='nav-item'>
                            <LoginControl />
                        </li>
                    </ul>
                </div>
            </div>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);