import React from "react";
import ReactPlayer from 'react-player';


const Documental = ({documental}) => {
    return(
        <div className="documental-body">
            <h4 className="patrocinio">El catalogo online completo disponible en ALGOALGO</h4>
            {
                documental.map((item, index) => {
                    if (item.fields.link) {
                        return(
                            <div className="video-container" key={index}>
                                <ReactPlayer 
                                className="page-video"
                                url={item.fields.link}
                                controls={true}
                                responsive="true"
                                width="100%"
                                height="50vh"
                                /> 
                                <h2>{item.fields.title}</h2>
                                <p>{item.fields.description}</p>
                            </div>
                        )
                    } return null
                }) 
            }
        </div>
        
    )
}

export default Documental;