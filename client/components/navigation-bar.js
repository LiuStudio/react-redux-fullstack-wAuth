import React from 'react';
import { Link } from 'react-router';

 export default () => {
 	return(
 		<nav className="navbar navbar-default">
 			<div className="contianer-fluid">
 				<div className="navbar-header">
 					<Link to="/" className="navbar-brand"> Red Dice </Link>
 				</div>

 				<div className="collapse navbar-collapse">
 					<ul className="nav navbar-nav nabvar-right">
 						<li><Link to="/signup"> Sign up </Link> </li>
 					</ul>
 				</div>
 			</div>
 		</nav>
 	);
 }