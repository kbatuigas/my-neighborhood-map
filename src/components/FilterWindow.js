import React, { Component } from 'react'

//import { loadPlaces } from '../utils.js'

class FilterWindow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div id="filter-window">
                <div className="search">
                    {/*use form/aria role or label instead of placeholder */}
                    <input type="search" placeholder="Filter bars..." value={this.props.query} onChange={(e) => {
                        //console.log(this.props);
                        this.props.filterplaces(e.target.value)
                    } }/>
                </div>
                    <section>
                        <div className="places">
                            <ol className ="places-list">
                                {/*Important! Props need to have been passed down - not including this.props.placelist
                                    will cause entire app to not render at all */ }
                                { this.props.placelist && this.props.placelist.length > 0 && this.props.placelist.map((place, index) => (
                                    <li key={index} className="place-item" >{place.name}</li>
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