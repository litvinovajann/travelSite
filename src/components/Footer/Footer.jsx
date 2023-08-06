import React from "react"
import './footer.css'
import oceanVideo from '../../Assets/ocean.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from "react-icons/md"
import Aos from "aos"
import 'aos/dist/aos.css'
export default function Footer() {
    React.useEffect(()=> {
      Aos.init({duration:2000})
      }, [])
    return (
        <section data-aos="fade-up" className="footer">
            <div className="videoDiv">
                <video src={oceanVideo} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <small>
                            KEEP IN TOUCH
                        </small>
                        <h2>Travel with us</h2>
                    </div>
                
                <div  className="inputDiv flex">
                    <input type="text" placeholder="Email Address"/>
                    <button type="submit" className="btn flex">
                        SEND<FiSend className="icon"/>
                    </button>
                </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="https://litvinovajann.com" className="logo flex">
                                
                                <MdOutlineTravelExplore className="icon" />

                                Travel
                            </a>
                        </div>

                        <div  className="footerParagraph">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem numquam dolorum ab aspernatur optio excepturi suscipit, nesciunt fugiat veritatis quia libero aperiam hic minima ex. Consequatur doloremque accusamus inventore vel!
                        </div>

                        <div className="footerYear"> 2023 </div>

                    </div>
                </div>
            </div>

        </section>
    )
}