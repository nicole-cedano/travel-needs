import React, { Component } from 'react';
import { withData } from '../../context/DataProvider';


class Currency extends Component {
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.getCurrency()
        console.log(this.currencyExchange)
    }
    render() {
        return (
            <div>
                <h1>Currency</h1>
                <button onClick={this.handleSubmit}>Get {this.props.currencyCode} Currency</button>
                <h3>{this.props.currency.symbol}{this.props.currencyExchange} {this.props.currency.name}</h3>
            </div>
        );
    }
}

export default withData(Currency);