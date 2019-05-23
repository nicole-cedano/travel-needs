import React, { Component } from 'react';
import axios from 'axios'
import Flights from '../flights/Flights'
import Food from '../food/Food'
import Crime from '../crime/Crime'
import Currency from '../currency/Currency'
import CountryInfo from '../countryInfo/CountryInfo'
import "./Home.css"

class Home extends Component {
    constructor() {
        super()
        this.state = {
            destination: "",
            toggle: true,
            data: [], 
            currency: [],
            language: []
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
        // this.setState({              //not sure if we should clear search field after searching
        //     destination: ""
        // })
        axios.get(`https://restcountries.eu/rest/v2/name/${this.state.destination}`).then(res=>{
            this.setState({
                data: res.data[0],
                currency: res.data[0].currencies[0],
                language: res.data[0].languages[0]
            })
        })
        this.toggler()
    }

    render() {
        console.log(this.state.data)
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
                <h1>{this.state.data.region}</h1>
                    <Flights/>
                    <CountryInfo 
                        name={this.state.data.name}
                        population={this.state.data.population}
                        language={this.state.language.name}
                        region={this.state.data.region}
                        flag={this.state.data.flag}
                        capital={this.state.data.capital}
                        currency={this.state.currency.name}
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

export default Home;