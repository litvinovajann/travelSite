import React from "react"
import './home.css'
import video from '../../Assets/splash.mp4'
import {GrLocation} from "react-icons/gr"
import {HiFilter} from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {AiOutlineInstagram } from "react-icons/ai"
import {FaTripadvisor} from "react-icons/fa"
import {BsListTask } from "react-icons/bs"
import {TbApps} from "react-icons/tb"

export default function Home() {
    return (
        <section className="home">
            <div className="overlay"> </div>
            <video src={video} muted autoPlay loop type="video/mp4">
            </video>
            <div className="container homeContent">
                <div className="textDiv">
                     <span className="smallText">
                            Package trips
                      </span>
                     <h1 className="homeTitle">
                            Search your next trip
                     </h1>
                </div>
                <div className="cardDiv grid">
                     <div className="destinationInput">
                        <label htmlFor="city">Search your destination:</label>
                        <div className="input flex">
                            <input
                                type="text"
                                placeholder="Enter city"
                            />
                            <GrLocation className="icon" />
                        </div>
                    </div>
                    <div className="dateInput">
                            <label htmlFor="date">Select dates</label>
                           <div className="input flex">
                           <input type="date"/>
                           </div>
                    </div>
                    <div className="priceInput">
                        <div className="label_total flex">
                            <label htmlFor="price">Max price:</label>
                            <h3 className="total">$13990</h3>
                        </div>
                        <div className="input flex">
                            <input type="range" max="5000" min="750" />
                        </div>
                    </div>
                    <div className="searchOptions flex">
                        <HiFilter className="icon"></HiFilter>
                        <span>MORE FILTERS</span>
                    </div>
                </div>
                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                        <FiFacebook className="icon" />
                        <AiOutlineInstagram className="icon" />
                        <FaTripadvisor className="icon" />
                    </div>
                    <div className="leftIcons">
                        <BsListTask className="icon" />
                        <TbApps className="icon" />
                    </div>
                </div>
            </div>
        </section>
    )
}