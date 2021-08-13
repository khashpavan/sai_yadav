import React from 'react';
import Typed from 'react-typed';
import profilePic from '../profile.png'

const Header = () => {
    return (
    <section id='home_' className="header">
            
        <div className="header-wrapper">
            <div className="main-info">
                    <img className="profile-pic" src={profilePic} alt="profile-pic"/>
                <b>
                    <h1>
                        Sai_Yadav "Camera Rentals"
                    </h1>

                    <Typed
                    
                    className="typed-text"
                    strings={[	"We become what we think about...", 
                    "Always shoot from the shadow side...", 
                    "The camera sees more than the eye, so why not make use of it?", 
                    "Do it with passion or not at all..",
                    "Everything has beauty, but not everyone can see..."]}
                    typeSpeed={60}
                    backSpeed={60}
                    loop
                    />
                </b>

                {/* <a href="https://github.com/RadientBrain/Public_Resume/raw/main/PersonalResume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume-download-link">  Resume </a> */}
            </div>
        </div>
    </section>
    )
}

export default Header
