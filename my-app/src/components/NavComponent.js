import {Link} from 'react-router-dom';
import React from 'react';

import './NavComponent.css';

import Logo from '../product_images/logo.png';


var NavComponent = React.createClass({
	render: function() {
		return (
			<div>
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to='/' className="homePage"><img src={Logo} alt="Company Logo" /></Link>
						<Link to='/products/kits' className="kitsPage">Kits</Link>
						<Link to="/products/tanks" className="tanksPage">Tanks</Link>
						<Link to="/products/coils" className="coilsPage">Coils</Link>
						<Link to="/products/eliquids" className="eLiquidsPage">E-Liquids</Link>
						<Link to="/products/batteries" className="batteriesPage">Batteries</Link>
						<form action="./results.php" method="get" className="form-inline">
							<input className="form-control mr-sm-2" type="search" name="input" placeholder="Search Products" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
						<Link to="/basket" className="basketPage">Basket</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars" onClick={this.linksToggle}></i>
						<div className="narrowLinks">
							<Link to='/' className="homePage" onClick={this.linksToggle}><img src={Logo} alt="Company Logo" /></Link>
							<form action="./results.php" method="get">
								<input className="narrowSearchBox" type="text" name="input" placeholder="Search" />

								<input type="submit" value="Search" />
							</form>
							<Link to='/products/kits' className="kitsPage" onClick={this.linksToggle}>Kits</Link>
							<Link to="/products/tanks" className="tanksPage" onClick={this.linksToggle}>Tanks</Link>
							<Link to="/products/coils" className="coilsPage" onClick={this.linksToggle}>Coils</Link>
							<Link to="/products/eliquids" className="eLiquidsPage" onClick={this.linksToggle}>E-Liquids</Link>
							<Link to="/products/batteries" className="batteriesPage" onClick={this.linksToggle}>Batteries</Link>
							<Link to="/basket" className="basketPage">Basket</Link>
						</div>
				</div>
			</nav>
			</div>
		);
	},
	linksToggle: function() {
			var linksEl = document.querySelector('.narrowLinks');
			if (linksEl.style.display === 'block') {
				linksEl.style.display = 'none';
			} else {
				linksEl.style.display = 'block';
			}
	}
});

export default NavComponent;