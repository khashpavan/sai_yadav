import React, { useState} from 'react';
import mylogo from '../radientbrain_logo.png';
import axios from 'axios';
//Importing react font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'

// const api = {
//     key: "143b7c10229d7963df710f79c05c14c8",
//     base: "https://api.openweathermap.org/data/2.5/weather?"
// }

// function WeatherReport() {


//     const [city, setCity] = useState('');
//     const [weather, setWeather] = useState({});


//     const search = evt => {
//         if(evt.key === "Enter"){
//             axios.get(`${api.base}q=${city}&appid=${api.key}`)
//             .then(res => res.data)
//             .then(result => {
//                 setWeather(result);
//                 setCity('');
//                 console.log(result);
//             })
//             .catch(function(error){
//                 alert(error);
//             });

//         }
//     }


//     const dateBuilder = (d) => {
//         let months= ['January', 'February', 'March', 'April', 'May', 'June', 'July',
//         'August', 'September', 'October', 'November', 'December'];
//         let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday","Friday","Saturday"];
        
//         let day = days[d.getDay()];
//         let date = d.getDate();
//         let month = months[d.getMonth()];
//         let year = d.getFullYear();

//         return `${day} ${date} ${month} ${year}`
//     } 

//     return ( 
//         <div className={(typeof weather.main != "undefined") ? ((weather.main.temp>(16+273.15)) ? 'weather-report warm' : 'weather-report') : 'weather-report'}>

//             <main>
//                 <div className="search-box">
                    
//                     <input 
//                     type="text" 
//                     className="search-bar" 
//                     onChange={ e => setCity(e.target.value) } 
//                     value={city}
//                     onKeyPress={search}
//                     placeholder="Search City..."
//                     />
//                 </div>
//                 {(typeof weather.main != "undefined") ? (
//                     <div className="data-wrapper">
//                         <div className="location-box">
//                             <div className="location">
//                                 {weather.name}, {weather.sys.country}
//                             </div>
//                             <div className="date">
//                                 {dateBuilder(new Date())}
//                             </div>
//                         </div>
//                         <div className="weather-box">
//                             <div className="temp">
//                                 {parseFloat(weather.main.temp-273.15).toFixed(0)}&deg;C
//                             </div>
//                             <div className="weather-icon">
//                             <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather-icon"/>
//                             </div>
//                             <div className="weather">
//                                 {weather.weather[0].main}
//                             </div>
//                         </div>
//                     </div>
//                 ): ('')}
//             </main>

//         </div>
//      );
// }


const Navbar = () => {
    return (
        <nav className="navbar drop-shadow navbar-expand-lg navbar-dark" style={{backgroundColor:'#3366cc', position: "sticky"}} fixed="top">
        <div className="container">

        {/* my logo */}
        <a className="navbar-brand" href="#home_"> <img className="logo" src={mylogo} alt="radientbrain-logo"/> </a>
        <a href="#home_">Camera Rentals</a>
        <button style={{color:'#ffffff'}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ml-auto" >
            <li className="nav-item active">
                <a className="nav-link" href="#home_">Home <span className="sr-only">(current)</span></a>
            </li>
            {/* <li className="nav-item active">
                <a className="nav-link" href="#about_">About</a>
            </li> */}
            <li className="nav-item active">
                <a className="nav-link" href="#skills_">Camera_And_Gear</a>
            </li>
            {/* <li className="nav-item active">
                <a className="nav-link" href="#projects_">Projects</a>
            </li> */}
            {/* <li className="nav-item active">
                <a className="nav-link" href="#achievements_">Achievements</a>
            </li> */}
            <li className="nav-item active">
                <a className="nav-link" href="#extras_">FeedBack</a>
            </li>
            <li className="nav-item active">
                <a className="nav-link" href="#contact_">Contact</a>
            </li>
            {/* <li className="nav-item active">
                    <button type="button" className="btn" data-toggle="modal" data-target="#exampleModal" data-backdrop="false">
                    <FontAwesomeIcon icon={ faCog } spin size="2x" style={{animationDuration:'4s' }}/>
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title w-100" id="exampleModalLabel">Weather Info</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            <WeatherReport/>
                            </div>
                            <div className="modal-footer">
                            <a data-toggle="modal" href="#myModal2" className="btn btn-success" id="graph-btn">Launch graph</a>
                                <button type="button" className="btn btn-success" style={{font:"normal 900 1rem/1.5rem 'Cutive Mono', monospace"}} data-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>


                        <div className="modal" id="myModal2" data-backdrop="false">
                            <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel2">Some fun with Graphs</h4>
                                <button id="cross-close-graph" type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                </div><div className="container"></div>
                                <div className="modal-body">


                                <div id="chart" className="col-12">

                                
                                </div>

                                
                                </div>
                                <div className="modal-footer">
                                <button type="button"  id="create-graph" className="btn btn-success" style={{font:"normal 900 1rem/1.5rem 'Cutive Mono', monospace"}} >Start Graph</button>
                                <button type="button" id="remove-graph" className="btn btn-success" style={{font:"normal 900 1rem/1.5rem 'Cutive Mono', monospace"}} data-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>
                   
            </li> */}

            
            </ul>

        </div>
        </div>
        </nav>

    )
}

export default Navbar
