import {Link} from 'react-router-dom';
import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';

import Logo from '../product_images/logo.png';


class NavComponent extends React.Component{
    searchEnterWide(e) { //e represents the 'event'
        if (e.keycode === 13 || e.which === 13) {
			var inputValue = document.getElementById("wideSearchBox").value;
			document.getElementById("wideSearchBox").value = "";
			this.props.push("/searchresults/"+inputValue); //push new url to history (navigates page to new url)
        }
	}
    searchEnterNarrow(e) { 
        if (e.keycode === 13 || e.which === 13) {
			var inputValue = document.getElementById("narrowSearchBox").value;
			document.getElementById("narrowSearchBox").value = "";
			this.props.push("/searchresults/"+inputValue);
			this.linksToggle();
        }
    }
	render() {
		return (
			<div>
			<nav>
				<div className="navWide">
					<Link to='/' className="homePage"><img src={Logo} alt="Company Logo" /></Link>
					<Link to='/products/kits' className="kitsPage">Kits</Link>
					<Link to="/products/tanks" className="tanksPage">Tanks</Link>
					<Link to="/products/coils" className="coilsPage">Coils</Link>
					<Link to="/products/eliquids" className="eLiquidsPage">E-Liquids</Link>
					<Link to="/products/batteries" className="batteriesPage">Batteries</Link>
					<input className="form-control mr-sm-2" id="wideSearchBox" onKeyDown={(key) => this.searchEnterWide(key)} type="search" name="input" placeholder="Search Products" aria-label="Search"/> {/*'key' in the onKeyDown function represents the key press event (could have used any word)*/}
					<Link to="/basket" className="basketPage">Basket</Link>
				</div>
				<div className="navNarrow">
					<Link to='/' className="homePage"><img src={Logo} alt="Company Logo" /></Link>
					<i className="fa fa-bars" onClick={this.linksToggle}></i>
					<div className="narrowLinks">
						<input className="form-control mr-sm-2" id="narrowSearchBox" onKeyDown={(key) => this.searchEnterNarrow(key)} type="search" name="input" placeholder="Search Products" aria-label="Search"/> {/*'key' in the onKeyDown function represents the key press event (could have used any word)*/}
						<Link to='/products/kits' className="kitsPage" onClick={this.linksToggle}>Kits</Link>
						<Link to="/products/tanks" className="tanksPage" onClick={this.linksToggle}>Tanks</Link>
						<Link to="/products/coils" className="coilsPage" onClick={this.linksToggle}>Coils</Link>
						<Link to="/products/eliquids" className="eLiquidsPage" onClick={this.linksToggle}>E-Liquids</Link>
						<Link to="/products/batteries" className="batteriesPage" onClick={this.linksToggle}>Batteries</Link>
						<Link to="/basket" className="basketPage" onClick={this.linksToggle}>Basket</Link>
					</div>
				</div>
			</nav>
			</div>
		);
	}
	linksToggle() {
			var linksEl = document.querySelector('.narrowLinks');
			if (linksEl.style.display === 'block') {
				linksEl.style.display = 'none';
			} else {
				linksEl.style.display = 'block';
			}
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({push: push}, dispatch); //push is the action creator that allows us to programmitcally change the history in the store (state)
}

export const NavComponentContainer = connect(null, mapDispatchToProps)(NavComponent); //null placed in usual position of mapStateToProps argument as this is a needed declaration by the connect function, if mapStateToProps is not going to be used (see react-redux documentation). The NavComponent does not need access to the store and this is the reason for not using mapStateToProps