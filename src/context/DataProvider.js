import React, { Component } from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            currencyCode: '',
            currencyExchange: ''

        }
    }

    getCurrency = () => {
        axios.get(`https://api.exchangeratesapi.io/latest?base=USD&symbols=${this.state.currencyCode}`).then(res => {
            console.log(res)
            this.setState({
                currencyExchange: res.data.rates
            })
        })
        .catch(err => () => location.reload, console.log(err))
    }


    render() {
        return (
            <DataContext.Provider value={{}}>
                {this.props.children}

            </DataContext.Provider>
        )
    }
}

export const withData = C => props => (
    <ParkingContext.Consumer>
        {value => <C {...props} {...value} />}
    </ParkingContext.Consumer>
)

export default DataProvider