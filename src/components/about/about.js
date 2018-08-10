import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
              <section id="about">
                <div className="row">
                  <div className="three columns">
                    <img className="profile-pic" src="images/alvaro.jpg" alt="alvaro"/>
                  </div>
                  <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>{resumeData.aboutme}.</p>
                    <div className="row">
                      <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                          <span>{resumeData.line1}</span><br />
                          <span>{resumeData.line2}</span><br />
                          <span>{resumeData.line3}</span><br />
                          <span>Postal Code: {resumeData.line4}</span><br />
                          <span>{resumeData.line5}</span>
                        </p>
                      </div>
                      <div className="columns download">
                        {/*<p>
                          <a href={pdf} className="button"><i className="fa fa-download" />Download Resume</a>
                        </p>*/}
                      </div>
                    </div> {/* end row */}
                  </div> {/* end .main-col */}
                </div>
              </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}