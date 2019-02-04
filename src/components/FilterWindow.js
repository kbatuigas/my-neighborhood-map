import React, { Component } from 'react'

//import { loadPlaces } from '../utils.js'

class FilterWindow extends Component {
    constructor(props) {
        super(props);
    }

    /*componentDidMount() {
        //console.log(this.props);
    }
    */

    render() {
        return (
            <div id="filter-window">
                <div className="search">
                    <label for="place-search">Search Bars: </label>
                    <input type="search" id="place-search" value={this.props.query} onChange={(e) => {
                        this.props.filterplaces(e.target.value)
                    } }/>
                </div>
                    <section>
                        <div className="places">
                            <ol className ="places-list">
                                {/*Important! Props need to have been passed down - not including this.props.placelist
                                    will cause entire app to not render at all */ }
                                { this.props.placelist && this.props.placelist.length > 0 && this.props.placelist.map((place, index) => (
                                    <li key={index} className="place-item">
                                    <button type="button" onClick={() => {
                                        this.props.placelistclick(place);
                                    }}>
                                        <p className="place-name">{place.name}</p>
                                        <p className="place-address">{place.location.address}, {place.location.city}, {place.location.state} {place.location.postalCode}</p> 
                                    </button>
                                    </li>
                                ))
                                }
                            </ol>
                            
                        </div>
                    </section>

                
            </div>
        )
    }

}

export default FilterWindow;