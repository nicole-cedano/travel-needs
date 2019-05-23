import React, { Component } from 'react';
import Flights from '../flights/Flights'
import Food from '../food/Food'
import Crime from '../crime/Crime'
import Currency from '../currency/Currency'
import CountryInfo from '../countryInfo/CountryInfo'
import "./Home.css"
import {withData} from '../../context/DataProvider.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            destination: "",
            toggle: true
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            toggle: false
          }))
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({              //not sure if we should clear search field after searching
            destination: ""
        })
        this.props.getCountries(this.state.destination)
        this.toggler()
    }

    render() {
        return (
            <>
                {this.state.toggle ? 
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "6vw" }}>WELCOME</h1>
                    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates maxime optio ipsum!</h2>
                    <form className="dest" onSubmit={this.handleSubmit}>
                        <input
                            className='searchField' type="text"
                            placeholder="Desired country"
                            name='destination'
                            autoComplete='off'
                            autoCapitalize='sentence'
                            onChange={this.handleChange}
                            value={this.state.destination}
                            autoFocus
                            required
                        />
                        <input className='searchBtn' type="submit" value="Submit" />
                    </form>
                </div>
            :
            <>
                <div style={{ textAlign: "center" }}>
                    <form className="dest" onSubmit={this.handleSubmit}>
                        <input
                            className='searchField' type="text"
                            placeholder="Desired destination"
                            name='destination'
                            autoComplete='off'
                            autoCapitalize='sentence'
                            onChange={this.handleChange}
                            value={this.state.destination}
                            autoFocus
                            required
                        />
                        <input className='searchBtn' type="submit" value="Submit" />
                    </form>
                </div>
                <div style={{textAlign:"center"}}>
                    <Flights/>
                    <CountryInfo 
                        name={this.props.data.name}
                        population={this.props.data.population}
                        language={this.props.language.name}
                        region={this.props.data.region}
                        flag={this.props.data.flag}
                        capital={this.props.data.capital}
                        currency={this.props.currency.name}
                    />
                    <Crime/>
                    <Food/>
                    <Currency/>
                </div>
            </>
            }
            </>
        );
    }
}

export default withData(Home);