import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const CarouselNews = ( {source}) => {
    var url = "https://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=6e450a1cae3442c6aff500df4cacf968";
    if(source==="us") {
        url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6e450a1cae3442c6aff500df4cacf968'
    }

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
                    //console.log(result);
                    setData(result.articles);
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
        //console.log(data);
        return (
            <Carousel fade>
                {
                    data.map((item, index) => {
                        // console.log(item);
                        return (
                            <Carousel.Item 
                                key={`${item.title}${index}`}
                                className="carourel-item"
                                interval={5000}
                                >
                                    <img 
                                        src={item.urlToImage}
                                        alt={item.title}
                                        className="img-fluid carousel-img d-block w-75"
                                    />
                                    <Carousel.Caption>
                                        <div className="carousel-item-caption">
                                            <p className="hide">{item.description}</p>
                                            <h5><a target="_blank" href={item.url}>{item.title}</a></h5>
                                        </div>
                                    </Carousel.Caption>
                                    
                            </Carousel.Item>
                        );
                    })
                }
            </Carousel>
        );
    }
}
