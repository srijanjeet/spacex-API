import React, { useState, useEffect } from 'react'
import spacexApi from '../Utils/spacexApi'
import '../Utils/detailsStyle.css'
import { useParams } from 'react-router-dom';

export default function Details() {
    const [getData, setgetData] = useState([]);

    useEffect(() => {
        spacexApi(setgetData)
    }, [])
    const { id } = useParams()
    return (
        <><div className="big-container">
            {getData.map((spacexdata) => {
                if (spacexdata.id === id) {
                    return <> <div style={{ backgroundImage: `url(${spacexdata.images.large})` }} className="container1">
                    </div>

                        <div className='main-container'>

                            <div className="details1">
                                <div className="logo">
                                    <img className="cimage" src={spacexdata.images.large} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="dcontainer">
                            <div className="boxH">
                                <h1>{spacexdata.name}</h1>
                                <h2> {spacexdata.full_name}</h2>
                                <h3> Locality : <span> {spacexdata.locality} </span></h3>
                                <h3> Region : <span> {spacexdata.region} </span></h3>

                                <h3>Latitude :{spacexdata.latitude} </h3>
                                <h3>Longitude :{spacexdata.longitude}</h3>
                                <h3>Time-Zone: {spacexdata.timezone} </h3>
                            </div>
                            <div className='boxL'>
                                <h2>Details :</h2>
                                <h4>{spacexdata.details}</h4>
                                <div className="status" style={{ color: spacexdata.status === "active" ? "green": spacexdata.status==="under construction"? "yellow" : "red" }}>
                                    <h2 >STATUS:  {spacexdata.status.toUpperCase()}</h2>
                                </div>
                            </div>

                        </div>
                    </>
                }
                else return null

            })}
        </div>


        </>
    )
}
