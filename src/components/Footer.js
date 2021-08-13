import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faTelegram} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div className="footer-basic">
            <div className="go-top text-center">
                <a href="#home_">
                    <div className="col-12 text-center">
                        <div className="row-12">
                        <FontAwesomeIcon icon={faArrowUp} size='2x' filter='drop-shadow(0 10px 0 var(--primary))'/>
                        </div>
                        <div className="row-12 top-text">
                            <b>Go Top</b>
                        </div>
                    </div>
                    
                </a>
            </div>
        <footer>
            <div className="social">
                <a href="https://www.instagram.com/mr.silent__soul/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                {/* <a href="https://github.com/RadientBrain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a> */}
                <a href="https://wa.me/919014508402" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp}/></a>
                <a href="tel:+919014508402" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegram}/></a>
                {/* <i class="fas fa-phone-square-alt" href="tel:+919014508402" ></i> */}
            </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="#home_">Home</a></li>
                {/* <li className="list-inline-item"><a href="#about_">About</a></li> */}
                <li className="list-inline-item"><a href="#skills_">CameraAndGear</a></li>
                {/* <li className="list-inline-item"><a href="#projects_">Projects</a></li> */}
                {/* <li className="list-inline-item"><a href="#achievements_">Achievements</a></li> */}
                <li className="list-inline-item"><a href="#extras_">FeedBack</a></li>
                <li className="list-inline-item"><a href="#contact_">Contact</a></li>
            </ul>
            <p className="copyright">Copyright &copy;2021 | All Rights Reserved | Yadav Camera Rentals</p>
        </footer>
    </div>
    )
}

export default Footer
