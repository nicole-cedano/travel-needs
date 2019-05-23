import React, { Component } from 'react';

class CountryInfo extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(props) {
        // const [name,population,flag,region,language] = this.props
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.capital}</h3>
                <h3>{this.props.population}</h3>
                <h3>{this.props.currency}</h3>
                <h3>{this.props.language}</h3>
                <h3>{this.props.region}</h3>
                <img src={this.props.flag}/>
            </div>
        );
    }
}

export default CountryInfo;