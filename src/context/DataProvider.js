import React, {Component} from 'react'
import axios from 'axios'

const DataContext = React.createContext()

class DataProvider extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    

    render(){
        return(
            <DataContext.Provider value={{}}>
                {this.props.children}

            </DataContext.Provider>
        )
    }
}

export const withData = C => props => (
    <ParkingContext.Consumer>
        {value => <C {...props} {...value}/>}
    </ParkingContext.Consumer>
)

export default DataProvider