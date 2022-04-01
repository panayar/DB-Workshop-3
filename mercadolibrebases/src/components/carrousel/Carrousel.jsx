import React from 'react'
import Slide_1 from '../../assets/imgCarrousel1.jpg';
import Slide_2 from '../../assets/imgCarrousel2.jpg';
import Slide_3 from '../../assets/imgCarrousel3.jpg';


export default function Carrousel() {
return (
<div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Slide_1} className="d-block w-100" alt="anuncio_1"></img>

            </div>
            <div className="carousel-item">
                <img src={Slide_2} className="d-block w-100" alt="anuncio_2"></img>

            </div>
            <div className="carousel-item">
                <img src={Slide_3} className="d-block w-100" alt="anuncio_3"></img>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
</div>
)
}