import React from 'react'
import Visionhelper from '../vision-helper.jpg'
import ReactWebsite from '../react-website.jpg'
import StudentTalk from '../student-talk.jpg'
import Imgcap from '../img-captuer.jpg';
import Todo from '../todo.jpg';
import CakeMakeimg from '../cake-make-img.jpg'
import TrafficMgmt from '../traffic-mgmt.jpg'
import Practice from '../practice-web.jpg'
//Importing react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
    return (
        <section id='projects_' className="project-area">
            <div className="container">
                <div className="project-title pb5">
                    <h1 className="title-h1">
                        <b>My Recently done Projects</b>
                    </h1>
                </div>
                <div className='wrapper text-center'>
                    <div className="btn-group row" role="group">
                        <button type="button" id="btn-all" data-filter="*" className="active col-sm">All</button>
                        <button type="button" data-filter=".ongoing" className=" col-sm">Ongoing</button>                        
                        <button type="button" data-filter=".latest" className=" col-sm">Latest</button>
                        <button type="button" data-filter=".popular" className=" col-sm">Popular</button> 
                        <button type="button" data-filter=".previous" className=" col-sm">Previous</button>
                    </div>
                </div>
                
                <div className="row grid">
                    
                    <div className="col-lg-4 col-md-6 col-sm-12 element-item ongoing">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Visionhelper} >
                                    <img src={Visionhelper} alt="projects-show1"/>
                                </a>  
                                <div className="col btn-link">
                                  <a href="#projects_" ><button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                  <a href="#projects_" ><button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div>     
                            </div>
                            <div className="title py-4"> 
                                <h4>Vision-Helper</h4>
                                <span className="text-secondary">Ongoing for 28 months</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={ReactWebsite} >
                                    <img src={ReactWebsite} alt="projects-show1"/>
                                </a>
                                <div className="col btn-link">
                                  <a href="https://github.com/RadientBrain/MERN-STACK-Login-System" target="_blank" rel="noopener noreferrer"><button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                  <a href="https://github.com/RadientBrain/MERN-STACK-Login-System" target="_blank" rel="noopener noreferrer"><button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div>     
                            </div>
                            <div className="title py-4"> 
                                <h4>MERN Stack Login-Register-ForgotPassword-Logout Website</h4>
                                <span className="text-secondary">Latest</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12 element-item latest">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={ReactWebsite} >
                                    <img src={ReactWebsite} alt="projects-show1"/>
                                </a>  
                                <div className="col btn-link">
                                  <a href="https://github.com/RadientBrain/latest-portfolio" target="_blank" rel="noopener noreferrer"><button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                  <a href="https://radientbrain.github.io/latest-portfolio/" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div>     
                            </div>
                            <div className="title py-4"> 
                                <h4>React Portfolio Website</h4>
                                <span className="text-secondary">Latest</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 element-item popular previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={StudentTalk} >
                                    <img src={StudentTalk} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                   <a href="https://github.com/RadientBrain/StudentTalk-Website" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                   <a href="https://radientbrain.github.io/StudentTalk-Website/" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>StudentTalk Website</h4>
                                <span className="text-secondary">Previous,Popular</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 col-sm-12 element-item popular previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Todo} >
                                    <img src={Todo} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                   <a href="https://github.com/RadientBrain/To-Do-Tasks" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                   <a href="https://apkpure.com/to-do-tasks-hassle-free-task-saver/radient.brain.taskmanagementapp" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>To-Do Tasks App</h4>
                                <span className="text-secondary">Previous,Popular</span>
                            </div>
                        </div>
                    </div>
                        


                    <div className="col-lg-4 col-md-6 col-sm-12 element-item previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Imgcap} >
                                    <img src={Imgcap} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                   <a href="https://github.com/RadientBrain/ImageCapture" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                   <a href="https://apkpure.com/image-capture/com.myimage.imagecapture" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Image Capture App</h4>
                                <span className="text-secondary">Previous</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 element-item previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={CakeMakeimg} >
                                    <img src={CakeMakeimg} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                   <a href="https://github.com/RadientBrain/CakeMake" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                   <a href="https://radientbrain.github.io/CakeMake/" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Cake Make Website</h4>
                                <span className="text-secondary">Previous</span>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-4 col-md-6 col-sm-12 element-item previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={Practice} >
                                    <img src={Practice} alt="projects-show3"/>
                                </a>  
                                <div className="col btn-link">
                                   <a href="https://github.com/RadientBrain/brain_intro" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faGithub} /></button></a>
                                   <a href="https://radientbrain.github.io/brain_intro/" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Practice Website</h4>
                                <span className="text-secondary">Previous</span>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4 col-md-6 col-sm-12 element-item previous">
                        <div className="our-project">
                            <div className="project-img">
                                <a className="test-popup-link" href={TrafficMgmt} >
                                    <img src={TrafficMgmt} alt="projects-show2"/>
                                </a>
                                <div className="col btn-link">
                                <a href="https://github.com/RadientBrain/2nd-Year-College-project" target="_blank" rel="noopener noreferrer"><button type="button" className="primary row-sm-12"> <FontAwesomeIcon icon={faGithub} /></button></a>
                                <a href="https://github.com/RadientBrain/2nd-Year-College-project" target="_blank" rel="noopener noreferrer"> <button type="button" className="primary row-sm-12"><FontAwesomeIcon icon={faLink} /></button></a>
                                </div> 
                            </div>
                            <div className="title py-4"> 
                                <h4>Traffic Management System</h4>
                                <span className="text-secondary">Previous</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects
