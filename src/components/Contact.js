import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faTelegram} from "@fortawesome/free-brands-svg-icons"


function Contact() {
    return (
        <section id='contact_' className="contact-area">
            <div className="container-fluid contact">
                <div className="row">
                    <div className="col-12 text-center contact-title">
                        <h4><b>Get in Touch</b></h4>
                        {/* <p className="contact-para">Email:<a href="mailto: pavankalyankhasha@gmail.com" >pavankalyankhasha@gmail.com</a></p>
                        <p className="contact-para">Phone/Whatsapp:<a href="tel:+919014508402" >+91 9014508402</a></p> */}
                        <p className="contact-para">Email: pavankalyankhasha@gmail.com</p>
                        <p className="contact-para">Phone/Whatsapp: +91 9014508402</p>
                        <div className="social">
                            <a href="https://www.instagram.com/mr.silent__soul/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                            {/* <a href="https://github.com/RadientBrain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a> */}
                            <a href="https://wa.me/919014508402" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
                            <a href="tel:+919014508402" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram}/></a>
                            {/* <i class="fas fa-phone-square-alt" href="tel:+919014508402" ></i> */}
                        </div>
                        <div className="container">
                            <iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.262826255372!2d78.56233495625007!3d17.399170089372987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9932eb9cf763%3A0xdf85e0aaf9281a9!2sVijayapuri%20Colony%2C%20Uppal%2C%20Hyderabad%2C%20Telangana%20500039!5e0!3m2!1sen!2sin!4v1628771114000!5m2!1sen!2sin" allowfullscreen="" loading="lazy" ></iframe>
                        </div>
                    </div> 
                                       
                </div>

                {/* <div className="d-sm-flex justify-content-center input-fields text-center">
                    <form name="gform" id="gform" className="w-50" target="hidden_iframe" onsubmit="submitted=true;" action="https://docs.google.com/forms/d/e/1FAIpQLSfJEqK0oKRDMFUsBTRobUYWGpLODTQ1X1K6VWoglF-AaJ6AqA/formResponse?" >
                        <div className="row d-flex flex-row flex-wrap">
                            <div className="col input-textbox">
                                <input id="entry.1675495836" name="entry.1675495836" type="text" className="form-control" placeholder="Your Email"/>
                                <textarea id="entry.483319533" name="entry.483319533" className="form-control" aria-label="message-box" placeholder="Type your message here"></textarea>
                                <div className="col">
                                    <div className="btn-submit">
                                        <button id="magic-submit" value="Submit" type="submit" className="btn btn-success float-center">Send  <FontAwesomeIcon icon={faPaperPlane} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div dangerouslySetInnerHTML={{__html:  '<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>'}} />
                </div> */}
            </div>
        </section>
    )
}

export default Contact
