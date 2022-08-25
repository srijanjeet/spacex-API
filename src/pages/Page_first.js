import React, { useEffect, useState }  from 'react'
import spacexApi from '../Utils/spacexApi'
import Cards from '../components/Cards/Cards';



export default function Page_first() {
    
    const [getData, setgetData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        spacexApi(setgetData)
    }, [])

    


    return (
        <>
            <div className='body1'>
                
                {getData.map((spacexdata) => {
                    return <Cards key= {spacexdata.id} spacexdata = {spacexdata} />

                })}
            </div>
        </>
    )
}
