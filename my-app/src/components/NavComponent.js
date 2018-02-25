import {Link} from 'react-router-dom';
import React from 'react';
import './NavComponent.css';


var NavComponent = React.createClass({
	render: function() {
		return (
			<div>
			<nav>
				<div className="navWide">
					<div className="wideDiv">
						<Link to='/' className="homePage">Home</Link>
						<Link to='/products/kits' className="kitsPage">Kits</Link>
						<Link to="/products/tanks" className="tanksPage">Tanks</Link>
						<Link to="/products/coils" className="coilsPage">Coils</Link>
						<Link to="/products/eliquids" className="eLiquidsPage">E-Liquids</Link>
						<Link to="/products/batteries" className="batteriesPage">Batteries</Link>
						<form action="./results.php" method="get">
							<input className="wideSearchBox" type="text" name="input" placeholder="Search Products" />
							<input type="submit" value="Search" />
						</form>
						<Link to="/basket" className="basketPage">Basket</Link>
						<Link to="" className="loginPage">Login</Link>
					</div>
				</div>
				<div className="navNarrow">
					<i className="fa fa-bars" onClick={this.burgerToggle}></i>
						<div className="narrowLinks">
							<form action="./results.php" method="get">
								<input className="narrowSearchBox" type="text" name="input" placeholder="Search" />

								<input type="submit" value="Search" />
							</form>
							<Link to='/' className="homePage" onClick={this.burgerToggle}>Home</Link>
							<Link to='/products/kits' className="kitsPage" onClick={this.burgerToggle}>Kits</Link>
							<Link to="/products/tanks" className="tanksPage" onClick={this.burgerToggle}>Tanks</Link>
							<Link to="/products/coils" className="coilsPage" onClick={this.burgerToggle}>Coils</Link>
							<Link to="/products/eliquids" className="eLiquidsPage" onClick={this.burgerToggle}>E-Liquids</Link>
							<Link to="/products/batteries" className="batteriesPage" onClick={this.burgerToggle}>Batteries</Link>
						</div>
				</div>
			</nav>
			</div>
		);
	},
	burgerToggle: function() {
			var linksEl = document.querySelector('.narrowLinks');
			if (linksEl.style.display === 'block') {
				linksEl.style.display = 'none';
			} else {
				linksEl.style.display = 'block';
			}
	}
});

export default NavComponent;