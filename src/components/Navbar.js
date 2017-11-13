import React, { Component } from 'react';
	import { Link } from 'react-router-dom';


	export default class Navbar extends Component {
	  render(){
	    return(
	      <div>
	        <nav>
	          <p><Link to="/about">ABOUT ME</Link></p>
	          <p><Link to="/projects">MY WORK</Link></p>
	          <p><Link to="/contact">CONTACT</Link></p>
	        </nav>
	        {this.props.children}
	        <footer>
	          <div className="icons-wrapper">
	            <a href="https://github.com/jaredp75" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x" aria-hidden="true"></i> </a>
	            <a href="https://www.linkedin.com/in/jaredlpatterson/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i> </a>
	          </div>
	        </footer>
	      </div>
	    )
	  }
	}
