import React, { useState, useEffect } from 'react'

export const Apod = () => {

    const url = "https://api.nasa.gov/planetary/apod?api_key=c9Nzps3ewI44hpufud95xqeeg9c82fnGbCeRKNlb";

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        setIsLoaded(false);
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    console.log(result);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    
    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        console.log(data);
        return (
            <div className="apod fluid-container">
                <div className="apod-left-section">
                    <h2 data-aos="fade-down" data-aos-duration="1500">
                        Astronomy Picture Of The Day
                    </h2>
                    <a target="_blank" href={data.url}>
                        <img className="img-responsive img-fluid" src={data.url} alt=""/>
                        <h4>{data.title}</h4>
                    </a>
                    
                </div>
                
                <div className="apod-right-section">
                    <p>{data.explanation}</p>
                </div>
                
                
                
                {/* <p>{data.explanation}</p> */}
            </div>
        );
    }
}
