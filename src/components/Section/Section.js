import React, { useEffect, useState } from 'react'
import "./Section.css"
import Card from '../Card/Card';
import Carousel from '../Carousel/Carousel';
export default function Section({title, endpoint}) {
    const [albums, getalbum] = useState();
    const [isCollapse, setIsCollapse] = useState(false);
    useEffect(()=>{
        async function fetchFunction() {
            const response = await fetch("https://qtify-backend-labs.crio.do/albums/"+endpoint)
            // console.log(response);
            getalbum(await response.json());
        }
        fetchFunction()
    },[endpoint])

    // console.log(albums);
    
  return (
    <div className='section-wrapper'>
        <div className='section-title-and-buttons'>
            {/* section heading and collapse */}
            <h4 className='section-heading'>{title}</h4>
            <button className='section-button' onClick={()=>setIsCollapse(!isCollapse)}>{isCollapse ? "Collapse" : "Show all"}</button>
        </div>
        <div className='section-cards-grid'>
            {/* cards */}
            { !isCollapse ? <Carousel albums={albums}/> :
                albums?.map(album =>{
                    return <Card key={album.id} id={album.id} title={album.title} description={album.description} follow_count={album.follows} image={album.image} slug={album.slug} songs={album.songs}/>
                } )
            }
            {/* <Card id={album.id} title={album.title} description={album.description} follow_count={album.follows} image={album.image} slug={album.slug} songs={album.songs}/> */}
        </div>
    </div>
  )
}
