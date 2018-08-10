import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>

        {/* Testimonials Section
     ================================================== */}
        <section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>Website without visitors is like a ship lost in the horizon.
                        </p>
                        <cite>Dr. Christopher Dayagdag</cite>
                      </blockquote>
                                          </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>The biggest risk is not taking any risk... In a world that changing really quickly, the only strategy that is guaranteed to fail is not taking risks.
                        </p>
                        <cite>Mark Zuckerberg</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working.
                        </p>
                        <cite>Elon Musk</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section> {/* Testimonials Section End*/}

      </React.Fragment>
    );
  }
}