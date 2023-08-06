import React from "react"
import './main.css'
import "../../server.js"
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from "react-icons/hi"
import Aos from "aos"
import 'aos/dist/aos.css'


export default function Main() {
    const [data, setData] = React.useState([])
    React.useEffect(() => {
        fetch("/api/destinations")
        .then(res => res.json())
        .then(data => setData(data.destinations))
    }, [])
    React.useEffect(()=> {
      Aos.init({duration:2000})
      }, [])
    return (
        <section data-aos="fade-up" className="main container">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                  {data.map((destination)=>{
                    return (


                    <div key={destination.id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                          <img src={destination.img} alt=""></img>
                        </div>

                        <div className="cardInfo">

                          <h4 className="destTitle">
                            {destination.title}
                          </h4>

                          <span className="content flex">
                            <HiOutlineLocationMarker className="icon" />
                            <span className="name">
                              {destination.location}
                            </span>
                          </span>

                          <div className="fees flex">
                            <div className="grade">
                              <span>
                                {destination.grade}
                                <small>+1</small>
                              </span>
                            </div>
                            <div className="price">
                              <h5 className="price">
                                {destination.fees}
                              </h5>
                            </div>
                            <div className="desc">
                              <p>
                                {destination.description}
                              </p>
                            </div>
                          </div>
                          <button className="btn flex">
                            DETAILS 
                            <HiOutlineClipboardCheck className="icon" />
                          </button>
                        </div>
                    </div>         
                    )
                  }) }
            </div>
        </section>
    )
}