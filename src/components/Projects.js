import React, { Component } from 'react';


	export default class About extends Component {
	  render(){
	    return(
	      <div>
					<div className="project-wrapper">
		        <h1>What I've Been Up To.</h1>
						<h3>Here's a selection of some recent work. For more up to the minute work you can visit me on <a href="https://github.com/Jaredp75">Github</a>.</h3>
		      </div>


					<div className="project-header-wrapper">
	            <div>
	               <img className="project-photo" src="https://jaredpattersonblog.files.wordpress.com/2018/04/screen-shot-2018-04-20-at-12-33-37-pm.png" alt ="MS Air Online"/>
	            </div>
	         <div className="project-text">
	            <h2>MS Air Online</h2>
	            <h3>MS Air Online website redesign using React and API implementation (Currently in progress)</h3>
	            <h3><a href="http://qa1.msaironline.com/" target ="_blank" rel="noopener noreferrer"><button className="button">See Project</button></a></h3>
	         </div>
          </div>





	        <div className="project-header-wrapper">
	            <div>
	               <img className="project-photo" src="https://jaredpattersonblog.files.wordpress.com/2017/11/etsy_screenshot.png" alt ="Etsy"/>
	            </div>
	         <div className="project-text">
	            <h2>Etsy</h2>
	            <h3>Etsy.com website using React and Etsy APIs</h3>
	            <h3><a href="https://tiy-durham-etsy-project.github.io/Etsy-group-project/" target ="_blank" rel="noopener noreferrer"><button className="button">See Project</button></a></h3>
	         </div>
          </div>
        <div>
            <div className="project-header-wrapper">
              <div>
                <img className="project-photo" src="https://jaredpattersonblog.files.wordpress.com/2017/11/tourify_screenshot.png" alt ="Tourify"/>
              </div>
            <div className="project-text">
                <h2>Tourify.city</h2>
                <h3>Tourify is an interactive tour experience built with React and Ruby on Rails</h3>
                <h3><a href="https://serene-brushlands-14696.herokuapp.com/" target ="_blank" rel="noopener noreferrer"><button className="button">See Project</button></a></h3>
            </div>
	          </div>
	      </div>

      <div>
        <div className="project-header-wrapper">
          <div>
            <img className="project-photo" src="https://jaredpattersonblog.files.wordpress.com/2017/11/intune_screenshot.png" alt ="InTune"/>
          </div>
          <div className="project-text">
            <h2>InTune (iTunes Music Search)</h2>
            <h3>Music search web app accessing the iTunes database through Apple Music APIs</h3>
            <h3><a href="https://jaredp75.github.io/itunes_music_search/" target ="_blank" rel="noopener noreferrer"><button className="button">See Project</button></a></h3>
          </div>
        </div>
      </div>
      <div>
        <div className="project-header-wrapper">
          <div>
            <img className="project-photo" src="https://jaredpattersonblog.files.wordpress.com/2017/11/question-box_screenshot.png" alt ="Question Box"/>
          </div>
          <div className="project-text">
            <h2>Question Box</h2>
            <h3>Question and answer platform with React front-end and Ruby on Rails API. Allows users to sign up or login, ask questions, and receive answers</h3>
            <h3><a href="https://the-underflowers.github.io/underflowers-react/" target ="_blank" rel="noopener noreferrer"><button className="button">See Project</button></a></h3>
          </div>

        </div>
      </div>





    </div>
	  )
	}
	}
