import React from 'react';

import Filter from './Filter';

class FiltersLists extends React.Component {
    createBrandFilterList() {
        let i = 1;
        return this.props.brandFilters.map(filter => {
            i++
            return (
                <Filter
                    key={filter.brand+i+"brand"}
                    name={this.props.type + "brandFilter"} //so that each seperate group of radio buttons (filters) refer only to each other. (the name is shared within each group)
                    id={filter.brand}
                    onFilterClick={() => {this.props.brandFilterClick(filter)}} //action creator passed from parent container component
                    inuse={filter.inuse}
                />
            )
        })
    }
    createPriceRangeFilterList() {
        let i = 1;
        return this.props.priceRangeFilters.map(filter => {
            i++
            return (
                <Filter
                    key={filter.priceRange+i+"priceRange"}
                    name={this.props.type + "priceFilter"} 
                    id={filter.priceRange}
                    onFilterClick={() => {this.props.priceFilterClick(filter)}}
                    inuse={filter.inuse}
                />
            )
        })
    }
	filterDivExtenionToggle () {
            var filterDivExtension = document.querySelector('.filterDivExtension');
            var chevronUp = document.querySelector('#chevronUp');
            var chevronDown = document.querySelector('#chevronDown');
			if (filterDivExtension.style.display === 'block') {
                filterDivExtension.style.display = 'none';
                chevronUp.style.display = 'none';
                chevronDown.style.display = 'block';
			} else {
                filterDivExtension.style.display = 'block';
                chevronUp.style.display = 'block';
                chevronDown.style.display = 'none';
			}
    }
    render () {
        return (
            <div className="col-12">
                <div className= "filterDiv">
                    <div className="iconCrossbar">
                        <i id="chevronDown" className="fa fa-chevron-down" onClick={this.filterDivExtenionToggle}></i>
                        <i id="chevronUp" className="fa fa-chevron-up" onClick={this.filterDivExtenionToggle}></i>
                    </div>
                    <div className="filterDivExtension">
                        <div className="row">
                            <div className="filtersList col-md-5 col-11 mx-auto">
                                Filter by Brand:
                                <div>
                                    {this.createBrandFilterList()}
                                </div>
                            </div>
                            <div className="filtersList col-md-5 col-11 mx-auto">
                                Filter by Price Range:
                                <div>
                                    {this.createPriceRangeFilterList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FiltersLists;