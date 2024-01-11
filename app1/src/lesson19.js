import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Europe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: this.props.countries
        }
    }
    DeleteCountry = (item) => {
        // alert(item);
        let temp = this.state.countries.filter((current) => {
            if (current.name != item.name)
                return current
        });

        this.setState({
            countries: temp
        })
    }
    DisplayCountry = (item, index) => {
        return (<div className='col-lg-3 mb-3' key={index}>
            <div className='card shadow' >
                <img src={item.flag} className='card-img-top' />
                <div className='card-body d-flex justify-content-between'>
                    <h5>{item.name}</h5>
                    <i className='fa fa-trash fa-2x' onClick={()=> this.DeleteCountry(item)}></i>
                </div>
            </div>
        </div>)
    }
    render() {
        return (this.state.countries.map((item, index) => {
            return this.DisplayCountry(item, index)
        }));
    }
}
function Page() {
    // array of objects
    var countries = [
        { name: "Germany", flag: "https://flagpedia.net/data/flags/w580/de.png" },
        { name: "United Kingdom", flag: "https://flagpedia.net/data/flags/w580/gb.png" },
        { name: "France", flag: "https://flagpedia.net/data/flags/w580/fr.png" },
        { name: "Italy", flag: "https://flagpedia.net/data/flags/w580/it.png" },
        { name: "Spain", flag: "https://flagpedia.net/data/flags/w580/es.png" },
        { name: "Netherlands", flag: "https://flagpedia.net/data/flags/w580/nl.png" },
        { name: "Belgium", flag: "https://flagpedia.net/data/flags/w580/be.png" },
        { name: "Switzerland", flag: "https://flagpedia.net/data/flags/w580/ch.png" },
        { name: "Austria", flag: "https://flagpedia.net/data/flags/w580/at.png" },
        { name: "Portugal", flag: "https://flagpedia.net/data/flags/w580/pt.png" },
        { name: "Sweden", flag: "https://flagpedia.net/data/flags/w580/se.png" },
        { name: "Norway", flag: "https://flagpedia.net/data/flags/w580/no.png" },
        { name: "Denmark", flag: "https://flagpedia.net/data/flags/w580/dk.png" },
        { name: "Finland", flag: "https://flagpedia.net/data/flags/w580/fi.png" },
        { name: "Greece", flag: "https://flagpedia.net/data/flags/w580/gr.png" },
        { name: "Poland", flag: "https://flagpedia.net/data/flags/w580/pl.png" },
        { name: "Czech Republic", flag: "https://flagpedia.net/data/flags/w580/cz.png" },
        { name: "Hungary", flag: "https://flagpedia.net/data/flags/w580/hu.png" },
        { name: "Ireland", flag: "https://flagpedia.net/data/flags/w580/ie.png" },
        { name: "Slovakia", flag: "https://flagpedia.net/data/flags/w580/sk.png" }
    ];
    return (
        <div className='container'>
            <div className='row'>
                <Europe countries={countries} />
            </div>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);