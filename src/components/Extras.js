import React from 'react'
import hacking from '../hacking1.jpg'
import alien_mars from '../alien-mars.jpg'
import magic_castle from '../magic-castle.jpg'

function Extras() {
    return (
        <section id='extras_' className="extras-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <b><h1 className="extras-title">Our Happy Customers</h1></b>
                        <p className="extras-para">
                        Strongly advised place for renting camera for all people.
                        </p>
                    </div>
                </div>

            

                <div className="card-deck">
                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={hacking} alt="hacking-card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Banda Sandeep</h5><hr/>
                        <p className="card-text extras-para">I wanted to shoot for my product portfolio that just required 5-10 product images and couldn’t buy a whole camera for that. So, a friend suggested this place where I got professional DSLR’s so easily and cheaply.</p>
                        </div>
                    </div>

                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={alien_mars} alt="alien-card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Samala Harish</h5><hr/>
                        <p className="card-text extras-para">Sometimes for a startup, it's important to optimize the cost. We are into the jewelry business and we wanted to do a product shoot but we were unsure of the lights, camera, background, etc. Then came this place to our rescue. They gave us valuable knowledge & helped us to complete the shoot properly and the outcome was awesome.</p>
                        </div>
                    </div>

                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={magic_castle} alt="magic-castle card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Khasha Pavan</h5><hr/>
                        <p className="card-text extras-para">It is the best place to rent for beginner and professional photographers. The prices are really affordable and the service is really appreciating. I had a wonderful experience of taking products on rent.</p>
                        </div>
                    </div>
                    <div className="card">
                    <div className="embed-responsive embed-responsive-16by9">
                        <img className="card-img-top embed-responsive-item" src={magic_castle} alt="magic-castle card"/>
                    </div>
                        <div className="card-body">
                        <h5 className="card-title extras-card-title">Jogu Bhanu</h5><hr/>
                        <p className="card-text extras-para">Extremely professional & helpful place with all kinds of photography equipment like camera, lenses, tripods, filters with complete range for rent at a very affordable price. The procedure for renting equipment is very quick and the staff is really cooperating.</p>
                        </div>
                    </div>
                </div>
                



            </div>
        </section>
    )
}

export default Extras
