import React, { Component } from 'react'

//import { loadPlaces } from '../utils.js'

class FilterWindow extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div id="filter-window">
                <div className="search">
                    {/*use form/aria role or label instead of placeholder */}
                    <input type="search" placeholder="Filter bars..." value={this.props.query} onChange={(e) => {
                        this.props.filterPlaces(e.target.value)
                    } }/>
                </div>
                    <section>
                        <h2>Bars</h2>
                        <div className="places">
                            <ol className ="places-list">

                                <li className="place-info" >Test</li>
                            </ol>
                        </div>
                    </section>

                
            </div>
        )
    }

}

export default FilterWindow;