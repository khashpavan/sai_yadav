import React from 'react'
import study from '../study.svg'

function About() {
    return (
        <section className="about-me" id='about_'>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12"> <img src={study} alt="About-me" className="img-fluid"/> </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="pt-5">
                            <span>About </span>
                            <span>Me</span>
                        </h2>
                        <div className="paragraph py-4 w75">
                            <p className="about-para">
                            I am currently pursuing my B.Tech in Computer Science and Engineering. 
                            </p>
                            <p className="about-para">
                                I like coding in Python but am comfortable with many languages like C++, Java, C#, etc.
                                I have experience with the Deep Learning, App and Web Development.
                            </p>
                            <div className="about-contact col-lg-2 col-sm-6">
                            <div className="row-lg-2 row-sm-6">
                            <b>Like Me?</b>
                            </div>
                           <div className="row-lg-2 row-sm-6">
                               
                            <a href="#contact_" className="btn-resume-download-link">Contact</a>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
    )
}

export default About
