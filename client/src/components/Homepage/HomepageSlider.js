import React from "react";
import Slider from "react-slick";

export default function HomepageSlider() {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };
    return (
        <section className="homepage-slider">
            <Slider {...settings}>
                <img
                    src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=apartment-architecture-carpet-584399.jpg&fm=jpg"
                    alt="furniture"
                    className="active"
                />

                <img
                    src="https://images.pexels.com/photos/2806355/pexels-photo-2806355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="furniture"
                />

                <img
                    src="https://images.pexels.com/photos/2806351/pexels-photo-2806351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="furniture"
                />

                <img
                    src="https://images.pexels.com/photos/1090092/pexels-photo-1090092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260z"
                    alt="furniture"
                />
            </Slider>
        </section>
    );
}
