import React, {useEffect} from 'react'
import './styles/Cardstyle.css'
import { Link } from 'react-router-dom'
import Aos from "aos";
import "aos/dist/aos.css";


export default function Cards(props) {

    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, [])


    return (
                <div>

                    <div className='card' data-aos={`fade-left`}>
                        <div className="card-content">
                            <div className="Imgbox" style={{ backgroundImage: `url(${props.spacexdata.images.large})` }} >

                            </div>
                            <div className="content">
                                <h1 className="title">{props.spacexdata.name}</h1>
                                <p className="details">
                                    {props.spacexdata.details.slice(0, 150)}...
                                </p>
                                
                                <div className="status" style={{ color: props.spacexdata.status === "active" ? "green": props.spacexdata.status==="under construction"? "yellow"  : "red" }}>
                                    <h4>STATUS:  {props.spacexdata.status.toUpperCase()}</h4>
                                </div>
                                <h2 className="title">Launches</h2>
                                {props.spacexdata.launches.length ===0 ? <p className='details'> No launches present</p> : props.spacexdata.launches.slice(0, 3).map((item) => {
                                    return <p className='details'> {item} </p>
                                })}

                                <Link to={props.spacexdata.id} id="id1" className='button'>Show More</Link>
                            </div>
                        </div>
                    </div>
                </div >
          
    )
}
