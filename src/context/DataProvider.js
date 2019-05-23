import React, { Component } from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            currencyCode: '',
            currencyExchange: [],
            data: [], 
            currency: [],
            language: [],


        }
    }

    getCountries = (destination) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${destination}`).then(res => {
            console.log(res.data)
            this.setState({
                data: res.data[0],
                currency: res.data[0].currencies[0],
                language: res.data[0].languages[0],
                currencyCode: res.data[0].currencies[0].code
            })
        })
    }
    getCurrency = () => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${this.state.currencyCode}`).then(res => {
            console.log(res.data.rates)
            this.setState({
                currencyExchange: Math.floor(res.data.rates[this.state.currencyCode])
            })
            console.log(this.state.currencyExchange)
        })
            .catch(err => console.log(err))
    }


    render() {
        return (
            <DataContext.Provider value={{
                ...this.state,
                getCurrency: this.getCurrency,
                getCountries: this.getCountries,


            }}>
                {this.props.children}

            </DataContext.Provider>
        )
    }
}

export const withData = C => props => (
    <DataContext.Consumer>
        {value => <C {...props} {...value} />}
    </DataContext.Consumer>
)

export default DataProvider