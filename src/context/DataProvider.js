import React, { Component } from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            currencyCode: '',
            currencyExchange: '',
            data: [], 
            currency: [],
            language: []
        }
    }

    getCurrency = () => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${this.state.currencyCode}`).then(res => {
            console.log(res)
            this.setState({
                currencyExchange: res.data.rates
            })
        })
        .catch(function (error) {
            window.location.reload()
        });
    }

    getCountries = (destination) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${destination}`).then(res=>{
            console.log(res.data)
            this.setState({
                data: res.data[0],
                currency: res.data[0].currencies[0],
                language: res.data[0].languages[0]
            })
        })
    }

    render() {
        return (
            <DataContext.Provider value={{
                getCountries: this.getCountries,
                getCurrency: this.getCurrency,
                ...this.state
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