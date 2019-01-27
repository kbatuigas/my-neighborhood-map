import React from 'react'

//import { loadPlaces } from '../utils.js'

class FilterWindow extends React.Component {
    constructor(props) {
        super(props);    
        
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="filter-window">
                <input placeholder="Filter places..." onChange={(e) => {
                    
                }} />
                    <section>
                        <h2>Places</h2>
                        <ol className = 'places-list'>
                        </ol>
                    </section>

                
            </div>
        )
    }

}



export default FilterWindow;