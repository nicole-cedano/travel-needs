import React, { Component } from 'react';
import Flights from './Flights'
import Food from './Food'
import Crime from './Crime'
import Currency from './Currency'

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
            toggle: !prevState.toggle
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
                            placeholder="Desired destination"
                            name='destination'
                            autoComplete='off'
                            autoCapitalize='on'
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