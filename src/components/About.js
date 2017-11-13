import React, { Component } from 'react';


	export default class About extends Component {
	  render(){
	    return(
	      <div>
	        <div className="about-header-wrapper">
	          <div>
	            <img className="about-photo" src="https://jaredpattersonblog.files.wordpress.com/2017/11/jp_headshot.jpg" alt ="Jared Patterson"/>
	          </div>
	          <div className="about-text">
	            <h2>Jared Patterson</h2>
	            <h3>Hello, my name is Jared. I am a design-oriented front-end developer living in Durham, NC.</h3>
	            <h3>I’ve always been drawn to the overlap between design and development. I have a diverse set of skills, including HTML, CSS, Javascript, and React. I enjoy each aspect, and strive to build immersive web applications through carefully crafted code and user-centric design.</h3>
							<h3>When not coding, I enjoy digital and film photography, going to concerts, a friendly game of basketball, and spending time with my beautiful family.</h3>
							<h3><strong>Interested in working on a project together?</strong></h3>
							<a href="mailto:jaredheel75@gmail.com" target ="_blank" rel="noopener noreferrer"><button className="button">Email Me</button></a>
	        </div>
	      </div>
	    </div>
	  )
	}
	}
