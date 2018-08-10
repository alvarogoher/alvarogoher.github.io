import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

		      	<div class="myDiv">

		      {/* Resume Section
		   ================================================== */}
		      <section id="resume">
		        {/* Education
		      ----------------------------------------------- */}
		        <div className="row education">
		          <div className="three columns header-col">
		            <h1><span>Education</span></h1>
		          </div>
		          <div className="nine columns main-col">

		            <div className="row item">
		              <div className="twelve columns">
		                <h3>{resumeData.master1title}</h3>
		                <p className="info">{resumeData.master1}<span>•</span> <em className="date">{resumeData.master1date}</em></p>
		                <p>
		                  {resumeData.master1msg}
		                </p>
		              </div>
		            </div> {/* item end */}

		           	<div className="row item">
		              <div className="twelve columns">
		                <h3>{resumeData.master1title}</h3>
		                <p className="info">{resumeData.master2}<span>•</span> <em className="date">{resumeData.master2date}</em></p>
		                <p>
		                  {resumeData.master2msg}
		                </p>
		              </div>
		            </div> {/* item end */}

		            <div className="row item">
		              <div className="twelve columns">
		                <h3>{resumeData.master3title}</h3>
		                <p className="info">{resumeData.master3}<span>•</span> <em className="date">{resumeData.master3date}</em></p>
		                <p>
		                  {resumeData.master3msg}
		                </p>
		              </div>
		            </div> {/* item end */}
		          </div> {/* main-col end */}
		        </div> {/* End Education */}






		        {/* Skills
		      ----------------------------------------------- */}
		        <div className="row skill">
		          <div className="three columns header-col">
		            <h1><span>Skills</span></h1>
		          </div>
		          <div className="nine columns main-col">
		            <p> Back-End, Front-End, Data Managment, CMSs, git...
		            </p>
		            <div className="bars">
		              <ul className="skills">
		                <li><span className="bar-expand photoshop" /><em>.NET</em></li>
		                <li><span className="bar-expand illustrator" /><em>C#</em></li>
		                <li><span className="bar-expand wordpress" /><em>React.js</em></li>
		                <li><span className="bar-expand css" /><em>Java</em></li>
		                <li><span className="bar-expand html5" /><em>HTML5</em></li>
		                <li><span className="bar-expand jquery" /><em>Node.js</em></li>
		                <li><span className="bar-expand photoshop" /><em>MySQL</em></li>
		              </ul>
		            </div>{/* end skill-bars */}
		          </div> {/* main-col end */}
		        </div> {/* End skills */}
		      </section> {/* Resume Section End*/}
		       	</div>

      </React.Fragment>
    );
  }
}