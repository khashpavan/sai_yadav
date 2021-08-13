import React from 'react'
import nptel from '../nptel.png'
import gcp from '../google-cloud-platform.svg'
import trophy from '../trophy.svg'
import swim from '../swimming.svg'
import jpmorgan from '../jp-morgan1.jpg'

function Achievements() {
    return (
    <section id='achievements_' className="achievements-area">
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-12">
                    <div className="achievements-title">
                        <h2 ><b>My Achievements</b></h2>
                        <p className="achieve-para">
                            These are some of my recent achievements which I think you should know :)
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid carousel py-5">
        <div className="owl-carousel owl-theme">
            <div className="achievement row">
                <div className="col-lg-4 col-md-12 col-sm-12 achieve-img">
                    <img src={nptel} alt="nptel logo" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 about-achieve">
                    <h4>NPTEL Discipline Star</h4>
                    <p className="achieve-para">
                        I was awarded as NPTEL Discipline Star in December 2019 by NPTEL for my dedication towards the study
                    </p>
                </div>
            </div>

            <div className="achievement row">
                <div className="col-lg-4 col-md-12 col-sm-12 achieve-img">
                    <img src={gcp} alt="gcp logo" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 about-achieve">
                    <h4>GCP 30 days challenge</h4>
                    <p className="achieve-para">
                        Completed Google Cloud Platform 30 days challenges and learned various insights in October 2020
                    </p>
                </div>
            </div>

            <div className="achievement row">
                <div className="col-lg-4 col-md-12 col-sm-12 achieve-img">
                    <img src={trophy} alt="trophy icon" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 about-achieve">
                    <h4>2nd Rank Holder</h4>
                    <p className="achieve-para">
                    Secured 2nd Rank in Codacharya 2020 (Annual Coding Competition of IIIT Kalyani) and got some cash prize for it :)
                    </p>
                </div>
            </div>
            <div className="achievement row">
                <div className="col-lg-4 col-md-12 col-sm-12 achieve-img">
                    <img src={swim} alt="swim icon" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 about-achieve">
                    <h4>Founding Secretary</h4>
                    <p className="achieve-para">
                    I am the Founding Secretary of Swimming Club at IIIT Kalyani via Election Poll and this club was founded in 2019.
                    </p>
                </div>
            </div>
            <div className="achievement row">
                <div className="col-lg-4 col-md-12 col-sm-12 achieve-img">
                    <img src={jpmorgan} alt="jpmorgan icon" className="img-fluid"/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 about-achieve">
                    <h4>JPMorgan Chase &amp; Co</h4>
                    <p className="achieve-para">
                    Participated in the open access JPMorgan Chase &amp; Co. Virtual Experience Program with Forage
                    </p>
                </div>
            </div>

        </div>
        </div>

    </section>
    );
}

export default Achievements
